import { Link } from 'react-router-dom';
import { contactInfo } from '../constants';
import styles from './Footer.module.css';

/**
 * Footer Bileşeni
 * Sayfa alt bilgisi - marka, iletişim, navigasyon ve sosyal medya linkleri
 */
const Footer = () => {
    const SOCIAL_LINKS = [
        {
            href: contactInfo.instagram,
            label: 'Instagram',
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            ),
        },
        {
            href: 'https://x.com/knccreative',
            label: 'X',
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
            ),
        },
        {
            href: 'https://www.facebook.com/knccreative',
            label: 'Facebook',
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
            ),
        },
        {
            href: '#',
            label: 'Spotify',
            icon: (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14.5c2.5-1 5.5-1 8 0"></path>
                    <path d="M7 11.5c3-1.5 7-1.5 10 0"></path>
                    <path d="M6 8.5c4-2 8-2 12 0"></path>
                </svg>
            ),
        },
    ];

    const NAV_LINKS = [
        { to: '/', label: 'ana sayfa' },
        { to: '/hakkimizda', label: 'hakkımızda' },
        { to: '/referanslar', label: 'referanslar' },
        { to: '/iletisim', label: 'iletişim' },
        { href: 'https://www.flasreklam.com', label: 'flaş reklam' }, // External link
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Sol Taraf: Marka & İletişim */}
                <div className={styles.leftCol}>
                    <div className={styles.brand}>
                        <Link
                            to="/"
                            onClick={scrollToTop}
                            style={{ textDecoration: 'none', display: 'block' }}
                        >
                            <img src="/footer.svg" alt="KNC Creative" className={styles.logo} />
                        </Link>
                    </div>

                    <div className={styles.contact}>
                        <a href={`mailto:${contactInfo.email}`} className={styles.contactLink}>
                            {contactInfo.email}
                        </a>
                        <a href={`tel:${contactInfo.phone}`} className={styles.contactLink}>
                            {contactInfo.phone}
                        </a>
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.addressLink}
                        >
                            {contactInfo.address}
                        </a>
                    </div>
                </div>

                {/* Sağ Taraf: Navigasyon & Sosyal Medya */}
                <div className={styles.rightCol}>
                    <nav className={styles.nav}>
                        {NAV_LINKS.map((link, index) =>
                            link.to ? (
                                <Link
                                    key={index}
                                    to={link.to}
                                    className={styles.navLink}
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
                                    className={styles.navLink}
                                >
                                    {link.label}
                                </a>
                            )
                        )}
                    </nav>

                    <div className={styles.socials}>
                        {SOCIAL_LINKS.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label={`${social.label} sayfamızı ziyaret edin`}
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
