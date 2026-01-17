import { useEffect, useRef } from 'react';
import { servicesData } from '../constants';
import type { ServiceItemProps } from '../types';
import styles from './Services.module.css';

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
            const scrollProgress = Math.min(1, scrollStart / (sectionHeight * 0.8)); // 0.6 for faster completion

            const drawLength = pathLength * scrollProgress;

            // Reveal path from Start (Top) to End (Bottom)
            path.style.strokeDashoffset = `${Math.max(0, pathLength - drawLength)}`;
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={styles.section} id="services" ref={sectionRef}>
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header} ref={headerRef}>
                    <h2 className={styles.title}>hizmetlerimiz</h2>
                    <p className={styles.subtitle}>Gördüğünüzden fazlasını sunuyoruz.</p>
                </div>

                {/* Wavy Line Divider */}
                <svg
                    className={styles.divider}
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
                    <g className="service-items">
                        {servicesData.map((service, index) => (
                            <ServiceItem key={index} {...service} />
                        ))}
                    </g>
                </svg>
            </div>
        </section>
    );
};

// Helper component for SVG text group
const ServiceItem = ({
    number,
    title,
    desc1,
    desc2,
    desc3,
    x,
    y,
    align = 'right',
}: ServiceItemProps) => {
    const isRight = align === 'right';

    return (
        <g transform={`translate(${x}, ${y})`}>
            {/* Number Background */}
            <text
                x={isRight ? '250' : '-250'}
                y="50"
                className={styles.numberText}
                textAnchor={isRight ? 'start' : 'end'}
            >
                {number}
            </text>

            {/* Title */}
            <text
                x={isRight ? '300' : '-300'}
                y="-50"
                className={styles.titleText}
                textAnchor={isRight ? 'end' : 'start'}
            >
                {title}
            </text>

            {/* Description Line 1 */}
            <text
                x={isRight ? '300' : '-300'}
                y="0"
                className={styles.descText}
                textAnchor={isRight ? 'end' : 'start'}
            >
                {desc1}
            </text>

            {/* Description Line 2 */}
            <text
                x={isRight ? '300' : '-300'}
                y="25"
                className={styles.descText}
                textAnchor={isRight ? 'end' : 'start'}
            >
                {desc2}
            </text>

            {/* Description Line 3 */}
            {desc3 && (
                <text
                    x={isRight ? '-200' : '-300'}
                    y="50"
                    className={styles.descText}
                    textAnchor={isRight ? 'end' : 'start'}
                >
                    {desc3}
                </text>
            )}
        </g>
    );
};

export default Services;
