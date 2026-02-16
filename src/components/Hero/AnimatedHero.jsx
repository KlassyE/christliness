import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AnimatedHero = () => {
    return (
        <section className="hero-section">
            <div className="container text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 style={{ marginBottom: '20px', color: 'var(--text-heading)' }}>
                        Welcome to <span style={{ color: 'var(--accent-primary)' }}>Christliness</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto 40px auto' }}
                >
                    Where Academic Excellence Meets Spiritual Growth.
                    <br />
                    <span style={{ color: 'var(--accent-secondary)', fontSize: '1.2rem' }}>
                        ACE & Christian Liberty Curriculum | Day & Boarding
                    </span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <Link to="/about" className="btn btn-primary">Discover Our Spirit</Link>
                    <Link to="/contact" className="btn btn-secondary">Join the Family</Link>
                </motion.div>

                {/* Floating Elements Animation */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ position: 'absolute', bottom: '50px', left: '50%', transform: 'translateX(-50%)', opacity: 0.7 }}
                >
                    <span style={{ color: 'var(--text-body)', fontSize: '2rem' }}>↓</span>
                </motion.div>
            </div>
        </section>
    );
};

export default AnimatedHero;
