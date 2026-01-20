import SEO from '../components/layout/SEO';
import styles from './References.module.css';

/**
 * References (Referanslar) Sayfası
 * KNC Creative'in çalıştığı markalar ve iş ortakları
 */

const references = [
    { id: 1, name: 'acente42', title: 'sigorta', image: '/referans_logos/acente.svg' },
    { id: 2, name: 'INGENIA', title: 'Mühendislik Ofisi', image: '/referans_logos/ingenia.svg' },
    { id: 3, name: 'pre plats', title: '', image: '/referans_logos/preplats.svg' },
    { id: 4, name: 'Dr. Mevlüt Mert', title: '', image: '/referans_logos/mevlut.svg' },
    { id: 5, name: 'altınkaynak', title: '', image: '/referans_logos/altinkaynak.svg' },
    {
        id: 6,
        name: 'Saliha Taşcı',
        title: 'Diyetisyen & Psikolog',
        image: '/referans_logos/saliha_tasci.svg',
    },
];

const References = () => {
    return (
        <>
            <SEO
                title="Referanslarımız"
                description="KNC Creative referansları ve iş ortakları. Birlikte çalıştığımız markalardan bazıları."
                canonical="https://kncdesign.com.tr/referanslar"
                keywords={['referanslar', 'iş ortakları', 'müşteriler', 'projeler']}
            />

            <div className={styles.page}>
                <div className={styles.container}>
                    <h1 className={styles.title}>referanslarımız</h1>
                    <div className={styles.grid}>
                        {references.map((ref) => (
                            <div key={ref.id} className={styles.card}>
                                <div className={styles.cardContent}>
                                    <img src={ref.image} alt={ref.name} className={styles.logo} />
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
