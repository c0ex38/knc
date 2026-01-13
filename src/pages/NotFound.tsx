import { Link } from 'react-router-dom';
import { type CSSProperties } from 'react';
import SEO from '../components/SEO';

/**
 * NotFound (404) Sayfası
 * Sayfa bulunamadığında gösterilen hata sayfası
 */
const NotFound = () => {
    // Styles
    const notFoundStyle: CSSProperties = {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#111010',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: '2rem',
    };

    const containerStyle: CSSProperties = {
        maxWidth: '1200px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
    };

    const imageStyle: CSSProperties = {
        width: '100%',
        maxWidth: '1000px',
        height: 'auto',
        objectFit: 'contain',
    };

    const titleStyle: CSSProperties = {
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        fontWeight: 700,
        margin: 0,
        marginTop: '-5rem', // Görsele daha yakın
    };

    const descriptionStyle: CSSProperties = {
        fontSize: '1.5rem',
        color: 'rgba(255, 255, 255, 0.9)',
        maxWidth: '600px',
        lineHeight: 1.6,
        margin: 0,
        fontWeight: 300,
    };

    const buttonStyle: CSSProperties = {
        marginTop: '2rem',
        display: 'inline-block',
        padding: '1rem 2.5rem',
        backgroundColor: '#FF2700',
        color: '#FFFFFF',
        textDecoration: 'none',
        fontWeight: 600,
        borderRadius: '50px',
        transition: 'all 0.3s ease',
    };

    return (
        <>
            <SEO
                title="Sayfa Bulunamadı"
                description="Aradığınız sayfa bulunamadı. Ana sayfaya dönmek için tıklayın."
                type="website"
            />

            {/* Hover efekti için CSS */}
            <style>
                {`
                    .not-found-button:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 10px 20px rgba(255, 51, 0, 0.3);
                    }

                    @media (max-width: 768px) {
                        .not-found__code {
                            -webkit-text-stroke: 2px #FF2700;
                        }
                    }
                `}
            </style>

            {/* robots noindex meta tag */}
            <meta name="robots" content="noindex" />

            <div style={notFoundStyle}>
                <div style={containerStyle}>
                    <img 
                        src="/404.png" 
                        alt="Sayfa Bulunamadı" 
                        style={imageStyle}
                    />
                    <h1 style={titleStyle}>Sayfa Bulunamadı</h1>
                    <p style={descriptionStyle}>
                        Bu sefer göremedik.
                    </p>
                    <Link 
                        to="/" 
                        style={buttonStyle}
                        className="not-found-button"
                    >
                        Ana Sayfaya Dön
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;
