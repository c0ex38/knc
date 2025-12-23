import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                {/* Left Side: Brand & Contact */}
                <div className="footer__left">
                    <div className="footer__brand">
                        <img src="/footer.svg" alt="KNC Creative" className="footer__logo-img" />
                    </div>

                    <div className="footer__contact">
                        <p className="footer__info">info@kncdesign.com.tr</p>
                        <p className="footer__info">+90 552 636 01 42</p>
                        <p className="footer__address">
                            Fevzi Çakmak Mahallesi Matbaacılar Sitesi<br />
                            10453. Sokak 16/B
                        </p>
                    </div>
                </div>

                {/* Right Side: Navigation & Socials */}
                <div className="footer__right">
                    <nav className="footer__nav">
                        <Link to="/" className="footer__nav-link">ana sayfa</Link>
                        <Link to="/hakkimizda" className="footer__nav-link">hakkımızda</Link>
                        <Link to="/referanslar" className="footer__nav-link">referanslar</Link>
                        <Link to="/#contact" className="footer__nav-link">iletişim</Link>
                        <Link to="/#flash-ads" className="footer__nav-link">flaş reklam</Link>
                    </nav>

                    <div className="footer__socials">
                        <a href="#" className="footer__social-link" aria-label="Instagram">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="#" className="footer__social-link" aria-label="X">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                        </a>
                        <a href="#" className="footer__social-link" aria-label="Facebook">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" className="footer__social-link" aria-label="Spotify">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14.5c2.5-1 5.5-1 8 0"></path><path d="M7 11.5c3-1.5 7-1.5 10 0"></path><path d="M6 8.5c4-2 8-2 12 0"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
