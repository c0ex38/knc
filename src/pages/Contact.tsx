import SEO from '../components/SEO';
import { contactInfo } from '../constants';
import styles from './Contact.module.css';

/**
 * Contact (İletişim) Sayfası
 * İletişim bilgileri ve sosyal medya linkleri
 */
const Contact = () => {
    return (
        <>
            <SEO
                title="İletişim"
                description="KNC Creative ile iletişime geçin. Email, WhatsApp ve Instagram üzerinden bize ulaşabilirsiniz."
                canonical="https://kncdesign.com.tr/iletisim"
                keywords={[
                    'iletişim',
                    'contact',
                    'email',
                    'whatsapp',
                    'instagram',
                    'konya dijital ajans',
                ]}
            />

            <div className={styles.page}>
                <div className={styles.container}>
                    {/* Sol Taraf - İçerik */}
                    <div className={styles.contentWrapper}>
                        {/* Ana Başlık */}
                        <h1 className={styles.title}>Hadi Konuşalım</h1>

                        {/* Alt Başlık */}
                        <p className={styles.subtitle}>Projeleriniz için bizimle iletişime geçin</p>

                        {/* Email - Vurgulu Gösterim */}
                        <a href={`mailto:${contactInfo.email}`} className={styles.email}>
                            {contactInfo.email}
                        </a>

                        {/* İletişim Kartları */}
                        <div className={styles.cards}>
                            {/* Instagram */}
                            <a
                                href={contactInfo.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.card}
                                aria-label="Instagram sayfamızı yeni sekmede aç"
                            >
                                <div className={styles.cardIcon}>
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                                <h3 className={styles.cardTitle}>Instagram</h3>
                            </a>

                            {/* Konum */}
                            <a
                                href="https://www.google.com/maps/place/Fla%C5%9F+Reklam+Promosyon/@37.9051055,32.5092076,3415m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14d08fb3f05c176f:0xff2bc20f77c77b!8m2!3d37.90509!4d32.52764!16s%2Fg%2F1tdjmwlw?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.card}
                                aria-label="Konumumuzu Google Haritalar'da yeni sekmede aç"
                            >
                                <div className={styles.cardIcon}>
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <h3 className={styles.cardTitle}>Konum</h3>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href={contactInfo.whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.card}
                                aria-label="WhatsApp üzerinden bizimle iletişime geçin (Yeni sekmede açılır)"
                            >
                                <div className={styles.cardIcon}>
                                    <i className="fa-brands fa-whatsapp"></i>
                                </div>
                                <h3 className={styles.cardTitle}>WhatsApp</h3>
                            </a>
                        </div>
                    </div>

                    {/* Sağ Taraf - Video */}
                    <div className={styles.videoContainer}>
                        <video autoPlay loop muted playsInline className={styles.videoElement}>
                            <source src="/contact-video.mp4" type="video/mp4" />
                            Video yüklenemedi
                        </video>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
