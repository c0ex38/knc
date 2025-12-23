import './ServicesPage.css';
import { Helmet } from 'react-helmet-async';

const ServicesPage = () => {
    const services = [
        {
            number: "01",
            title: "Grafik Tasarım",
            description: "Logo, broşür, afiş, katalog gibi tüm basılı ve dijital materyallerle kurumsal kimliğinizi profesyonelce yansıtırız."
        },
        {
            number: "02",
            title: "Video Prodüksiyon",
            description: "Reklam filmleri, tanıtım videoları, backstage çekimleri ve etkileyici kurgular ile markanızı dinamik anlatıyoruz."
        },
        {
            number: "03",
            title: "Kurumsal Kimlik",
            description: "Markanızın temel değerleriyle uyumlu, renk paletinizden yazı karakterlerinize kadar bütüncül bir kurumsal kimlik oluşturuyoruz."
        },
        {
            number: "04",
            title: "Sosyal Medya",
            description: "Instagram, LinkedIn ve diğer platformlara özel stratejik içerikler, gönderiler, reels videoları ve sayfa yönetimiyle görünürlüğünüzü güçlendiriyoruz."
        },
        {
            number: "05",
            title: "Web Tasarım",
            description: "Benzersiz ve akılda kalıcı web siteleri oluşturuyoruz. Kalıplaşmış şablon web siteleri değil, yalnızca markanıza uygun, özel tasarımlar."
        },
        {
            number: "06",
            title: "Promosyon ve İş Elbiseleri",
            description: "Flaş Reklam ortaklığıyla, 40 yıllık deneyimi markanıza yansıtıyoruz. Tasarım ve baskı süreci tek elden yönetilen profesyonel çözümler."
        }
    ];

    return (
        <div className="services-page">
            <Helmet>
                <title>Hizmetlerimiz | KNC CREATIVE</title>
                <meta name="description" content="KNC Creative'in sunduğu profesyonel hizmetler: Grafik tasarım, video prodüksiyon, kurumsal kimlik, sosyal medya yönetimi, web tasarım ve promosyon ürünleri." />
                <link rel="canonical" href="https://knccreative.com/hizmetlerimiz" />
            </Helmet>

            <div className="services-page__container">
                <h1 className="services-page__title">hizmetlerimiz</h1>

                <div className="services-page__grid">
                    {services.map((service) => (
                        <div key={service.number} className="service-card">
                            <div className="service-card__number">{service.number}</div>
                            <h2 className="service-card__title">{service.title}</h2>
                            <p className="service-card__description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
