import { Link } from 'react-router-dom';
import { type CSSProperties } from 'react';

/**
 * Footer Bileşeni
 * Sayfa alt bilgisi - marka, iletişim, navigasyon ve sosyal medya linkleri
 */
const Footer = () => {
    // Styles
    const footerStyle: CSSProperties = {
        position: 'relative',
        background: 'linear-gradient(135deg, #111010 40%, #521605 100%)',
        padding: '8rem 0 4rem',
        color: '#FFFFFF',
        overflow: 'hidden',
    };

    const containerStyle: CSSProperties = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    };

    const leftStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
        maxWidth: '400px',
    };

    const brandStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
    };

    const logoImgStyle: CSSProperties = {
        width: '200px',
        height: 'auto',
        display: 'block',
        marginBottom: '1rem',
    };

    const contactStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        color: '#888',
        fontSize: '0.9rem',
        fontWeight: 300,
    };

    const infoStyle: CSSProperties = {
        margin: 0,
    };

    const addressStyle: CSSProperties = {
        margin: '1rem 0 0',
        lineHeight: 1.5,
        maxWidth: '300px',
    };

    const rightStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
        textAlign: 'right',
        alignItems: 'flex-end',
    };

    const navStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    };

    const navLinkStyle: CSSProperties = {
        color: '#888',
        textDecoration: 'none',
        fontSize: '1.1rem',
        fontWeight: 300,
        transition: 'color 0.3s ease',
    };

    const socialsStyle: CSSProperties = {
        display: 'flex',
        gap: '1.5rem',
    };

    const socialLinkStyle: CSSProperties = {
        color: '#fff',
        transition: 'transform 0.3s ease, color 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <>
            {/* Footer hover efektleri için CSS */}
            <style>
                {`
                    .footer__nav-link:hover {
                        color: #fff;
                    }
                    .footer__social-link:hover {
                        color: #c93d25;
                        transform: translateY(-2px);
                    }
                    
                    /* Responsive */
                    @media (max-width: 768px) {
                        .footer__container {
                            flex-direction: column !important;
                            padding: 0 2rem !important;
                            gap: 4rem;
                        }
                        .footer__right {
                            text-align: left !important;
                            align-items: flex-start !important;
                            width: 100%;
                        }
                    }
                `}
            </style>

            <footer style={footerStyle}>
                <div style={containerStyle} className="footer__container">
                    {/* Sol Taraf: Marka & İletişim */}
                    <div style={leftStyle}>
                        <div style={brandStyle}>
                            <img src="/footer.svg" alt="KNC Creative" style={logoImgStyle} />
                        </div>

                        <div style={contactStyle}>
                            <p style={infoStyle}>info@kncdesign.com.tr</p>
                            <p style={infoStyle}>+90 552 636 01 42</p>
                            <p style={addressStyle}>
                                Fevziçakmak, 10453. Sk. No:16/B, <br />
                                42050 Karatay/Konya
                            </p>
                        </div>
                    </div>

                    {/* Sağ Taraf: Navigasyon & Sosyal Medya */}
                    <div style={rightStyle} className="footer__right">
                        <nav style={navStyle}>
                            <Link to="/" style={navLinkStyle} className="footer__nav-link">ana sayfa</Link>
                            <Link to="/hakkimizda" style={navLinkStyle} className="footer__nav-link">hakkımızda</Link>
                            <Link to="/referanslar" style={navLinkStyle} className="footer__nav-link">referanslar</Link>
                            <Link to="/#contact" style={navLinkStyle} className="footer__nav-link">iletişim</Link>
                            <Link to="/#flash-ads" style={navLinkStyle} className="footer__nav-link">flaş reklam</Link>
                        </nav>

                        <div style={socialsStyle}>
                            <a href="#" style={socialLinkStyle} className="footer__social-link" aria-label="Instagram">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="#" style={socialLinkStyle} className="footer__social-link" aria-label="X">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                            </a>
                            <a href="#" style={socialLinkStyle} className="footer__social-link" aria-label="Facebook">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            <a href="#" style={socialLinkStyle} className="footer__social-link" aria-label="Spotify">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14.5c2.5-1 5.5-1 8 0"></path><path d="M7 11.5c3-1.5 7-1.5 10 0"></path><path d="M6 8.5c4-2 8-2 12 0"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
