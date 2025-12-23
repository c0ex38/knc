import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './Logo';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__container">
                {/* Left Navigation */}
                <ul className="navbar__menu navbar__menu--left">
                    {leftNavItems.map((item, index) => (
                        <li key={index} className="navbar__menu-item">
                            <Link
                                to={item.path}
                                className="navbar__menu-link"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Logo */}
                <Link to="/" className="navbar__logo">
                    <Logo />
                </Link>

                {/* Right Navigation */}
                <ul className="navbar__menu navbar__menu--right">
                    {rightNavItems.map((item, index) => (
                        <li key={index} className="navbar__menu-item">
                            <Link
                                to={item.path}
                                className="navbar__menu-link"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    className={`navbar__toggle ${isMobileMenuOpen ? 'navbar__toggle--active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`navbar__mobile ${isMobileMenuOpen ? 'navbar__mobile--open' : ''}`}>
                <ul className="navbar__mobile-menu">
                    {allNavItems.map((item, index) => (
                        <li key={index} className="navbar__mobile-item">
                            <Link
                                to={item.path}
                                className="navbar__mobile-link"
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
