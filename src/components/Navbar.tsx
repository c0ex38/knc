import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Media query için window width kontrolü
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 20);
    }, []);

    const handleResize = useCallback(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [handleScroll, handleResize]);

    const isMobile = windowWidth <= 968;

    const leftNavItems = [
        { label: 'hakkımızda', path: '/hakkimizda' },
        { label: 'hizmetler', path: '/hizmetlerimiz' },
    ];

    const rightNavItems = [
        { label: 'referanslar', path: '/referanslar' },
        { label: 'iletişim', path: '/iletisim' },
    ];

    const allNavItems = [...leftNavItems, ...rightNavItems];

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                {/* Left Navigation */}
                {!isMobile && (
                    <ul className={`${styles.menu} ${styles.menuLeft}`}>
                        {leftNavItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    className={styles.menuLink}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Logo */}
                <Link to="/" className={styles.logo}>
                    <Logo />
                </Link>

                {/* Right Navigation */}
                {!isMobile && (
                    <ul className={`${styles.menu} ${styles.menuRight}`}>
                        {rightNavItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    className={styles.menuLink}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Mobile Menu Toggle */}
                {isMobile && (
                    <button
                        className={styles.toggle}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Menu"
                    >
                        <span
                            style={{
                                transform: isMobileMenuOpen
                                    ? 'translateY(8px) rotate(45deg)'
                                    : 'none',
                            }}
                            className={styles.toggleSpan}
                        ></span>
                        <span
                            style={{
                                opacity: isMobileMenuOpen ? 0 : 1,
                                transform: isMobileMenuOpen ? 'scaleX(0)' : 'none',
                            }}
                            className={styles.toggleSpan}
                        ></span>
                        <span
                            style={{
                                transform: isMobileMenuOpen
                                    ? 'translateY(-8px) rotate(-45deg)'
                                    : 'none',
                            }}
                            className={styles.toggleSpan}
                        ></span>
                    </button>
                )}
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className={styles.overlay} onClick={() => setIsMobileMenuOpen(false)} />
            )}

            {/* Mobile Menu */}
            <div
                className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}
            >
                <ul className={styles.mobileMenuList}>
                    {allNavItems.map((item, index) => (
                        <li key={index} className={styles.mobileItem}>
                            <Link
                                to={item.path}
                                className={styles.mobileLink}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
