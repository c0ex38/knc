import { Suspense, lazy } from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Marquee from '../components/sections/Marquee';
import ContactCTA from '../components/sections/ContactCTA';
import SEO from '../components/layout/SEO';
import Loading from '../components/ui/Loading';

// Lazy load heavy components
const ThreeD = lazy(() => import('../components/sections/ThreeD'));
const GoogleMap = lazy(() => import('../components/sections/GoogleMap'));

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
            <Suspense fallback={null}>
                <ThreeD />
            </Suspense>
            <Suspense fallback={<Loading />}>
                <GoogleMap />
            </Suspense>
            <ContactCTA />
        </>
    );
};

export default Home;
