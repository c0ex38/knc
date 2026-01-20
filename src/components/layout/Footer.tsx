import { Link } from 'react-router-dom';
import { contactInfo, NAV_LINKS, SOCIAL_LINKS } from '../../constants';
import styles from './Footer.module.css';

/**
 * Footer Bileşeni
 * Sayfa alt bilgisi - marka, iletişim, navigasyon ve sosyal medya linkleri
 */
const Footer = () => {
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
