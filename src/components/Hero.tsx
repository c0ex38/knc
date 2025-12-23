import './Hero.css';
import { useState, useEffect } from 'react';

const Hero = () => {
    const fullText = "Görselliği vizyona dönüştüren yaratıcı fikirlerle markanızı büyütüyoruz.";
    const [displayText, setDisplayText] = useState(fullText);
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        // Wait 2 seconds before starting the first deletion
        if (!hasStarted) {
            const startTimer = setTimeout(() => {
                setHasStarted(true);
                setIsDeleting(true);
            }, 2000);
            return () => clearTimeout(startTimer);
        }

        const handleTyping = () => {

            if (!isDeleting && displayText === fullText) {
                // Pause before deleting
                setTimeout(() => setIsDeleting(true), 2000);
                return;
            }

            if (isDeleting && displayText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(100);
                return;
            }

            if (isDeleting) {
                setDisplayText(fullText.substring(0, displayText.length - 1));
                setTypingSpeed(50);
            } else {
                setDisplayText(fullText.substring(0, displayText.length + 1));
                setTypingSpeed(100);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, loopNum, typingSpeed, fullText, hasStarted]);

    return (
        <section className="hero" id="home">
            <div className="hero__container">
                {/* Text Content */}
                <div className="hero__content">
                    <h1 className="hero__title">
                        Bakan değil, <span className="hero__title--highlight">gören</span> bir ajans.
                    </h1>
                    <p className="hero__description">
                        {displayText}
                        <span className="hero__description-cursor">|</span>
                    </p>
                </div>

                {/* Half Circle */}
                <div className="hero__circle"></div>
            </div>
        </section>
    );
};

export default Hero;
