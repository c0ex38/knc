import { type CSSProperties } from 'react';

/**
 * Logo Bileşeni
 * KNC Creative logosu - 3 katmanlı daire tasarımı
 */
const Logo = () => {
    // Styles
    const logoStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
    };

    const outerCircleStyle: CSSProperties = {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: '#FFFFFF', // Beyaz dış daire
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px',
        transition: 'transform 0.2s ease',
    };

    const innerCircleStyle: CSSProperties = {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: '#111010', // Siyah iç daire
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
    };

    const dotStyle: CSSProperties = {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: '#FF2700', // Turuncu merkez nokta
        animation: 'logoPulse 2s ease-in-out infinite',
    };

    return (
        <>
            {/* Logo animasyonları için CSS */}
            <style>
                {`
                    @keyframes logoPulse {
                        0%, 100% {
                            transform: scale(1);
                            box-shadow: 0 0 0 rgba(255, 39, 0, 0.4);
                        }
                        50% {
                            transform: scale(1.1);
                            box-shadow: 0 0 10px rgba(255, 39, 0, 0.6);
                        }
                    }
                    .logo__outer-circle:hover {
                        transform: scale(1.1);
                    }
                `}
            </style>

            <div style={logoStyle}>
                <div style={outerCircleStyle} className="logo__outer-circle">
                    <div style={innerCircleStyle}>
                        <div style={dotStyle}></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Logo;
