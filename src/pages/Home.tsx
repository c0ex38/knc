import Hero from '../components/Hero';
import Services from '../components/Services';
import ThreeD from '../components/ThreeD';
import Marquee from '../components/Marquee';
import GoogleMap from '../components/GoogleMap';
import ContactCTA from '../components/ContactCTA';
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
            <Marquee />
            <ThreeD />
            <GoogleMap />
            <ContactCTA />
        </>
    );
};

export default Home;
