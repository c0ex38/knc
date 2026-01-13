import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading time (e.g. 2 seconds)
        const duration = 2000;
        const interval = 20;
        const step = 100 / (duration / interval);

        const timer = setInterval(() => {
            setProgress(prev => {
                const next = prev + step;
                if (next >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return next;
            });
        }, interval);

        const completeTimer = setTimeout(() => {
            onComplete();
        }, duration + 500); // Wait a bit after 100%

        return () => {
            clearInterval(timer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                backgroundColor: '#111010',
                zIndex: 99999,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'var(--font-family-heading)'
            }}
        >
            <div style={{ position: 'relative', textAlign: 'center' }}>
                {/* Big Text */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        fontSize: 'clamp(3rem, 5vw, 6rem)',
                        fontWeight: 900,
                        color: '#fff',
                        margin: 0,
                        lineHeight: 1,
                        letterSpacing: '-0.02em'
                    }}
                >
                    KNC
                    <span style={{ color: '#ff2700' }}>.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    style={{
                        margin: '1rem 0 0',
                        color: '#666',
                        fontSize: '0.9rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-family-base)'
                    }}
                >
                    Creative
                </motion.p>
            </div>

            {/* Progress Bar Container */}
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '200px',
                height: '2px',
                background: 'rgba(255,255,255,0.1)',
                overflow: 'hidden'
            }}>
                {/* Progress Bar Fill */}
                <motion.div
                    style={{
                        height: '100%',
                        background: '#ff2700',
                        width: `${progress}%`
                    }}
                />
            </div>
            
            {/* Percentage Text */}
            <div style={{
                position: 'absolute',
                bottom: 'calc(10% - 25px)',
                left: '50%',
                transform: 'translateX(-50%)',
                color: '#444',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-family-base)',
                fontVariantNumeric: 'tabular-nums'
            }}>
                {Math.round(progress)}%
            </div>
        </motion.div>
    );
};

export default Preloader;
