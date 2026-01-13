import React from 'react';
import Logo from './Logo';

const GoogleMap: React.FC = () => {
    const containerStyle: React.CSSProperties = {
        width: '100%',
        height: '600px',
        overflow: 'hidden',
        position: 'relative',
    };

    const iframeStyle: React.CSSProperties = {
        border: 0,
        width: '100%',
        height: '100%',
        filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)',
    };

    const markerContainerStyle: React.CSSProperties = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -100%)',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pointerEvents: 'none',
    };

    const markerCardStyle: React.CSSProperties = {
        backgroundColor: '#ff2700',
        borderRadius: '12px',
        padding: '16px 20px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 1)',
        marginBottom: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    };

    const logoContainerStyle: React.CSSProperties = {
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const textStyle: React.CSSProperties = {
        fontSize: '16px',
        fontWeight: '600',
        color: '#1a1a1a',
        whiteSpace: 'nowrap',
    };

    const pinStyle: React.CSSProperties = {
        width: '0',
        height: '0',
        borderLeft: '12px solid transparent',
        borderRight: '12px solid transparent',
        borderTop: '20px solid #FFB800',
    };

    const pinDotStyle: React.CSSProperties = {
        width: '16px',
        height: '16px',
        backgroundColor: '#FFB800',
        borderRadius: '50%',
        border: '3px solid white',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
        marginTop: '-8px',
    };

    return (
        <div style={containerStyle}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14871.416383022584!2d32.52764!3d37.90509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1768287146435!5m2!1str!2str"
                style={iframeStyle}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KNC Creative Konum"
            />
            
            {/* Custom Marker Overlay */}
            <div style={markerContainerStyle}>
                <div style={markerCardStyle}>
                    <div style={logoContainerStyle}>
                        <Logo />
                    </div>
                    <div style={textStyle}>
                        KNC CREATIVE
                    </div>
                </div>
                <div style={pinStyle}></div>
                <div style={pinDotStyle}></div>
            </div>
        </div>
    );
};

export default GoogleMap;
