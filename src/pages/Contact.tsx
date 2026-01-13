import { type CSSProperties } from 'react';
import SEO from '../components/SEO';
import { contactInfo } from '../constants';

/**
 * Contact (İletişim) Sayfası
 * İletişim bilgileri ve sosyal medya linkleri
 */
const Contact = () => {
    // Styles
    const pageStyle: CSSProperties = {
        paddingTop: '150px',
        minHeight: '100vh',
        backgroundColor: '#111010',
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const containerStyle: CSSProperties = {
        maxWidth: '1400px',
        padding: '0 3rem',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '8rem',
        alignItems: 'center',
    };

    const contentWrapperStyle: CSSProperties = {
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    };

    const titleStyle: CSSProperties = {
        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
        fontWeight: 900,
        marginBottom: '1.5rem',
        color: '#FFFFFF',
        letterSpacing: '-3px',
        lineHeight: 1,
    };

    const subtitleStyle: CSSProperties = {
        fontSize: 'clamp(0.95rem, 1.5vw, 1.25rem)',
        color: 'rgba(255, 255, 255, 0.9)',
        marginBottom: '4rem',
        fontWeight: 400,
    };

    const emailStyle: CSSProperties = {
        display: 'inline-block',
        fontSize: 'clamp(1.25rem, 3vw, 2.25rem)',
        fontWeight: 700,
        color: '#FF2700',
        textDecoration: 'none',
        marginBottom: '4rem',
        transition: 'all 0.3s ease',
        position: 'relative',
        paddingBottom: '6px',
    };

    const cardsStyle: CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '2rem',
        marginTop: '3rem',
    };

    const cardStyle: CSSProperties = {
        position: 'relative',
        minHeight: '160px',
        border: '2px solid #3C3C3C',
        borderRadius: '1rem',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        backgroundColor: 'transparent',
        textDecoration: 'none',
        color: '#FFFFFF',
        cursor: 'pointer',
    };

    const cardIconStyle: CSSProperties = {
        fontSize: 'clamp(2rem, 4vw, 2.5rem)',
        marginBottom: '1rem',
        filter: 'grayscale(100%)',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
    };

    const cardTitleStyle: CSSProperties = {
        fontSize: 'clamp(0.95rem, 1.5vw, 1.125rem)',
        fontWeight: 700,
        marginBottom: '0.5rem',
        color: '#FFFFFF',
    };

    const cardTextStyle: CSSProperties = {
        fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)',
        color: 'rgba(255, 255, 255, 0.9)',
        lineHeight: 1.4,
    };

    const videoContainerStyle: CSSProperties = {
        width: '100%',
        maxWidth: '400px',
        aspectRatio: '9 / 16',
        backgroundColor: '#1A1A1A',
        borderRadius: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '1.5rem',
        overflow: 'hidden',
        margin: '0 auto',
    };

    const videoElementStyle: CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '1.5rem',
    };

    return (
        <>
            <SEO
                title="İletişim"
                description="KNC Creative ile iletişime geçin. Email, WhatsApp ve Instagram üzerinden bize ulaşabilirsiniz."
                canonical="https://kncdesign.com.tr/iletisim"
                keywords={['iletişim', 'contact', 'email', 'whatsapp', 'instagram', 'konya dijital ajans']}
            />

            {/* Hover ve Responsive CSS */}
            <style>
                {`
                    /* Email hover efekti */
                    .contact-email::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background-color: #FF2700;
                        transform: scaleX(0);
                        transform-origin: right;
                        transition: transform 0.3s ease;
                    }

                    .contact-email:hover {
                        color: #FF5733;
                        transform: translateY(-2px);
                    }

                    .contact-email:hover::after {
                        transform: scaleX(1);
                        transform-origin: left;
                    }

                    /* Card hover efekti */
                    .contact-card:hover {
                        transform: translateY(-6px);
                        border-color: #FF2700;
                        background-color: #FF2700;
                        box-shadow: 0 0 25px rgba(255, 39, 0, 0.4), 0 0 50px rgba(255, 39, 0, 0.2);
                    }

                    .contact-card:hover .contact-card-icon {
                        filter: grayscale(0%);
                        transform: scale(1.1);
                    }

                    .contact-card:hover .contact-card-text {
                        color: #FFFFFF;
                    }

                    /* Icon boyutları */
                    .contact-card-icon svg,
                    .contact-card-icon i {
                        width: clamp(2rem, 4vw, 2.5rem);
                        height: clamp(2rem, 4vw, 2.5rem);
                        font-size: clamp(2rem, 4vw, 2.5rem);
                    }

                    /* Responsive */
                    @media (max-width: 1024px) {
                        [data-contact-container] {
                            grid-template-columns: 1fr !important;
                            gap: 4rem !important;
                        }
                        [data-contact-content] {
                            text-align: center;
                        }
                        [data-contact-cards] {
                            grid-template-columns: repeat(3, 1fr) !important;
                        }
                    }

                    @media (max-width: 768px) {
                        [data-contact-page] {
                            padding-top: 120px !important;
                        }
                        [data-contact-container] {
                            padding: 0 1.5rem !important;
                        }
                        [data-contact-cards] {
                            grid-template-columns: 1fr !important;
                            gap: 1.5rem !important;
                        }
                        .contact-card {
                            min-height: 140px !important;
                        }
                    }

                    @media (max-width: 480px) {
                        [data-contact-page] {
                            padding-top: 100px !important;
                        }
                        [data-contact-subtitle] {
                            margin-bottom: 2rem !important;
                        }
                        [data-contact-email] {
                            margin-bottom: 2rem !important;
                        }
                        [data-contact-video] {
                            min-height: 300px !important;
                        }
                    }
                `}
            </style>

            <div style={pageStyle} data-contact-page>
                <div style={containerStyle} data-contact-container>
                    {/* Sol Taraf - İçerik */}
                    <div style={contentWrapperStyle} data-contact-content>
                        {/* Ana Başlık */}
                        <h1 style={titleStyle}>Let's Talk</h1>

                        {/* Alt Başlık */}
                        <p style={subtitleStyle} data-contact-subtitle>
                            Projeleriniz için bizimle iletişime geçin
                        </p>

                        {/* Email - Vurgulu Gösterim */}
                        <a 
                            href={`mailto:${contactInfo.email}`} 
                            style={emailStyle}
                            className="contact-email"
                            data-contact-email
                        >
                            {contactInfo.email}
                        </a>

                        {/* İletişim Kartları */}
                        <div style={cardsStyle} data-contact-cards>
                            {/* Instagram */}
                            <a
                                href={contactInfo.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={cardStyle}
                                className="contact-card"
                            >
                                <div style={cardIconStyle} className="contact-card-icon">
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                                <h3 style={cardTitleStyle}>Instagram</h3>
                            </a>

                            {/* Konum */}
                            <a
                                href="https://www.google.com/maps/place/Fla%C5%9F+Reklam+Promosyon/@37.9051055,32.5092076,3415m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14d08fb3f05c176f:0xff2bc20f77c77b!8m2!3d37.90509!4d32.52764!16s%2Fg%2F1tdjmwlw?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={cardStyle}
                                className="contact-card"
                            >
                                <div style={cardIconStyle} className="contact-card-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <h3 style={cardTitleStyle}>Konum</h3>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href={contactInfo.whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={cardStyle}
                                className="contact-card"
                            >
                                <div style={cardIconStyle} className="contact-card-icon">
                                    <i className="fa-brands fa-whatsapp"></i>
                                </div>
                                <h3 style={cardTitleStyle}>WhatsApp</h3>
                            </a>
                        </div>
                    </div>

                    {/* Sağ Taraf - Video */}
                    <div style={videoContainerStyle} data-contact-video>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={videoElementStyle}
                        >
                            <source src="/contact-video.mp4" type="video/mp4" />
                            Video yüklenemedi
                        </video>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
