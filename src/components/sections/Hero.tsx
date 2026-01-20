import { useState, useEffect, useCallback } from 'react';
import { heroText } from '../../constants';
import styles from './Hero.module.css';

/**
 * Hero Bileşeni
 * Ana sayfa hero bölümü - typing efekti ve yarım daire tasarımı ile
 */
const Hero = () => {
    // Typing efekti için tam metin
    const fullText = heroText.description;

    // State tanımlamaları
    const [displayText, setDisplayText] = useState<string>(fullText); // Ekranda gösterilen metin
    const [isDeleting, setIsDeleting] = useState(false); // Silme modunda mı?
    const [hasStarted, setHasStarted] = useState(false); // Animasyon başladı mı?

    const handleTyping = useCallback(() => {
        // Tam metin yazıldıysa, silmeye başlamadan önce 2 saniye bekle
        if (!isDeleting && displayText === fullText) {
            setTimeout(() => setIsDeleting(true), 2000);
            return;
        }

        // Tüm metin silindiyse, tekrar yazmaya başla
        if (isDeleting && displayText === '') {
            setIsDeleting(false);
            return;
        }

        // Silme modundaysa karakterleri sil
        if (isDeleting) {
            setDisplayText(fullText.substring(0, displayText.length - 1));
        } else {
            // Yazma modundaysa karakterleri ekle
            setDisplayText(fullText.substring(0, displayText.length + 1));
        }
    }, [displayText, isDeleting, fullText]);

    // Typing efekti için useEffect
    useEffect(() => {
        // İlk silme işlemini başlatmadan önce 2 saniye bekle
        if (!hasStarted) {
            const startTimer = setTimeout(() => {
                setHasStarted(true);
                setIsDeleting(true);
            }, 2000);
            return () => clearTimeout(startTimer);
        }

        const timer = setTimeout(handleTyping, 50); // 50ms typing hızı
        return () => clearTimeout(timer);
    }, [handleTyping, hasStarted]);

    return (
        <section className={styles.hero} id="home">
            <div className={styles.container}>
                {/* Metin İçeriği */}
                <div className={styles.content}>
                    {/* Ana Başlık */}
                    <h1 className={styles.title}>
                        {heroText.title}
                        <span className={styles.highlight}>{heroText.highlight}</span>
                        {heroText.suffix}
                    </h1>

                    {/* Typing Efektli Açıklama */}
                    <div aria-hidden="true">
                        <p className={styles.description}>
                            {displayText}
                            <span className={styles.cursor}>|</span>
                        </p>
                    </div>

                    {/* Screen Reader Only Text */}
                    <p className={styles.srOnly}>{heroText.description}</p>
                </div>

                {/* Dekoratif Yarım Daire */}
                <div className={styles.circle}></div>
            </div>
        </section>
    );
};

export default Hero;
