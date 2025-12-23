import './Contact.css';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    const contactInfo = {
        location: "Fevzi Çakmak Mahallesi Matbaacılar Sitesi 10453. Sokak 16/B",
        email: "info@kncdesign.com.tr",
        whatsapp: "+90 552 636 01 42",
        whatsappLink: "https://wa.me/905526360142",
        instagram: "https://www.instagram.com/knccreative_",
        instagramHandle: "@knccreative"
    };

    return (
        <div className="contact-page">
            <Helmet>
                <title>İletişim | KNC CREATIVE</title>
                <meta name="description" content="KNC Creative ile iletişime geçin. Email, WhatsApp ve Instagram üzerinden bize ulaşabilirsiniz." />
                <link rel="canonical" href="https://knccreative.com/iletisim" />
            </Helmet>

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
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </div>
                            <h3 className="contact-card__title">Instagram</h3>
                            <p className="contact-card__text">{contactInfo.instagramHandle}</p>
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
                            <p className="contact-card__text">{contactInfo.location}</p>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href={contactInfo.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card"
                        >
                            <div className="contact-card__icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                </svg>
                            </div>
                            <h3 className="contact-card__title">WhatsApp</h3>
                            <p className="contact-card__text">{contactInfo.whatsapp}</p>
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
