import { Link } from 'react-router-dom';
import styles from './ContactCTA.module.css';

const ContactCTA = () => {
    return (
        <section className={styles.section}>
            {/* Background Glow Effect */}
            <div className={styles.backgroundGlow} />

            {/* Decorative Background Text */}
            <div className={styles.decorativeTextContainer}>
                <div className={styles.movingText}>
                    <span>CONTACT US CONTACT US&nbsp;</span>
                    <span>CONTACT US CONTACT US&nbsp;</span>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        PROJENİZİ
                        <br />
                        <span className={styles.gradientText}>HAYATA GEÇİRELİM</span>
                    </h2>
                    <p className={styles.description}>
                        Markanızı dijital dünyada öne çıkarmak için hazırsanız, tanışmak ve
                        projelerinizi konuşmak için sabırsızlanıyoruz.
                    </p>
                </div>

                <Link to="/iletisim" className={styles.link}>
                    <span className={styles.linkText}>İLETİŞİME GEÇ</span>
                    <div className={styles.arrow}>
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default ContactCTA;
