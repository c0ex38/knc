import { type CSSProperties } from 'react';
import SEO from '../components/SEO';

/**
 * About (Hakkımızda) Sayfası
 * KNC Creative'in vizyonu ve misyonu - İki kolonlu layout
 */
const About = () => {
    // Styles
    const pageStyle: CSSProperties = {
        paddingTop: '150px', // Navbar offset
        minHeight: '100vh',
        backgroundColor: '#111010',
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    };

    const containerStyle: CSSProperties = {
        maxWidth: '1600px',
        padding: '0 3rem',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr', // İki kolon
        gap: '6rem',
        alignItems: 'start',
    };

    // Sol taraf stilleri
    const leftColumnStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
    };

    const titleStyle: CSSProperties = {
        fontSize: 'clamp(2.5rem, 5vw, 6rem)',
        lineHeight: 1.1,
        marginBottom: '4rem',
        color: '#FFFFFF',
        fontWeight: 900,
        letterSpacing: '-2px',
    };

    const dividerStyle: CSSProperties = {
        display: 'flex',
        gap: '8px',
        marginBottom: '8rem',
    };

    const circleIconStyle: CSSProperties = {
        width: '24px',
        height: '24px',
        border: '4px solid #FF2700',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const circleInnerStyle: CSSProperties = {
        width: '6px',
        height: '6px',
        backgroundColor: '#FF2700',
        borderRadius: '50%',
    };

    const contentStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        lineHeight: 1.6,
        fontSize: 'clamp(1rem, 1.25vw, 1.75rem)',
        color: '#CCCCCC',
        fontWeight: 300,
    };

    // Sağ taraf stilleri
    const rightColumnStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '600px',
    };

    const rightPlaceholderStyle: CSSProperties = {
        width: '100%',
        height: '100%',
        minHeight: '600px',
        backgroundColor: '#1A1A1A',
        borderRadius: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(255, 255, 255, 0.3)',
        fontSize: '1.5rem',
        border: '2px dashed #3C3C3C',
    };

    return (
        <>
            <SEO 
                title="Hakkımızda"
                description="Bakan çok, gören az. Biz göreniz. KNC Creative'in vizyonu ve misyonu hakkında detaylı bilgi."
                canonical="https://kncdesign.com.tr/hakkimizda"
                keywords={['hakkımızda', 'vizyon', 'misyon', 'dijital ajans konya']}
            />

            {/* Responsive CSS */}
            <style>
                {`
                    @media (max-width: 1024px) {
                        [data-about-container] {
                            grid-template-columns: 1fr !important;
                            gap: 4rem !important;
                        }
                    }

                    @media (max-width: 768px) {
                        [data-about-page] {
                            padding-top: 120px !important;
                        }
                        [data-about-title] {
                            font-size: 2.5rem !important;
                        }
                        [data-about-divider] {
                            flex-wrap: wrap;
                        }
                    }

                    @media (max-width: 480px) {
                        [data-about-page] {
                            padding-top: 100px !important;
                        }
                        [data-about-container] {
                            padding: 0 1.5rem !important;
                        }
                        [data-about-title] {
                            font-size: 2rem !important;
                            margin-bottom: 3rem !important;
                        }
                        [data-about-content] {
                            font-size: 1rem !important;
                            gap: 2rem !important;
                        }
                        [data-about-circle] {
                            width: 16px !important;
                            height: 16px !important;
                            border-width: 3px !important;
                        }
                        [data-about-circle-inner] {
                            width: 4px !important;
                            height: 4px !important;
                        }
                        [data-about-right] {
                            min-height: 400px !important;
                        }
                    }
                `}
            </style>

            <div style={pageStyle} data-about-page>
                <div style={containerStyle} data-about-container>
                    {/* Sol Taraf - Mevcut İçerik */}
                    <div style={leftColumnStyle} data-about-left>
                        <h1 style={titleStyle} data-about-title>
                            Bakan çok, gören az.<br />
                            Biz göreniz.
                        </h1>

                        <div style={dividerStyle} data-about-divider>
                            {/* Tekrarlayan Daire Deseni */}
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div key={i} style={circleIconStyle} data-about-circle>
                                    <div style={circleInnerStyle} data-about-circle-inner></div>
                                </div>
                            ))}
                        </div>

                        <div style={contentStyle} data-about-content>
                            <p>
                                KNC Creative, grafik tasarımdan dijital içeriklere, kurumsal kimlikten sosyal medya
                                yönetimine kadar markanızın ihtiyacı olan tüm görsel dünyayı tek bir çatı altında sunar.
                            </p>
                            <p>
                                Biz, estetiği yalnızca "güzel" olan değil, doğru algılanan, fark edilen ve iz bırakan olarak tanımlarız.
                            </p>
                            <p>
                                Çünkü her projeye yalnızca bakmıyor, derinlemesine görüyoruz.
                                Ve bu farkla markanızı bir adım öne taşıyoruz.
                            </p>
                        </div>
                    </div>

                    {/* Sağ Taraf - Yeni Alan */}
                    <div style={rightColumnStyle} data-about-right>
                        <div style={rightPlaceholderStyle}>
                            {/* Buraya görsel, video veya başka içerik eklenebilir */}
                            Sağ Taraf İçeriği
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
