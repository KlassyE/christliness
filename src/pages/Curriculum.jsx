import React from 'react';
import { motion } from 'framer-motion';

const Curriculum = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="curriculum-page">
            <section className="hero-section" style={{ minHeight: '50vh', background: 'var(--gradient-hero)' }}>
                <div className="container text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ color: 'var(--accent-primary)', marginBottom: '20px' }}
                    >
                        Academic Excellence Rooted in Faith
                    </motion.h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-body)', maxWidth: '800px', margin: '0 auto' }}>
                        At Christliness International School, we offer a dual-curriculum approach that nurtures the whole child:
                        spiritually, academically, and socially.
                    </p>
                </div>
            </section>

            {/* ACE Section */}
            <section className="section-padding">
                <div className="container">
                    <motion.div {...fadeIn} className="glass-panel" style={{ padding: '40px', marginBottom: '60px' }}>
                        <h2 style={{ color: 'var(--accent-primary)', marginBottom: '30px', borderBottom: '2px solid var(--accent-secondary)', display: 'inline-block' }}>
                            Accelerated Christian Education (ACE)
                        </h2>
                        <div className="grid-2">
                            <div>
                                <p>
                                    The <strong>ACE curriculum</strong> is a bible-based K-12 educational system that facilitates individualized learning.
                                    Ideally suited for our diverse student body, it allows each child to progress at their own pace through
                                    Packets of Accelerated Christian Education (**PACEs**).
                                </p>
                                <h4 style={{ color: 'var(--text-heading)', marginTop: '20px' }}>Key Features:</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {[
                                        '🏰 Character Building: Integrates 60 Christ-like character traits.',
                                        '🚀 Mastery-Based: Students must master a concept before moving forward.',
                                        '📖 Scripture Integration: Biblical principles are woven into every subject.',
                                        '🎯 Goal Setting: Teaches students to set and achieve daily goals.'
                                    ].map((item, i) => (
                                        <li key={i} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ marginRight: '10px' }}>✅</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{
                                    background: 'var(--bg-card)',
                                    padding: '30px',
                                    borderRadius: '12px',
                                    textAlign: 'center',
                                    border: '1px solid var(--accent-secondary)'
                                }}>
                                    <h3 style={{ color: 'var(--accent-secondary)' }}>Individualized Learning</h3>
                                    <p style={{ fontSize: '0.9rem' }}>
                                        "Level learning, not grade learning." <br />
                                        Every child is unique. ACE ensures that gifted students are challenged
                                        while those needing more time receive it without pressure.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CLASS Section */}
                    <motion.div {...fadeIn} className="glass-panel" style={{ padding: '40px' }}>
                        <h2 style={{ color: 'var(--accent-primary)', marginBottom: '30px', borderBottom: '2px solid var(--accent-secondary)', display: 'inline-block' }}>
                            Christian Liberty Academy School System (CLASS)
                        </h2>
                        <div className="grid-2">
                            <div style={{ order: 2 }}>
                                <p>
                                    <strong>CLASS</strong> (Christian Liberty Homeschools) emphasizes a flexible, customized approach to education.
                                    It utilizes materials from various top Christian publishers to create a rigorous yet adaptable curriculum.
                                </p>
                                <h4 style={{ color: 'var(--text-heading)', marginTop: '20px' }}>Why We Use CLASS:</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {[
                                        '📊 Standardized Testing: Ensures objective placement and progress tracking.',
                                        '📚 Diverse Materials: Uses best-in-class resources from Bob Jones, Apologia, etc.',
                                        '🧬 Strong Basics: Emphasis on Phonics, Reading, and Arithmetic in early years.',
                                        '🎓 College Prep: Rigorous high school tracks including Physics and World Literature.'
                                    ].map((item, i) => (
                                        <li key={i} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                            <span style={{ marginRight: '10px' }}>✅</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div style={{ order: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{
                                    background: 'var(--bg-card)',
                                    padding: '30px',
                                    borderRadius: '12px',
                                    textAlign: 'center',
                                    border: '1px solid var(--accent-secondary)'
                                }}>
                                    <h3 style={{ color: 'var(--accent-secondary)' }}>Customized Excellence</h3>
                                    <p style={{ fontSize: '0.9rem' }}>
                                        Recognizing that "one size does not fit all," CLASS allows us to tailor
                                        the educational experience to specific academic needs and learning styles.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choice Section */}
            <section className="section-padding" style={{ background: 'var(--bg-card)' }}>
                <div className="container text-center">
                    <h2 style={{ color: 'var(--accent-primary)', marginBottom: '40px' }}>Why This Combination?</h2>
                    <div className="grid-3">
                        {[
                            { title: 'Spiritual Foundation', desc: 'Both systems are unapologetically Christian, ensuring your child grows in faith.' },
                            { title: 'Academic Rigor', desc: 'We combine the mastery approach of ACE with the broad scope of CLASS.' },
                            { title: 'Future Readiness', desc: 'Graduates are well-equipped for university and vocational success.' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="glass-panel"
                                style={{ padding: '20px' }}
                                whileHover={{ y: -10 }}
                            >
                                <h3 style={{ color: 'var(--accent-secondary)' }}>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="section-padding">
                <div className="container text-center">
                    <h2 style={{ color: 'var(--accent-primary)', marginBottom: '30px' }}>Want to Know More?</h2>
                    <p style={{ marginBottom: '40px' }}>
                        Explore the official websites of our curriculum partners to learn deeper details about their philosophy and scope.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a
                            href="https://www.aceschooloftomorrow.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Visit ACE Ministries 🌐
                        </a>
                        <a
                            href="https://homeschools.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                        >
                            Visit CLASS Homeschools 🌐
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Curriculum;
