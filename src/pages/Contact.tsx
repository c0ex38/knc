import './Contact.css';
import SEO from '../components/SEO';
import { contactInfo } from '../constants';

const Contact = () => {
    return (
        <div className="contact-page">
            <SEO
                title="İletişim"
                description="KNC Creative ile iletişime geçin. Email, WhatsApp ve Instagram üzerinden bize ulaşabilirsiniz."
                canonical="https://knccreative.com/iletisim"
            />

            <div className="contact-page__container">
                {/* Left Side - Content */}
                <div className="contact-page__content-wrapper">
                    {/* Main Title */}
                    <h1 className="contact-page__title">Let's Talk</h1>

                    {/* Subtitle */}
                    <p className="contact-page__subtitle">
                        Projeleriniz için bizimle iletişime geçin
                    </p>

                    {/* Email - Prominent Display */}
                    <a href={`mailto:${contactInfo.email}`} className="contact-page__email">
                        {contactInfo.email}
                    </a>

                    {/* Contact Cards */}
                    <div className="contact-page__cards">
                        {/* Instagram */}
                        <a
                            href={contactInfo.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card"
                        >
                            <div className="contact-card__icon">
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                            <h3 className="contact-card__title">Instagram</h3>
                        </a>

                        {/* Location */}
                        <a
                            href="https://maps.google.com/?q=Fevzi+Çakmak+Mahallesi+Matbaacılar+Sitesi+10453.+Sokak+16/B"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card"
                        >
                            <div className="contact-card__icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <h3 className="contact-card__title">Konum</h3>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href={contactInfo.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card"
                        >
                            <div className="contact-card__icon">
                                <i className="fa-brands fa-whatsapp"></i>
                            </div>
                            <h3 className="contact-card__title">WhatsApp</h3>
                        </a>
                    </div>
                </div>

                {/* Right Side - Video */}
                <div className="contact-page__video">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="contact-page__video-element"
                    >
                        <source src="/contact-video.mp4" type="video/mp4" />
                        Video yüklenemedi
                    </video>
                </div>
            </div>
        </div>
    );
};

export default Contact;
