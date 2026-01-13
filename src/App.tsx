import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Loading from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary';
import PageTransition from './components/PageTransition';
import { SpeedInsights } from "@vercel/speed-insights/react"

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const References = lazy(() => import('./pages/References'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const location = useLocation();

  return (
    <>
      <SpeedInsights />
      <Layout>
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/hakkimizda" element={<PageTransition><About /></PageTransition>} />
                <Route path="/hizmetlerimiz" element={<PageTransition><ServicesPage /></PageTransition>} />
                <Route path="/referanslar" element={<PageTransition><References /></PageTransition>} />
                <Route path="/iletisim" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </>

  );
}

export default App;
