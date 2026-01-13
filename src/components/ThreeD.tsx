import { useEffect, useRef, type CSSProperties } from 'react';
import * as THREE from 'three';

/**
 * ThreeD Bileşeni
 * 3D logo animasyonu - scroll ile 2D'den 3D'ye geçiş ve interaktif Three.js canvas
 */
const ThreeD = () => {
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        // Prevent duplicate canvas creation
        if (canvasRef.current.querySelector('canvas')) {
            return;
        }

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            canvasRef.current.clientWidth / canvasRef.current.clientHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
        canvasRef.current.appendChild(renderer.domElement);

        // Geometri Ayarları
        const outerRadius = 10;
        const innerRadius = 7;

        const arcShape = new THREE.Shape();
        arcShape.absarc(0, 0, outerRadius, 0, Math.PI * 2, false);

        const holePath = new THREE.Path();
        holePath.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);
        arcShape.holes.push(holePath);

        // Extrude Ayarları
        const extrudeSettings = {
            steps: 150,
            depth: 3,
            bevelEnabled: false,
            curveSegments: 64
        };

        const geometry = new THREE.ExtrudeGeometry(arcShape, extrudeSettings);
        geometry.computeVertexNormals();

        // Malzeme
        const material = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            shininess: 100,
            flatShading: false,
            side: THREE.DoubleSide
        });

        const ring = new THREE.Mesh(geometry, material);

        // İç Dolu Disk
        const innerDiskShape = new THREE.Shape();
        innerDiskShape.absarc(0, 0, innerRadius - 4, 0, Math.PI * 2, false);

        const innerDiskGeometry = new THREE.ExtrudeGeometry(innerDiskShape, extrudeSettings);
        innerDiskGeometry.computeVertexNormals();

        const innerDiskMaterial = new THREE.MeshBasicMaterial({
            color: 0xff2700,
            side: THREE.DoubleSide
        });

        const innerDisk = new THREE.Mesh(innerDiskGeometry, innerDiskMaterial);
        // İç diski hafifçe öne çek (z-fighting önleme)
        innerDisk.position.z = 0.01;

        // Group
        const ringGroup = new THREE.Group();
        ringGroup.add(ring);
        ringGroup.add(innerDisk);
        scene.add(ringGroup);

        // Işıklandırma
        const light1 = new THREE.PointLight(0xffffff, 500);
        light1.position.set(10, 10, 15);
        scene.add(light1);

        const light2 = new THREE.PointLight(0xffffff, 250);
        light2.position.set(-10, -10, 10);
        scene.add(light2);

        scene.add(new THREE.AmbientLight(0x404040, 2));

        camera.position.z = 25;

        // Mouse tracking
        let mouseX = 0;
        let mouseY = 0;
        let targetRotationX = 0;
        let targetRotationY = 0;

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvasRef.current?.getBoundingClientRect();
            if (!rect) return;

            mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouseY = ((event.clientY - rect.top) / rect.height) * 2 - 1;

            targetRotationY = mouseX * 0.4;
            targetRotationX = mouseY * 0.4;
        };

        canvasRef.current.addEventListener('mousemove', handleMouseMove);

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);

            ringGroup.rotation.x += (targetRotationX - ringGroup.rotation.x) * 0.05;
            ringGroup.rotation.y += (targetRotationY - ringGroup.rotation.y) * 0.05;

            renderer.render(scene, camera);
        };

        animate();

        // Resize handler
        const handleResize = () => {
            if (!canvasRef.current) return;
            camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);

            const container = canvasRef.current;
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
                const canvas = container.querySelector('canvas');
                if (canvas) {
                    container.removeChild(canvas);
                }
            }

            renderer.dispose();
            geometry.dispose();
            material.dispose();
            innerDiskGeometry.dispose();
            innerDiskMaterial.dispose();
        };
    }, []);

    // Separate useEffect for scroll animation
    useEffect(() => {
        // Scroll handler for number animation (based on window scroll)
        const handleScroll = () => {
            const section = document.querySelector('.threed__scroll-content') as HTMLElement;
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
            const windowHeight = window.innerHeight;

            // Calculate scroll progress within the section
            // scrollProgress goes from 0 (section entering viewport) to 1 (section leaving viewport)
            const scrollStart = windowHeight;
            const scrollEnd = -sectionHeight + windowHeight;
            const scrollRange = scrollStart - scrollEnd;
            const currentScroll = sectionTop;

            // Normalize to 0-1 range
            const scrollProgress = Math.max(0, Math.min(1, (scrollStart - currentScroll) / scrollRange));

            const wrapper = document.getElementById('numbersWrapper');
            if (!wrapper) return;

            // Smooth transition: animate between 0.3 and 0.7 of scroll progress
            if (scrollProgress < 0.3) {
                wrapper.style.transform = 'translateY(0%)';
            } else if (scrollProgress > 0.7) {
                wrapper.style.transform = 'translateY(-50%)';
            } else {
                const transition = (scrollProgress - 0.3) / 0.4;
                const movePercent = transition * 50;
                wrapper.style.transform = `translateY(-${movePercent}%)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Styles
    const threedStyle: CSSProperties = {
        position: 'relative',
        background: '#111010',
    };

    const scrollContentStyle: CSSProperties = {
        minHeight: '300vh',
        position: 'relative',
    };

    const containerStyle: CSSProperties = {
        position: 'sticky',
        top: 0,
        height: '100vh',
        maxWidth: '1600px',
        width: '100%',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '8rem',
        alignItems: 'center',
    };

    const contentStyle: CSSProperties = {
        paddingRight: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const bigTextStyle: CSSProperties = {
        fontSize: 'clamp(200px, 25vw, 500px)',
        fontWeight: 700,
        color: '#FFFFFF',
        letterSpacing: '0.05em',
        display: 'flex',
        alignItems: 'center',
        lineHeight: 1,
    };

    const numberContainerStyle: CSSProperties = {
        position: 'relative',
        display: 'inline-block',
        overflow: 'hidden',
        height: '1em',
        verticalAlign: 'top',
    };

    const numbersWrapperStyle: CSSProperties = {
        position: 'relative',
        transition: 'transform 0.5s ease',
        transform: 'translateY(0%)',
    };

    const numberStyle: CSSProperties = {
        display: 'block',
        lineHeight: '1em',
    };

    const canvasStyle: CSSProperties = {
        width: '100%',
        height: '600px',
        position: 'relative',
    };

    return (
        <>
            {/* Responsive CSS */}
            <style>
                {`
                    /* Canvas içindeki canvas elementi */
                    .threed__canvas canvas {
                        display: block;
                        width: 100% !important;
                        height: 100% !important;
                    }

                    /* Container içindeki tüm elementler pointer-events alabilir */
                    .threed__container > * {
                        pointer-events: auto;
                    }

                    /* Responsive Styles */
                    @media (max-width: 1024px) {
                        [data-threed-container] {
                            gap: 4rem !important;
                        }
                        [data-threed-canvas] {
                            height: 500px !important;
                        }
                    }

                    @media (max-width: 768px) {
                        [data-threed-container] {
                            grid-template-columns: 1fr !important;
                            gap: 3rem !important;
                        }
                        [data-threed-content] {
                            padding-right: 0 !important;
                            text-align: center;
                        }
                        [data-threed-canvas] {
                            height: 400px !important;
                        }
                    }

                    @media (max-width: 480px) {
                        [data-threed-section] {
                            padding: 4rem 1.5rem !important;
                        }
                        [data-threed-canvas] {
                            height: 300px !important;
                        }
                    }
                `}
            </style>

            <section style={threedStyle} data-threed-section className="threed">
                <div style={scrollContentStyle} className="threed__scroll-content">
                    <div 
                        style={containerStyle} 
                        data-threed-container 
                        className="threed__container"
                    >
                        {/* Left Content - Big Animated Text */}
                        <div style={contentStyle} data-threed-content>
                            <div style={bigTextStyle}>
                                <span style={numberContainerStyle}>
                                    <div style={numbersWrapperStyle} id="numbersWrapper">
                                        <span style={numberStyle}>2</span>
                                        <span style={numberStyle}>3</span>
                                    </div>
                                </span>D
                            </div>
                        </div>

                        {/* Right 3D Canvas */}
                        <div 
                            style={canvasStyle} 
                            data-threed-canvas 
                            className="threed__canvas" 
                            ref={canvasRef}
                        ></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ThreeD;
