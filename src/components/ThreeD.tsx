import './ThreeD.css';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

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

            targetRotationY = mouseX * Math.PI;
            targetRotationX = mouseY * Math.PI;
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

    return (
        <section className="threed">
            <div className="threed__scroll-content">
                <div className="threed__container">
                    {/* Left Content - Big Animated Text */}
                    <div className="threed__content">
                        <div className="threed__big-text">
                            <span className="number-container">
                                <div className="numbers-wrapper" id="numbersWrapper">
                                    <span className="number">2</span>
                                    <span className="number">3</span>
                                </div>
                            </span>D
                        </div>
                    </div>

                    {/* Right 3D Canvas */}
                    <div className="threed__canvas" ref={canvasRef}></div>
                </div>
            </div>
        </section>
    );
};

export default ThreeD;
