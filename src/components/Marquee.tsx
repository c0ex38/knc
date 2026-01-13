import { type CSSProperties } from 'react';

/**
 * Marquee Bileşeni
 * Animasyonlu çizgili dekoratif bölüm - çift yönlü hareket eden daire desenleri
 */
const Marquee = () => {
    // Styles
    const marqueeStyle: CSSProperties = {
        minHeight: '10vh',
        backgroundColor: '#111010', // Siyah arka plan
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
    };

    const containerStyle: CSSProperties = {
        width: '100%',
        minHeight: '20vh',
        textAlign: 'center',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
    };

    const stripeWhiteStyle: CSSProperties = {
        width: '100vw',
        height: '50px',
        backgroundColor: '#111010', // Siyah arka plan
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translateX(-50%) translateY(-50%) skewY(-2deg)',
        zIndex: 1,
        overflow: 'hidden',
    };

    const stripeStyle: CSSProperties = {
        width: '100vw',
        height: '50px',
        backgroundColor: '#FF2700', // Turuncu arka plan
        marginBottom: '2rem',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%) skewY(2deg)',
        zIndex: 2,
        overflow: 'hidden',
    };

    return (
        <>
            {/* Animasyonlar için CSS */}
            <style>
                {`
                    /* Daire deseni sağa doğru kayma - ekstra genişlik ile */
                    @keyframes scrollPattern {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-60px);
                        }
                    }

                    /* Daire deseni sola doğru kayma - ekstra genişlik ile */
                    @keyframes scrollPatternReverse {
                        0% {
                            transform: translateX(-60px);
                        }
                        100% {
                            transform: translateX(0);
                        }
                    }

                    /* Animasyon sınıfları */
                    .stripe-pattern {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: calc(100% + 120px); /* Ekstra genişlik - pattern taşması için */
                        height: 100%;
                        animation: scrollPattern 3s linear infinite;
                    }

                    .stripe-pattern-white {
                        position: absolute;
                        top: 0;
                        left: -60px; /* Başlangıç offseti */
                        width: calc(100% + 120px); /* Ekstra genişlik - pattern taşması için */
                        height: 100%;
                        animation: scrollPatternReverse 3s linear infinite;
                    }
                `}
            </style>

            <section style={marqueeStyle}>
                <div style={containerStyle}>
                    {/* Beyaz daire desenli şerit (ters yön) */}
                    <div style={stripeWhiteStyle}>
                        <svg className="stripe-pattern-white" width="100%" height="100%" preserveAspectRatio="none">
                            <defs>
                                <pattern id="circles-white" x="0" y="0" width="60" height="50" patternUnits="userSpaceOnUse">
                                    <circle cx="30" cy="25" r="20" fill="none" stroke="white" strokeWidth="8" />
                                    <circle cx="30" cy="25" r="7" fill="white" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#circles-white)" />
                        </svg>
                    </div>

                    {/* Turuncu zemin üzerinde beyaz daire desenli şerit */}
                    <div style={stripeStyle}>
                        <svg className="stripe-pattern" width="100%" height="100%" preserveAspectRatio="none">
                            <defs>
                                <pattern id="circles" x="0" y="0" width="60" height="50" patternUnits="userSpaceOnUse">
                                    <circle cx="30" cy="25" r="20" fill="none" stroke="white" strokeWidth="8" />
                                    <circle cx="30" cy="25" r="7" fill="white" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#circles)" />
                        </svg>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Marquee;


