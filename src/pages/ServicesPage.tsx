import { type CSSProperties } from 'react';
import SEO from '../components/layout/SEO';
import { servicesData } from '../constants';

const ServicesPage = () => {
    // services dizisi yerine servicesData kullanacağız

    // Styles
    const pageStyle: CSSProperties = {
        paddingTop: '150px',
        minHeight: '100vh',
        backgroundColor: 'var(--color-black)',
        color: 'var(--color-white)',
        display: 'flex',
        justifyContent: 'center',
    };

    const containerStyle: CSSProperties = {
        maxWidth: '1600px',
        padding: '0 var(--spacing-xl)',
        width: '100%',
    };

    const titleStyle: CSSProperties = {
        fontSize: 'clamp(2.5rem, 5vw, 6rem)',
        fontWeight: 900,
        marginBottom: 'var(--spacing-3xl)',
        color: 'var(--color-white)',
        letterSpacing: '-2px',
    };

    const gridStyle: CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: 'var(--spacing-2xl)',
        paddingBottom: 'var(--spacing-3xl)',
    };

    const cardStyle: CSSProperties = {
        position: 'relative',
        minHeight: '280px',
        border: '2px solid var(--color-orange)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--spacing-2xl)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all var(--transition-base)',
        backgroundColor: 'transparent',
    };

    const numberStyle: CSSProperties = {
        position: 'absolute',
        top: 'var(--spacing-lg)',
        right: 'var(--spacing-lg)',
        fontSize: 'clamp(4rem, 8vw, 6rem)',
        fontWeight: 900,
        color: 'rgba(255, 255, 255, 0.05)',
        lineHeight: 1,
        userSelect: 'none',
        transition: 'all var(--transition-base)',
    };

    const cardTitleStyle: CSSProperties = {
        fontSize: 'var(--font-size-2xl)',
        fontWeight: 700,
        marginBottom: 'var(--spacing-md)',
        color: 'var(--color-white)',
        position: 'relative',
        zIndex: 1,
    };

    const cardDescriptionStyle: CSSProperties = {
        fontSize: 'var(--font-size-base)',
        color: 'var(--color-white-alpha-90)',
        lineHeight: 1.7,
        fontWeight: 400,
        position: 'relative',
        zIndex: 1,
    };

    return (
        <div style={pageStyle} data-services-page>
            <SEO
                title="Hizmetlerimiz"
                description="KNC Creative'in sunduğu profesyonel hizmetler: Grafik tasarım, video prodüksiyon, kurumsal kimlik, sosyal medya yönetimi, web tasarım ve promosyon ürünleri."
                canonical="https://kncdesign.com.tr/hizmetlerimiz"
            />

            <style>
                {`
                    [data-service-card]:hover {
                        transform: translateY(-8px);
                        background-color: var(--color-orange);
                        box-shadow: 0 0 30px rgba(255, 39, 0, 0.5), 0 0 60px rgba(255, 39, 0, 0.3);
                    }
                    [data-service-card]:hover [data-service-number] {
                        color: rgba(255, 255, 255, 0.1);
                    }
                    [data-service-card]:hover [data-service-description] {
                        color: var(--color-white);
                    }
                    [data-service-card]:hover {
                         cursor: pointer;
                    }

                    @media (max-width: 768px) {
                        [data-services-page] {
                            padding-top: 120px !important;
                        }
                        [data-services-container] {
                            padding: 0 var(--spacing-md) !important;
                        }
                        [data-services-grid] {
                            grid-template-columns: 1fr !important;
                            gap: var(--spacing-xl) !important;
                        }
                        [data-service-card] {
                            min-height: 240px !important;
                            padding: var(--spacing-xl) !important;
                        }
                        [data-service-number] {
                            font-size: 4rem !important;
                            top: var(--spacing-md) !important;
                            right: var(--spacing-md) !important;
                        }
                    }

                    @media (max-width: 480px) {
                        [data-services-page] {
                            padding-top: 100px !important;
                        }
                        [data-services-container] {
                            padding: 0 var(--spacing-md) !important;
                        }
                        [data-services-title] {
                            margin-bottom: var(--spacing-2xl) !important;
                        }
                        [data-services-grid] {
                            gap: var(--spacing-lg) !important;
                        }
                        [data-service-card] {
                            min-height: 220px !important;
                            padding: var(--spacing-lg) !important;
                        }
                        [data-service-number] {
                            font-size: 3rem !important;
                        }
                    }
                `}
            </style>

            <div style={containerStyle} data-services-container>
                <h1 style={titleStyle} data-services-title>
                    hizmetlerimiz
                </h1>

                <div style={gridStyle} data-services-grid>
                    {servicesData.map((service) => (
                        <div key={service.number} style={cardStyle} data-service-card>
                            <div style={numberStyle} data-service-number>
                                {service.number}
                            </div>
                            <h2 style={cardTitleStyle}>{service.title}</h2>
                            <p style={cardDescriptionStyle} data-service-description>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
