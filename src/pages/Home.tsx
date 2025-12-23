import Hero from '../components/Hero';
import Services from '../components/Services';
import ThreeD from '../components/ThreeD';
import Marquee from '../components/Marquee';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>KNC CREATIVE - Dijital Yaratıcılık Ajansı</title>
                <meta name="description" content="KNC Creative ile markanızı öne çıkarın. Grafik tasarım, web tasarım ve sosyal medya yönetimi hizmetleri." />
                <link rel="canonical" href="https://knccreative.com/" />
            </Helmet>
            <Hero />
            <Services />
            <ThreeD />
            <Marquee />
        </>
    );
};

export default Home;
