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
                            <div className="contact-card__icon">📸</div>
                            <h3 className="contact-card__title">Instagram</h3>
                            <p className="contact-card__text">{contactInfo.instagramHandle}</p>
                        </a>

                        {/* Location */}
                        <div className="contact-card">
                            <div className="contact-card__icon">📍</div>
                            <h3 className="contact-card__title">Konum</h3>
                            <p className="contact-card__text">{contactInfo.location}</p>
                        </div>

                        {/* WhatsApp */}
                        <a
                            href={contactInfo.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card"
                        >
                            <div className="contact-card__icon">💬</div>
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
