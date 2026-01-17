import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import styles from './StyleGuide.module.css';
import { slideUp, scaleUp } from '../utils/animations';

const StyleGuide = () => {
    const colors = [
        { name: '--color-orange', value: '#ff2700' },
        { name: '--color-black', value: '#111010' },
        { name: '--color-white', value: '#F2F0EF' },
        { name: '--color-gray-500', value: '#767474' },
    ];

    return (
        <>
            <SEO
                title="Design System"
                description="KNC Creative Design System and Style Guide"
                canonical="/style-guide"
            />

            <div className={styles.page}>
                <div className={styles.container}>
                    <h1 className={styles.sectionTitle}>Design System</h1>

                    {/* Colors Section */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Colors & Palette</h2>
                        <div className={styles.grid}>
                            {colors.map((color) => (
                                <motion.div
                                    key={color.name}
                                    className={styles.colorCard}
                                    variants={slideUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <div
                                        className={styles.colorPreview}
                                        style={{ backgroundColor: `var(${color.name})` }}
                                    />
                                    <div className={styles.colorInfo}>
                                        <span className={styles.colorName}>{color.name}</span>
                                        <span className={styles.colorValue}>{color.value}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Typography Section */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Typography</h2>
                        <div className={styles.typographyList}>
                            <div className={styles.typeItem}>
                                <span className={styles.typeLabel}>H1 / Benz Grotesk</span>
                                <h1>The Quick Brown Fox</h1>
                            </div>
                            <div className={styles.typeItem}>
                                <span className={styles.typeLabel}>H2 / Benz Grotesk</span>
                                <h2>The Quick Brown Fox</h2>
                            </div>
                            <div className={styles.typeItem}>
                                <span className={styles.typeLabel}>H3 / Benz Grotesk</span>
                                <h3>The Quick Brown Fox</h3>
                            </div>
                            <div className={styles.typeItem}>
                                <span className={styles.typeLabel}>Body / Montserrat</span>
                                <p>
                                    The quick brown fox jumps over the lazy dog. KNC Creative brings
                                    brands to life with stunning visuals and strategic design.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Motion Section */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Motion System</h2>
                        <div className={styles.componentGrid}>
                            <div>
                                <span className={styles.typeLabel} style={{ marginBottom: '1rem' }}>
                                    Slide Up
                                </span>
                                <motion.div
                                    className={styles.motionDemo}
                                    variants={slideUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 1 }} // Re-trigger everytime
                                >
                                    Box
                                </motion.div>
                            </div>

                            <div>
                                <span className={styles.typeLabel} style={{ marginBottom: '1rem' }}>
                                    Scale Up
                                </span>
                                <motion.div
                                    className={styles.motionDemo}
                                    variants={scaleUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 1 }}
                                >
                                    Box
                                </motion.div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default StyleGuide;
