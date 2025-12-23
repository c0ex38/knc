import './References.css';
import { Helmet } from 'react-helmet-async';

const references = [
    { id: 1, name: 'acente42', title: 'sigorta', image: '/referans_logos/acente.svg' },
    { id: 2, name: 'INGENIA', title: 'bureau d\'etude', image: '/referans_logos/ingenia.svg' },
    { id: 3, name: 'pre plats', title: '', image: '/referans_logos/preplats.svg' },
    { id: 4, name: 'Dr. Mevlüt Mert', title: '', image: '/referans_logos/mevlut.svg' },
    { id: 5, name: 'altınkaynak', title: '', image: '/referans_logos/altinkaynak.svg' },
    { id: 6, name: 'Saliha Taşcı', title: 'Diyetisyen & Psikolog', image: '/referans_logos/saliha_tasci.svg' },
];

const References = () => {
    return (
        <div className="references-page">
            <Helmet>
                <title>Referanslarımız | KNC CREATIVE</title>
                <meta name="description" content="KNC Creative referansları ve iş ortakları. Birlikte çalıştığımız markalardan bazıları." />
                <link rel="canonical" href="https://knccreative.com/referanslar" />
            </Helmet>
            <div className="references-page__container">
                <h1 className="references-page__title">referanslarımız</h1>
                <div className="references-page__grid">
                    {references.map((ref) => (
                        <div key={ref.id} className="reference-card">
                            <div className="reference-card__content">
                                <img
                                    src={ref.image}
                                    alt={ref.name}
                                    className="reference-card__logo"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default References;
