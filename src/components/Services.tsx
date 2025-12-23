import './Services.css';
import { useEffect, useRef } from 'react';

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
        path.style.strokeDasharray = `${pathLength} `;
        path.style.strokeDashoffset = `${pathLength} `;

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
            path.style.strokeDashoffset = `${Math.max(0, pathLength - drawLength)} `;
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="services" id="services" ref={sectionRef}>
            <div className="services__container">
                {/* Section Header */}
                <div className="services__header" ref={headerRef}>
                    <h2 className="services__title">
                        hizmetlerimiz
                    </h2>
                    <p className="services__subtitle">
                        Gördüğünüzden fazlasını sunuyoruz.
                    </p>
                </div>

                {/* Wavy Line Divider */}
                <svg className="services__divider" viewBox="0 -1600 1200 2600" preserveAspectRatio="xMidYMid meet">
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
    );
};

const servicesData = [
    {
        number: "01",
        title: "grafik Tasarım",
        desc1: "Logo, broşür, afiş, katalog gibi tüm basılı ve dijital",
        desc2: "materyallerle kurumsal kimliğinizi profesyonelce yansıtırız.",
        x: 700,
        y: -1400,
        align: "right"
    },
    {
        number: "02",
        title: "video prodüksiyon",
        desc1: "Reklam filmleri, tanıtım videoları, backstage çekimleri ve",
        desc2: "etkileyici kurgular ile markanızı dinamik anlatıyoruz.",
        x: 500,
        y: -1000,
        align: "left"
    },
    {
        number: "03",
        title: "kurumsal kimlik",
        desc1: "Markanızın temek değerleriyle uyumlu, renk paletinizden",
        desc2: "yazı karakterlerinize kadar bütüncül bir kurumsal kimlik oluşturuyoruz.",
        x: 700,
        y: -600,
        align: "right"
    },
    {
        number: "04",
        title: "sosyal medya",
        desc1: "Oluşturduğumuz kimliği dijital dünyada da taşıyarak, Instagram,",
        desc2: "Linkedin ve diper platformlara özel stratejik içerikler, gönderiler,",
        desc3: "reels videoları ve sayfa yönetimiyle görünürlüğünüzü güçlendiriyoruz.",
        x: 500,
        y: -200,
        align: "left"
    },
    {
        number: "05",
        title: "web tasarım",
        desc1: "Benzersiz ve akılda kalıcı bir web sitesi oluşturuyoruz. Kalıplaşmış",
        desc2: "şablon web siteleri değil, yalnızca markanıza uygun, özel web siteleri oluşturuyoruz.",
        x: 700,
        y: 200,
        align: "right"
    },
    {
        number: "06",
        title: "promosyon ve iş elbiseleri",
        desc1: "Flaş reklam ortaklığıyla, 40 yıllık deneyimi markanıza yansıtıyoruz.",
        desc2: "Tasarım ve baskı süreci tek elden yönetilen iş elbiseleri ve promosyon",
        desc3: "ürünleriyle, markanızı sahada da tutarlı ve profesyonel şekilde temsil ediyoruz.",
        x: 500,
        y: 600,
        align: "left"
    },

];

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
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
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
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
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
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
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
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
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
                    fontWeight="bold"
                    fontFamily="Arial, sans-serif"
                    textAnchor={isRight ? "end" : "start"}
                >
                    {desc3}
                </text>
            )}
        </g>
    );
};

export default Services;
