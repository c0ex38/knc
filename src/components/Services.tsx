import { useEffect, useRef, type CSSProperties } from 'react';
import { servicesData } from '../constants';

/**
 * Services Bileşeni
 * Hizmetler bölümü - scroll ile çizilen dalgalı çizgi ve hizmet kartları
 */
const Services = () => {
    const pathRef = useRef<SVGPathElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const path = pathRef.current;
        const section = sectionRef.current;
        const header = headerRef.current;
        if (!path || !section || !header) return;

        const pathLength = path.getTotalLength();

        // Set initial state - path hidden
        path.style.strokeDasharray = `${pathLength}`;
        path.style.strokeDashoffset = `${pathLength}`;

        const handleScroll = () => {
            // Get header position - start drawing when header reaches top
            const headerTop = header.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;

            // Start when header hits top of viewport
            // Progress from 0 (header at top) to 1 (section fully scrolled)
            const scrollStart = Math.max(0, -headerTop);
            const scrollProgress = Math.min(1, scrollStart / (sectionHeight * 0.6)); // 0.6 for faster completion

            const drawLength = pathLength * scrollProgress;

            // Reveal path from Start (Top) to End (Bottom)
            path.style.strokeDashoffset = `${Math.max(0, pathLength - drawLength)}`;
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Styles
    const servicesStyle: CSSProperties = {
        position: 'relative',
        minHeight: 'auto',
        padding: '8rem 2rem',
        background: '#111010',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const containerStyle: CSSProperties = {
        maxWidth: '1600px',
        width: '100%',
        margin: '0 auto',
    };

    const headerStyle: CSSProperties = {
        textAlign: 'left',
        marginBottom: '8rem',
    };

    const titleStyle: CSSProperties = {
        fontSize: 'clamp(2rem, 4.5vw, 4.5rem)', // Küçültüldü: 6rem -> 4.5rem
        fontWeight: 400,
        color: '#FFFFFF',
        marginBottom: '1.5rem',
    };

    const subtitleStyle: CSSProperties = {
        fontSize: 'clamp(0.95rem, 1.5vw, 1.35rem)', // Küçültüldü: 1.75rem -> 1.35rem
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: 300,
        maxWidth: '800px',
        margin: '2rem 0 0',
    };

    const dividerStyle: CSSProperties = {
        width: '100%',
        maxWidth: '1600px',
        height: 'auto',
        margin: '4rem auto 0',
        display: 'block',
    };

    return (
        <>
            {/* Responsive CSS */}
            <style>
                {`
                    /* Responsive Styles */
                    @media (max-width: 1024px) {
                        .services__divider {
                            max-width: 900px !important;
                        }
                    }

                    @media (max-width: 768px) {
                        [data-services-section] {
                            padding: 4rem 1.5rem !important;
                        }
                        [data-services-header] {
                            margin-bottom: 3rem !important;
                        }
                        [data-services-title] {
                            font-size: clamp(2rem, 6vw, 3rem) !important;
                        }
                        .services__divider {
                            max-width: 600px !important;
                        }
                    }

                    @media (max-width: 480px) {
                        [data-services-section] {
                            padding: 3rem 1rem !important;
                        }
                        [data-services-title] {
                            font-size: clamp(1.75rem, 7vw, 2.5rem) !important;
                        }
                        [data-services-subtitle] {
                            font-size: clamp(0.875rem, 4vw, 1rem) !important;
                        }
                        .services__divider {
                            max-width: 100% !important;
                            padding: 0 1rem !important;
                        }
                    }

                    @media (max-width: 360px) {
                        [data-services-section] {
                            padding: 2rem 0.5rem !important;
                        }
                        .services__divider {
                            max-width: 100% !important;
                        }
                    }

                    /* Large Screen SVG Text Scaling */
                    @media (min-width: 1600px) {
                        .services__divider text[font-size="20"] {
                            font-size: 24px !important;
                        }
                        .services__divider text[font-size="40"] {
                            font-size: 56px !important;
                        }
                        .services__divider text[font-size="150"] {
                            font-size: 210px !important;
                        }
                    }

                    /* Mobile SVG Text Scaling */
                    @media (max-width: 768px) {
                        .services__divider text[font-size="20"] {
                            font-size: 16px !important;
                        }
                        .services__divider text[font-size="150"] {
                            font-size: 100px !important;
                        }
                        .services__divider text[font-size="40"] {
                            font-size: 32px !important;
                        }
                    }

                    @media (max-width: 480px) {
                        .services__divider text[font-size="20"] {
                            font-size: 28px !important;
                        }
                        .services__divider text[font-size="150"] {
                            font-size: 140px !important;
                        }
                        .services__divider text[font-size="40"] {
                            font-size: 50px !important;
                        }
                    }
                `}
            </style>

            <section 
                style={servicesStyle} 
                data-services-section 
                id="services" 
                ref={sectionRef}
            >
                <div style={containerStyle}>
                    {/* Section Header */}
                    <div 
                        style={headerStyle} 
                        data-services-header 
                        ref={headerRef}
                    >
                        <h2 style={titleStyle} data-services-title>
                            hizmetlerimiz
                        </h2>
                        <p style={subtitleStyle} data-services-subtitle>
                            Gördüğünüzden fazlasını sunuyoruz.
                        </p>
                    </div>

                    {/* Wavy Line Divider */}
                    <svg 
                        className="services__divider" 
                        style={dividerStyle}
                        viewBox="0 -1600 1200 2600" 
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <path
                            ref={pathRef}
                            d="M600,-1600 C100,-1550 0,-1500 0,-1400 C0,-1300 100,-1250 600,-1200 C1100,-1150 1200,-1100 1200,-1000 C1200,-900 1100,-850 600,-800 C100,-750 0,-700 0,-600 C0,-500 100,-450 600,-400 C1100,-350 1200,-300 1200,-200 C1200,-100 1100,-50 600,0 C100,50 0,100 0,200 C0,300 100,350 600,400 C1100,450 1200,500 1200,600 C1200,700 1100,750 600,800 C100,850 0,900 0,1000"
                            fill="none"
                            stroke="#ff2700"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                        {/* Service Items */}
                        <g className="service-items">
                            {servicesData.map((service, index) => (
                                <ServiceItem
                                    key={index}
                                    number={service.number}
                                    title={service.title}
                                    desc1={service.desc1}
                                    desc2={service.desc2}
                                    desc3={(service as any).desc3}
                                    x={service.x}
                                    y={service.y}
                                    align={service.align as "left" | "right"}
                                />
                            ))}
                        </g>
                    </svg>
                </div>
            </section>
        </>
    );
};


// Helper component for SVG text group
const ServiceItem = ({ number, title, desc1, desc2, desc3, x, y, align = "right" }: { number: string, title: string, desc1: string, desc2: string, desc3?: string, x: number, y: number, align?: "left" | "right" }) => {
    const isRight = align === "right";

    return (
        <g transform={`translate(${x}, ${y})`}>
            {/* Number Background */}
            <text
                x={isRight ? "250" : "-250"}
                y="50"
                fill="#fff"
                fillOpacity="0.3"
                fontSize="150"
                fontWeight="300"
                fontFamily="Benz Grotesk, Arial, sans-serif"
                textAnchor={isRight ? "start" : "end"}
            >
                {number}
            </text>

            {/* Title */}
            <text
                x={isRight ? "300" : "-300"}
                y="-50"
                fill="#fff"
                fontSize="40"
                fontWeight="400"
                fontFamily="Benz Grotesk, Arial, sans-serif"
                textAnchor={isRight ? "end" : "start"}
            >
                {title}
            </text>

            {/* Description Line 1 */}
            <text
                x={isRight ? "300" : "-300"}
                y="0"
                fill="#fff"
                fillOpacity="0.7"
                fontSize="20"
                fontWeight="300"
                fontFamily="Montserrat, Arial, sans-serif"
                textAnchor={isRight ? "end" : "start"}
            >
                {desc1}
            </text>

            {/* Description Line 2 */}
            <text
                x={isRight ? "300" : "-300"}
                y="25"
                fill="#fff"
                fillOpacity="0.7"
                fontSize="20"
                fontWeight="300"
                fontFamily="Montserrat, Arial, sans-serif"
                textAnchor={isRight ? "end" : "start"}
            >
                {desc2}
            </text>

            {/* Description Line 3 */}
            {desc3 && (
                <text
                    x={isRight ? "-200" : "-300"}
                    y="50"
                    fill="#fff"
                    fillOpacity="0.7"
                    fontSize="20"
                    fontWeight="300"
                    fontFamily="Montserrat, Arial, sans-serif"
                    textAnchor={isRight ? "end" : "start"}
                >
                    {desc3}
                </text>
            )}
        </g>
    );
};

export default Services;
