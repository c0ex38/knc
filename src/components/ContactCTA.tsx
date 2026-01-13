import { Link } from 'react-router-dom';

const ContactCTA = () => {
    return (
        <>
            <style>
                {`
                    @keyframes moveText {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }

                    @keyframes pulseGlow {
                        0% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.8); }
                        50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
                        100% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.8); }
                    }
                    
                    .cta-link {
                         transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                    }

                    .cta-link:hover .cta-text {
                        color: #FF2700; /* Orange color on hover */
                        letter-spacing: 0.1em;
                    }
                    
                    .cta-link:hover .cta-arrow {
                        transform: rotate(-45deg) scale(1.1);
                        background-color: #FF2700;
                        border-color: #FF2700;
                        color: #fff;
                    }

                    /* Smooth gradient text for the title */
                    .text-gradient-premium {
                        background: linear-gradient(135deg, #FF2700 0%, #FF7F50 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        display: inline-block;
                    }
                `}
            </style>
            <section style={{
                backgroundColor: '#111010',
                padding: '15vh 0',
                position: 'relative',
                overflow: 'hidden',
                borderTop: '1px solid rgba(255,255,255,0.05)'
            }}>
                {/* Background Glow Effect - new addition for depth */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '800px',
                    height: '800px',
                    background: 'radial-gradient(circle, rgba(255, 39, 0, 0.08) 0%, rgba(0,0,0,0) 70%)',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                    pointerEvents: 'none',
                    animation: 'pulseGlow 8s ease-in-out infinite'
                }} />

                {/* Decorative Background Text */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    transform: 'translateY(-50%)',
                    whiteSpace: 'nowrap',
                    opacity: 0.04,
                    fontFamily: 'var(--font-family-heading)',
                    fontSize: '30vw',
                    fontWeight: 900,
                    lineHeight: 1,
                    pointerEvents: 'none',
                    userSelect: 'none',
                    display: 'flex',
                    zIndex: 0
                }}>
                    <div style={{ animation: 'moveText 60s linear infinite', display: 'flex' }}>
                        <span>CONTACT US CONTACT US&nbsp;</span>
                        <span>CONTACT US CONTACT US&nbsp;</span>
                    </div>
                </div>

                <div 
                    className="cta-container"
                    style={{
                        maxWidth: '1600px',
                        margin: '0 auto',
                        padding: '0 2rem',
                        position: 'relative',
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4rem'
                    }}
                >
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{
                            fontFamily: 'Benz Grotesk, sans-serif',
                            fontSize: 'clamp(50px, 9vw, 130px)',
                            fontWeight: 900,
                            color: '#fff',
                            lineHeight: 0.9,
                            marginBottom: '2rem',
                            letterSpacing: '-0.02em'
                        }}>
                            PROJENİZİ<br />
                            <span className="text-gradient-premium">HAYATA GEÇİRELİM</span>
                        </h2>
                        <p style={{
                            fontFamily: 'var(--font-family-base)',
                            fontSize: 'clamp(18px, 1.5vw, 22px)',
                            color: '#b0b0b0',
                            fontWeight: 300,
                            maxWidth: '650px',
                            margin: '0 auto',
                            lineHeight: 1.7
                        }}>
                            Markanızı dijital dünyada öne çıkarmak için hazırsanız,
                            tanışmak ve projelerinizi konuşmak için sabırsızlanıyoruz.
                        </p>
                    </div>

                    <Link 
                        to="/iletisim"
                        className="cta-link"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            textDecoration: 'none',
                            padding: '10px',
                            cursor: 'pointer'
                        }}
                    >
                        <span 
                            className="cta-text"
                            style={{
                                fontFamily: 'var(--font-family-heading)',
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                color: '#fff',
                                letterSpacing: '0.05em',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            İLETİŞİME GEÇ
                        </span>
                        <div 
                            className="cta-arrow"
                            style={{
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                border: '1px solid rgba(255,255,255,0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s cubic-bezier(0.19, 1, 0.22, 1)',
                                color: '#fff',
                                background: 'rgba(255,255,255,0.02)', /* Subtle glass-like fill */
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default ContactCTA;
