import { Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ThreeD from '../components/ThreeD';
import Marquee from '../components/Marquee';
import ContactCTA from '../components/ContactCTA';
import SEO from '../components/SEO';
import Loading from '../components/Loading';

// Lazy load heavy components
const GoogleMap = lazy(() => import('../components/GoogleMap'));

const Home = () => {
    return (
        <>
            <SEO
                title="Dijital Yaratıcılık Ajansı"
                description="KNC Creative ile markanızı öne çıkarın. Grafik tasarım, web tasarım ve sosyal medya yönetimi hizmetleri."
                canonical="/"
            />
            <Hero />
            <Services />
            <Marquee />
            <ThreeD />
            <Suspense fallback={<Loading />}>
                <GoogleMap />
            </Suspense>
            <ContactCTA />
        </>
    );
};

export default Home;
