import './About.css';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div className="about-page">
            <Helmet>
                <title>Hakkımızda | KNC CREATIVE</title>
                <meta name="description" content="Bakan çok, gören az. Biz göreniz. KNC Creative'in vizyonu ve misyonu hakkında detaylı bilgi." />
                <link rel="canonical" href="https://knccreative.com/hakkimizda" />
            </Helmet>
            <div className="about-page__container">
                <h1 className="about-page__title">
                    Bakan çok, gören az.<br />
                    Biz göreniz.
                </h1>

                <div className="about-page__divider">
                    {/* Repeated Circle Pattern */}
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="about-page__circle-icon">
                            <div className="about-page__circle-inner"></div>
                        </div>
                    ))}
                </div>

                <div className="about-page__content">
                    <p>
                        KNC Creative, grafik tasarımdan dijital içeriklere, kurumsal kimlikten sosyal medya
                        yönetimine kadar markanızın ihtiyacı olan tüm görsel dünyayı tek bir çatı altında sunar.
                    </p>
                    <p>
                        Biz, estetiği yalnızca "güzel" olan değil, doğru algılanan, fark edilen ve iz bırakan olarak tanımlarız.
                    </p>
                    <p>
                        Çünkü her projeye yalnızca bakmıyor, derinlemesine görüyoruz.
                        Ve bu farkla markanızı bir adım öne taşıyoruz.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
