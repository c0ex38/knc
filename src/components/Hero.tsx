import { useState, useEffect, type CSSProperties } from 'react';

/**
 * Hero Bileşeni
 * Ana sayfa hero bölümü - typing efekti ve yarım daire tasarımı ile
 * Tüm stiller inline olarak tanımlanmış, CSS dosyası yok
 */
const Hero = () => {
    // Typing efekti için tam metin
    const fullText = "Görselliği vizyona dönüştüren yaratıcı fikirlerle markanızı büyütüyoruz.";
    
    // State tanımlamaları
    const [displayText, setDisplayText] = useState(fullText); // Ekranda gösterilen metin
    const [isDeleting, setIsDeleting] = useState(false); // Silme modunda mı?
    const [hasStarted, setHasStarted] = useState(false); // Animasyon başladı mı?

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

        const handleTyping = () => {
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
        };

        const timer = setTimeout(handleTyping, 50); // 50ms typing hızı
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, fullText, hasStarted]);

    // ============ Stil Tanımlamaları ============
    
    // Ana hero container stili
    const heroStyle: CSSProperties = {
        position: 'relative',
        minHeight: '100vh', // Tam ekran yüksekliği
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#111010', // Siyah arka plan
        overflow: 'hidden',
        padding: '120px 2rem 0', // Navbar için üst boşluk, alt boşluk yok
        marginBottom: '-15vh', // Services'e daha yakın
    };

    // İçerik container stili
    const containerStyle: CSSProperties = {
        position: 'relative',
        maxWidth: '100%',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    // Yarım daire stili
    const circleStyle: CSSProperties = {
        position: 'relative',
        width: '140%', // Kenarlara değmesi için daha geniş
        maxWidth: '2800px', // Maksimum genişlik sınırı
        aspectRatio: '2 / 1', // 2:1 oran
        border: '5px solid #FF2700', // Turuncu kenarlık
        borderBottom: 'none', // Alt kenarlık yok (yarım daire için)
        borderRadius: '50% 50% 0 0 / 100% 100% 0 0', // Üst yarım daire
        overflow: 'hidden',
        // Radyal gradient - daha erken siyaha geçiş
        background: 'radial-gradient(ellipse 100% 70% at center top, rgba(255, 39, 0, 0.05) 0%, rgba(60, 25, 15, 0.25) 25%, rgba(30, 20, 15, 0.5) 50%, rgba(17, 16, 16, 0.95) 70%, #111010 85%)',
        // İç gölgeler - minimal ışık
        boxShadow: 'inset 0 -100px 250px rgba(0, 0, 0, 0.95), inset 0 15px 60px rgba(255, 39, 0, 0.05), inset 0 0 40px rgba(255, 39, 0, 0.08)',
    };

    // Metin içeriği stili (dairenin içinde)
    const contentStyle: CSSProperties = {
        position: 'absolute',
        zIndex: 10, // Dairenin üstünde
        textAlign: 'center',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)', // Yatayda ortala
        width: '90%',
        maxWidth: '1400px', // Metin için maksimum genişlik
        padding: '0 2rem',
    };

    // Başlık stili
    const titleStyle: CSSProperties = {
        fontSize: 'clamp(1.5rem, 5vw, 5rem)', // Küçültüldü: 6rem -> 5rem
        fontWeight: 700,
        lineHeight: 1.2,
        marginBottom: '2rem',
        color: '#FFFFFF',
    };

    // Vurgu (highlight) stili
    const highlightStyle: CSSProperties = {
        color: '#FF2700', // Turuncu vurgu
    };

    // Açıklama metni stili
    const descriptionStyle: CSSProperties = {
        fontSize: 'clamp(0.875rem, 2vw, 1.5rem)', // Küçültüldü: 2rem -> 1.5rem
        lineHeight: 1.6,
        color: '#FFFFFF',
        maxWidth: '1000px',
        margin: '0 auto',
        fontWeight: 500,
        minHeight: '3em', // Typing efekti için minimum yükseklik
    };

    // Cursor stili
    const cursorStyle: CSSProperties = {
        color: '#FF2700',
        animation: 'blink 1s step-end infinite',
        marginLeft: '2px',
    };

    return (
        <>
            {/* ============ Embedded CSS - Animasyonlar ve Responsive ============ */}
            <style>
                {`
                    /* Cursor yanıp sönme animasyonu */
                    @keyframes blink {
                        0%, 50% {
                            opacity: 1;
                        }
                        51%, 100% {
                            opacity: 0;
                        }
                    }
                    
                    /* ============ Responsive Medya Sorguları ============ */
                    
                    /* Büyük Ekranlar (1600px ve üzeri) */
                    @media (min-width: 1600px) {
                        [data-hero-circle] {
                            width: 145% !important;
                            max-width: 3000px !important;
                        }
                        [data-hero-content] {
                            top: 22% !important;
                        }
                    }
                    
                    /* Büyük Tabletler (1200px ve altı) */
                    @media (max-width: 1200px) {
                        [data-hero-circle] {
                            width: 140% !important;
                            max-width: 2200px !important;
                        }
                        [data-hero-content] {
                            top: 23% !important;
                            width: 92% !important;
                        }
                    }
                    
                    /* Tabletler (1024px ve altı) */
                    @media (max-width: 1024px) {
                        [data-hero-section] {
                            padding: 100px 1.5rem 0 !important;
                        }
                        [data-hero-circle] {
                            width: 145% !important;
                            max-width: 2000px !important;
                            border-width: 4px !important;
                        }
                        [data-hero-content] {
                            top: 23% !important;
                            width: 95% !important;
                        }
                    }
                    
                    /* Küçük Tabletler (768px ve altı) */
                    @media (max-width: 768px) {
                        [data-hero-section] {
                            padding: 100px 1.5rem 0 !important;
                            min-height: 100vh !important;
                        }
                        [data-hero-content] {
                            top: 26% !important;
                            width: 95% !important;
                            padding: 0 1.5rem !important;
                        }
                        [data-hero-circle] {
                            width: 150% !important;
                            max-width: 1600px !important;
                            border-width: 4px !important;
                        }
                    }
                    
                    /* Mobil Cihazlar (480px ve altı) */
                    @media (max-width: 480px) {
                        [data-hero-section] {
                            padding: 80px 0.75rem 0 !important;
                            min-height: 100vh !important;
                        }
                        [data-hero-content] {
                            top: 30% !important;
                            width: 92% !important;
                            padding: 0 1.5rem !important;
                        }
                        [data-hero-circle] {
                            width: 160% !important;
                            max-width: 1200px !important;
                            border-width: 3px !important;
                        }
                        [data-hero-cursor] {
                            margin-left: 1px !important;
                        }
                    }
                    
                    /* Çok Küçük Mobil Cihazlar (360px ve altı) */
                    @media (max-width: 360px) {
                        [data-hero-section] {
                            padding: 70px 0.5rem 0 !important;
                        }
                        [data-hero-content] {
                            top: 28% !important;
                            width: 98% !important;
                        }
                        [data-hero-circle] {
                            width: 155% !important;
                            max-width: 900px !important;
                            border-width: 2px !important;
                        }
                    }
                `}
            </style>
            
            {/* ============ Ana Hero Bölümü ============ */}
            <section style={heroStyle} data-hero-section id="home">
                <div style={containerStyle}>
                    
                    {/* Metin İçeriği */}
                    <div style={contentStyle} data-hero-content>
                        {/* Ana Başlık */}
                        <h1 style={titleStyle}>
                            Bakan değil, <span style={highlightStyle}>gören</span> bir ajans.
                        </h1>
                        
                        {/* Typing Efektli Açıklama */}
                        <p style={descriptionStyle}>
                            {displayText}
                            <span style={cursorStyle} data-hero-cursor>|</span>
                        </p>
                    </div>

                    {/* Dekoratif Yarım Daire */}
                    <div style={circleStyle} data-hero-circle></div>
                </div>
            </section>
        </>
    );
};

export default Hero;
