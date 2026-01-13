import { type CSSProperties } from 'react';
import SEO from '../components/SEO';

/**
 * References (Referanslar) Sayfası
 * KNC Creative'in çalıştığı markalar ve iş ortakları
 */

const references = [
    { id: 1, name: 'acente42', title: 'sigorta', image: '/referans_logos/acente.svg' },
    { id: 2, name: 'INGENIA', title: 'bureau d\'etude', image: '/referans_logos/ingenia.svg' },
    { id: 3, name: 'pre plats', title: '', image: '/referans_logos/preplats.svg' },
    { id: 4, name: 'Dr. Mevlüt Mert', title: '', image: '/referans_logos/mevlut.svg' },
    { id: 5, name: 'altınkaynak', title: '', image: '/referans_logos/altinkaynak.svg' },
    { id: 6, name: 'Saliha Taşcı', title: 'Diyetisyen & Psikolog', image: '/referans_logos/saliha_tasci.svg' },
];

const References = () => {
    // Styles
    const pageStyle: CSSProperties = {
        paddingTop: '150px',
        minHeight: '100vh',
        backgroundColor: '#111010',
        color: '#FFFFFF',
        display: 'flex',
        justifyContent: 'center',
    };

    const containerStyle: CSSProperties = {
        maxWidth: '1600px',
        padding: '0 3rem',
        width: '100%',
    };

    const titleStyle: CSSProperties = {
        fontSize: 'clamp(2.5rem, 5vw, 6rem)',
        fontWeight: 900,
        marginBottom: '8rem',
        color: '#FFFFFF',
        letterSpacing: '-2px',
    };

    const gridStyle: CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '3rem',
        paddingBottom: '8rem',
    };

    const cardStyle: CSSProperties = {
        height: '220px',
        border: '1px solid #FF2700',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
        backgroundColor: 'transparent',
    };

    const cardContentStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
    };

    const logoStyle: CSSProperties = {
        width: '60%',
        maxWidth: '180px',
        height: 'auto',
        objectFit: 'contain',
        filter: 'brightness(0) invert(1)', // Logoları beyaz yap
        opacity: 0.9,
        transition: 'all 0.3s ease',
    };

    return (
        <>
            <SEO
                title="Referanslarımız"
                description="KNC Creative referansları ve iş ortakları. Birlikte çalıştığımız markalardan bazıları."
                canonical="https://kncdesign.com.tr/referanslar"
                keywords={['referanslar', 'iş ortakları', 'müşteriler', 'projeler']}
            />

            {/* Hover efektleri ve responsive CSS */}
            <style>
                {`
                    .reference-card:hover {
                        transform: translateY(-5px);
                        background-color: #FF2700;
                        border-color: #FF2700;
                        box-shadow: 0 0 20px rgba(255, 51, 0, 0.5), 0 0 40px rgba(255, 51, 0, 0.3);
                    }

                    /* Responsive */
                    @media (max-width: 768px) {
                        [data-references-grid] {
                            grid-template-columns: 1fr !important;
                        }
                        [data-references-title] {
                            font-size: 3rem !important;
                        }
                    }

                    @media (max-width: 480px) {
                        [data-references-page] {
                            padding-top: 100px !important;
                        }
                        [data-references-container] {
                            padding: 0 1.5rem !important;
                        }
                        [data-references-title] {
                            font-size: 2.25rem !important;
                            margin-bottom: 3rem !important;
                        }
                        [data-references-grid] {
                            gap: 1.5rem !important;
                        }
                        .reference-card {
                            height: 180px !important;
                            border-radius: 16px !important;
                        }
                        .reference-card-logo {
                            max-width: 140px !important;
                            max-height: 60px !important;
                        }
                    }
                `}
            </style>

            <div style={pageStyle} data-references-page>
                <div style={containerStyle} data-references-container>
                    <h1 style={titleStyle} data-references-title>referanslarımız</h1>
                    <div style={gridStyle} data-references-grid>
                        {references.map((ref) => (
                            <div key={ref.id} style={cardStyle} className="reference-card">
                                <div style={cardContentStyle}>
                                    <img
                                        src={ref.image}
                                        alt={ref.name}
                                        style={logoStyle}
                                        className="reference-card-logo"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default References;
