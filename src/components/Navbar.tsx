import { useState, useEffect, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
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

    // Styles
    const navbarStyle: CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isScrolled ? '0.75rem 0' : '1.5rem 0',
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(17, 16, 16, 0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 4px 20px rgba(255, 39, 0, 0.1)' : 'none',
    };

    const containerStyle: CSSProperties = {
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        gap: '3rem',
    };

    const logoStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2px',
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#FFFFFF',
        textDecoration: 'none',
        transition: 'transform 0.2s ease',
        position: 'relative',
        zIndex: 2,
        gridColumn: '2',
    };

    const menuStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        listStyle: 'none',
        margin: 0,
        padding: 0,
    };

    const menuLeftStyle: CSSProperties = {
        ...menuStyle,
        justifyContent: 'flex-end',
        gridColumn: '1',
    };

    const menuRightStyle: CSSProperties = {
        ...menuStyle,
        justifyContent: 'flex-start',
        gridColumn: '3',
    };

    const menuLinkStyle: CSSProperties = {
        display: 'block',
        padding: '0.75rem 1.5rem',
        color: '#FFFFFF',
        fontSize: '1rem',
        fontWeight: 500,
        textDecoration: 'none',
        transition: 'color 0.2s ease',
        position: 'relative',
        whiteSpace: 'nowrap',
    };

    const toggleStyle: CSSProperties = {
        display: 'none',
        flexDirection: 'column',
        gap: '5px',
        width: '28px',
        height: '24px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        zIndex: 1100,
        position: 'relative',
        gridColumn: '3',
        justifySelf: 'end',
    };

    const toggleSpanStyle: CSSProperties = {
        display: 'block',
        width: '100%',
        height: '3px',
        background: '#FFFFFF',
        borderRadius: '9999px',
        transition: 'all 0.3s ease',
        transformOrigin: 'center',
    };

    const mobileMenuStyle: CSSProperties = {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '280px',
        height: '100vh',
        background: '#111010',
        borderLeft: '1px solid #E5E5E5',
        padding: '80px 2rem 3rem',
        transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease',
        zIndex: 1050,
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        overflowY: 'auto',
    };

    const mobileMenuListStyle: CSSProperties = {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
    };

    const mobileItemStyle: CSSProperties = {
        borderBottom: '1px solid #E5E5E5',
    };

    const mobileLinkStyle: CSSProperties = {
        display: 'block',
        padding: '1.5rem 0',
        color: '#FFFFFF',
        fontSize: '1.125rem',
        fontWeight: 500,
        textDecoration: 'none',
        transition: 'all 0.2s ease',
    };

    const overlayStyle: CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(17, 16, 16, 0.5)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        zIndex: 1040,
    };

    // Media query için window width kontrolü
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth <= 968;

    return (
        <nav style={navbarStyle}>
            <style>
                {`
                    @keyframes pulse {
                        0%, 100% {
                            opacity: 1;
                            transform: scale(1);
                        }
                        50% {
                            opacity: 0.8;
                            transform: scale(1.1);
                        }
                    }
                    .navbar__logo:hover {
                        transform: scale(1.05);
                    }
                    .navbar__menu-link::before {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        transform: translateX(-50%) scaleX(0);
                        width: 80%;
                        height: 2px;
                        background: #FF2700;
                        transition: transform 0.3s ease;
                        border-radius: 9999px;
                    }
                    .navbar__menu-link:hover {
                        color: #FF2700;
                    }
                    .navbar__menu-link:hover::before {
                        transform: translateX(-50%) scaleX(1);
                    }
                    .navbar__mobile-link:hover {
                        color: #FF2700;
                        padding-left: 0.75rem;
                    }
                    @media (max-width: 968px) {
                        .navbar__toggle {
                            display: flex !important;
                        }
                        .navbar__menu {
                            display: none !important;
                        }
                    }
                `}
            </style>
            <div style={containerStyle}>
                {/* Left Navigation */}
                {!isMobile && (
                    <ul style={menuLeftStyle} className="navbar__menu">
                        {leftNavItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    style={menuLinkStyle}
                                    className="navbar__menu-link"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Logo */}
                <Link to="/" style={logoStyle} className="navbar__logo">
                    <Logo />
                </Link>

                {/* Right Navigation */}
                {!isMobile && (
                    <ul style={menuRightStyle} className="navbar__menu">
                        {rightNavItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    style={menuLinkStyle}
                                    className="navbar__menu-link"
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
                        style={toggleStyle}
                        className="navbar__toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Menu"
                    >
                        <span style={{
                            ...toggleSpanStyle,
                            transform: isMobileMenuOpen ? 'translateY(8px) rotate(45deg)' : 'none',
                        }}></span>
                        <span style={{
                            ...toggleSpanStyle,
                            opacity: isMobileMenuOpen ? 0 : 1,
                            transform: isMobileMenuOpen ? 'scaleX(0)' : 'none',
                        }}></span>
                        <span style={{
                            ...toggleSpanStyle,
                            transform: isMobileMenuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
                        }}></span>
                    </button>
                )}
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && <div style={overlayStyle} onClick={() => setIsMobileMenuOpen(false)} />}

            {/* Mobile Menu */}
            <div style={mobileMenuStyle}>
                <ul style={mobileMenuListStyle}>
                    {allNavItems.map((item, index) => (
                        <li key={index} style={mobileItemStyle}>
                            <Link
                                to={item.path}
                                style={mobileLinkStyle}
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
