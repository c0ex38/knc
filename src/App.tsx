import { Suspense, lazy, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

import ErrorBoundary from '@/components/shared/ErrorBoundary';
import Preloader from '@/components/shared/Preloader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/ui/PageTransition';

import Loading from '@/components/ui/Loading';

// Lazy Components
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const References = lazy(() => import('@/pages/References'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const StyleGuide = lazy(() => import('@/pages/StyleGuide')); // New Route

import ScrollToTop from '@/components/shared/ScrollToTop';

function App() {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    return (
        <>
            <ScrollToTop />
            <SpeedInsights />
            <Analytics />
            <AnimatePresence mode="wait">
                {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
            </AnimatePresence>

            {!loading && (
                <div className="bg-black min-h-screen">
                    <a href="#main-content" className="skip-link">
                        Ana İçeriğe Atla
                    </a>

                    <Navbar />

                    <main id="main-content">
                        <ErrorBoundary>
                            <Suspense fallback={<Loading />}>
                                <AnimatePresence mode="wait">
                                    <Routes location={location} key={location.pathname}>
                                        <Route
                                            path="/"
                                            element={
                                                <PageTransition>
                                                    <Home />
                                                </PageTransition>
                                            }
                                        />
                                        <Route
                                            path="/hakkimizda"
                                            element={
                                                <PageTransition>
                                                    <About />
                                                </PageTransition>
                                            }
                                        />
                                        <Route
                                            path="/hizmetlerimiz"
                                            element={
                                                <PageTransition>
                                                    <ServicesPage />
                                                </PageTransition>
                                            }
                                        />
                                        <Route path="/referanslar" element={<References />} />
                                        <Route path="/iletisim" element={<Contact />} />
                                        <Route path="/style-guide" element={<StyleGuide />} />{' '}
                                        {/* Design System */}
                                        <Route path="*" element={<NotFound />} />
                                    </Routes>
                                </AnimatePresence>
                            </Suspense>
                        </ErrorBoundary>
                    </main>

                    <Footer />
                </div>
            )}
        </>
    );
}

export default App;
