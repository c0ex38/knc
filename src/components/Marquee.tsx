import './Marquee.css';

const Marquee = () => {
    return (
        <section className="marquee">
            <div className="marquee__container">
                <div className="marquee__stripe-white">
                    <svg width="100%" height="100%" className="stripe-pattern-white" style={{ position: 'absolute', top: 0, left: 0 }}>
                        <defs>
                            <pattern id="circles-white" x="0" y="0" width="240" height="50" patternUnits="userSpaceOnUse">
                                <circle cx="30" cy="25" r="20" fill="none" stroke="white" strokeWidth="8" />
                                <circle cx="30" cy="25" r="7" fill="white" />
                                <circle cx="90" cy="25" r="20" fill="none" stroke="white" strokeWidth="8" />
                                <circle cx="90" cy="25" r="7" fill="white" />
                                <circle cx="150" cy="25" r="20" fill="none" stroke="white" strokeWidth="8" />
                                <circle cx="150" cy="25" r="7" fill="white" />
                                <circle cx="210" cy="25" r="20" fill="none" stroke="white" strokeWidth="8" />
                                <circle cx="210" cy="25" r="7" fill="white" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#circles-white)" />
                    </svg>
                </div>
                <div className="marquee__stripe">
                    <svg width="100%" height="100%" className="stripe-pattern" style={{ position: 'absolute', top: 0, left: 0 }}>
                        <defs>
                            <pattern id="circles" x="0" y="0" width="240" height="50" patternUnits="userSpaceOnUse">
                                <circle cx="30" cy="25" r="20" fill="none" stroke="white" strokeWidth="8" />
                                <circle cx="30" cy="25" r="7" fill="white" />
                                <circle cx="90" cy="25" r="20" fill="none" stroke="white" strokeWidth="8" />
                                <circle cx="90" cy="25" r="7" fill="white" />
                                <circle cx="150" cy="25" r="20" fill="none" stroke="white" strokeWidth="8" />
                                <circle cx="150" cy="25" r="7" fill="white" />
                                <circle cx="210" cy="25" r="20" fill="none" stroke="white" strokeWidth="8" />
                                <circle cx="210" cy="25" r="7" fill="white" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#circles)" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Marquee;
