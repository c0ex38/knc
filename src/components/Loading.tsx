import { type CSSProperties } from 'react';
import Logo from './Logo';

/**
 * Loading Bileşeni
 * Sayfa yüklenirken gösterilen loading ekranı - gelişmiş animasyonlarla
 */
const Loading = () => {
    // Styles
    const containerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: '#111010', // Siyah arka plan
        color: '#FFFFFF', // Beyaz metin
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
    };

    const logoContainerStyle: CSSProperties = {
        marginBottom: '2rem',
        animation: 'logoFadeIn 0.8s ease-out, logoFloat 3s ease-in-out infinite',
    };

    const textStyle: CSSProperties = {
        fontSize: 'var(--font-size-lg)',
        fontWeight: 500,
        animation: 'textPulse 1.5s ease-in-out infinite',
        letterSpacing: '0.05em',
    };

    const dotsStyle: CSSProperties = {
        display: 'inline-block',
        animation: 'dotsPulse 1.5s ease-in-out infinite',
    };

    return (
        <>
            {/* Gelişmiş animasyonlar için CSS */}
            <style>
                {`
                    /* Logo fade-in animasyonu */
                    @keyframes logoFadeIn {
                        0% {
                            opacity: 0;
                            transform: scale(0.5);
                        }
                        100% {
                            opacity: 1;
                            transform: scale(1.5);
                        }
                    }

                    /* Logo yavaş yüzme animasyonu */
                    @keyframes logoFloat {
                        0%, 100% {
                            transform: scale(1.5) translateY(0px);
                        }
                        50% {
                            transform: scale(1.5) translateY(-10px);
                        }
                    }

                    /* Metin pulse animasyonu */
                    @keyframes textPulse {
                        0%, 100% {
                            opacity: 1;
                        }
                        50% {
                            opacity: 0.6;
                        }
                    }

                    /* Nokta animasyonu */
                    @keyframes dotsPulse {
                        0%, 20% {
                            content: '.';
                        }
                        40% {
                            content: '..';
                        }
                        60%, 100% {
                            content: '...';
                        }
                    }
                `}
            </style>

            <div style={containerStyle}>
                <div style={logoContainerStyle}>
                    <Logo />
                </div>
                <p style={textStyle}>
                    Yükleniyor<span style={dotsStyle}>...</span>
                </p>
            </div>
        </>
    );
};

export default Loading;
