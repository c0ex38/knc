import { Link } from 'react-router-dom';
import { contactInfo } from '../constants';
import { type CSSProperties } from 'react';

/**
 * Footer Bileşeni
 * Sayfa alt bilgisi - marka, iletişim, navigasyon ve sosyal medya linkleri
 * Single File Component yapısına uygun olarak stiller içe aktarıldı
 */
const Footer = () => {
    const SOCIAL_LINKS = [
        {
            href: contactInfo.instagram,
            label: "Instagram",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            )
        },
        {
            href: "https://x.com/knccreative",
            label: "X",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
            )
        },
        {
            href: "https://www.instagram.com/knccreative_/", // TODO: Update with actual Facebook link
            label: "Facebook",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            )
        },
        {
            href: "https://www.instagram.com/knccreative_/", // TODO: Update with actual Spotify link
            label: "Spotify",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14.5c2.5-1 5.5-1 8 0"></path><path d="M7 11.5c3-1.5 7-1.5 10 0"></path><path d="M6 8.5c4-2 8-2 12 0"></path></svg>
            )
        }
    ];

    const NAV_LINKS = [
        { to: "/", label: "ana sayfa" },
        { to: "/hakkimizda", label: "hakkımızda" },
        { to: "/referanslar", label: "referanslar" },
        { to: "/iletisim", label: "iletişim" },
        { href: "https://www.flasreklam.com", label: "flaş reklam" } // External link
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // ============ Stil Tanımlamaları ============

    const footerStyle: CSSProperties = {
        position: 'relative',
        background: 'linear-gradient(135deg, var(--color-black) 40%, #521605 100%)',
        padding: '8rem 0 4rem',
        color: '#fff',
        overflow: 'hidden',
    };

    const containerStyle: CSSProperties = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 var(--spacing-3xl)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
    };

    const leftColStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-3xl)',
        maxWidth: '400px',
        width: '100%',
    };

    const brandStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
    };

    const logoStyle: CSSProperties = {
        width: '200px',
        height: 'auto',
        display: 'block',
        marginBottom: 'var(--spacing-md)',
    };

    const contactStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-sm)',
        color: '#888',
        fontSize: '0.9rem',
        fontWeight: 300,
    };

    const contactLinkStyle: CSSProperties = {
        margin: 0,
        color: 'inherit',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
    };

    const addressLinkStyle: CSSProperties = {
        ...contactLinkStyle,
        marginTop: 'var(--spacing-md)',
        lineHeight: 1.5,
        maxWidth: '300px',
    };

    const rightColStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-3xl)',
        textAlign: 'right',
        alignItems: 'flex-end',
        width: '100%',
    };

    const navStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-lg)',
    };

    const navLinkStyle: CSSProperties = {
        color: '#888',
        textDecoration: 'none',
        fontSize: '1.1rem',
        fontWeight: 300,
        transition: 'all 0.3s ease',
        display: 'inline-block',
    };

    const socialsStyle: CSSProperties = {
        display: 'flex',
        gap: 'var(--spacing-lg)',
    };

    const socialLinkStyle: CSSProperties = {
        color: '#fff',
        transition: 'transform 0.3s ease, color 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <footer style={footerStyle} className="footer">
            <style>
                {`
                    .footer__contact-link:hover {
                        color: #fff !important;
                        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
                    }
                    
                    .footer__nav-link:hover {
                        color: #fff !important;
                        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
                        transform: translateX(5px);
                    }
                    
                    .footer__social-link:hover {
                        color: #c93d25 !important;
                        transform: translateY(-2px);
                    }

                    @media (max-width: 768px) {
                        .footer__container {
                            flex-direction: column !important;
                            padding: 0 var(--spacing-xl) !important;
                            gap: var(--spacing-3xl) !important;
                        }

                        .footer__right {
                            text-align: left !important;
                            align-items: flex-start !important;
                        }

                        .footer__nav-link:hover {
                            transform: translateX(5px) !important;
                        }
                    }
                `}
            </style>

            <div style={containerStyle} className="footer__container">
                {/* Sol Taraf: Marka & İletişim */}
                <div style={leftColStyle} className="footer__left">
                    <div style={brandStyle} className="footer__brand">
                        <Link 
                            to="/" 
                            onClick={scrollToTop}
                            style={{ textDecoration: 'none', display: 'block' }}
                        >
                            <img src="/footer.svg" alt="KNC Creative" style={logoStyle} className="footer__logo" />
                        </Link>
                    </div>

                    <div style={contactStyle} className="footer__contact">
                        <a 
                            href={`mailto:${contactInfo.email}`} 
                            style={contactLinkStyle}
                            className="footer__contact-link"
                        >
                            {contactInfo.email}
                        </a>
                        <a 
                            href={`tel:${contactInfo.phone}`} 
                            style={contactLinkStyle}
                            className="footer__contact-link"
                        >
                            {contactInfo.phone}
                        </a>
                        <a 
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={addressLinkStyle}
                            className="footer__contact-link address"
                        >
                            {contactInfo.address}
                        </a>
                    </div>
                </div>

                {/* Sağ Taraf: Navigasyon & Sosyal Medya */}
                <div style={rightColStyle} className="footer__right">
                    <nav style={navStyle} className="footer__nav">
                        {NAV_LINKS.map((link, index) => (
                            link.to ? (
                                <Link 
                                    key={index} 
                                    to={link.to} 
                                    style={navLinkStyle}
                                    className="footer__nav-link"
                                    onClick={link.to === '/' ? scrollToTop : undefined}
                                >
                                    {link.label}
                                </Link>
                            ) : (
                                <a 
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={navLinkStyle}
                                    className="footer__nav-link"
                                >
                                    {link.label}
                                </a>
                            )
                        ))}
                    </nav>

                    <div style={socialsStyle} className="footer__socials">
                        {SOCIAL_LINKS.map((social, index) => (
                            <a 
                                key={index}
                                href={social.href} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={socialLinkStyle}
                                className="footer__social-link" 
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
