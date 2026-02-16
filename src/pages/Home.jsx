import React from 'react';
import { motion } from 'framer-motion';
import AnimatedHero from '../components/Hero/AnimatedHero';
import MemoryGame from '../components/FunZone/MemoryGame';
import { Link } from 'react-router-dom';

// Import images
import ruthImg from '../assets/images/Ruth.jpg';
import studySpaceImg from '../assets/images/Study space 1.jpg';
import bdayImg from '../assets/images/bday.jpg';
import spaceImg from '../assets/images/space.jpg';
import princeImg from '../assets/images/prince.jpg';

const Home = () => {
    return (
        <div className="home-page">
            <AnimatedHero />

            {/* Principal Section - Glassmorphism */}
            <section className="section-padding" style={{ position: 'relative' }}>
                <div className="container">
                    <motion.div
                        className="glass-panel principal-container"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="principal-image-wrapper">
                            <img
                                src={ruthImg}
                                alt="Principal Kabagambe Ruth"
                                className="principal-image"
                            />
                        </div>
                        <div className="principal-content">
                            <h2 style={{ color: 'var(--accent-primary)', marginBottom: '20px' }}>A Message from Our Principal</h2>
                            <h3 style={{ marginBottom: '10px', color: 'var(--text-heading)' }}>Kabagambe Ruth</h3>
                            <p style={{ color: 'var(--text-body)' }}>
                                "Welcome to Christliness International School! We are a community dedicated to academic excellence and spiritual growth.
                                We believe every child is a unique gift from God, and our mission is to nurture their talents and character.
                                Join us as we embark on a journey of faith, learning, and discovery."
                            </p>
                            <Link to="/about" className="btn btn-primary" style={{ marginTop: '20px' }}>Read Full Message</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="section-padding">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '60px' }}>
                        <h2>Why Choose Christliness?</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto' }}>We provide a holistic education that balances the mind, body, and spirit.</p>
                    </div>

                    <div className="grid-2">
                        {[
                            { icon: '✝️', title: 'Faith-Centered', desc: 'Instilling Christian values in all aspects of school life.' },
                            { icon: '📚', title: 'Global Curriculum', desc: 'Christian Liberty (CLASS) & ACE programs.' },
                            { icon: '🏠', title: 'Home Away from Home', desc: 'Safe, nurturing boarding facilities.' },
                            { icon: '👥', title: 'Personalized Care', desc: 'Small class sizes where every child is valued.' }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="feature-icon">{feature.icon}</div>
                                <h3 style={{ color: 'var(--text-heading)' }}>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE FUN ZONE */}
            <section className="section-padding" style={{ background: 'var(--gradient-hero)' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '40px' }}>
                        <motion.h2
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            style={{ color: 'var(--accent-primary)' }}
                        >
                            The Fun Zone 🚀
                        </motion.h2>
                        <p>Take a break and test your memory!</p>
                    </div>
                    <MemoryGame />
                </div>
            </section>

            {/* Gallery Preview */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '40px' }}>Life at Christliness</h2>
                    <div className="gallery-grid">
                        {[studySpaceImg, bdayImg, spaceImg, princeImg].map((img, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                                style={{ overflow: 'hidden', borderRadius: '12px', height: '200px' }}
                            >
                                <img src={img} alt="School Life" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: '40px' }}>
                        <Link to="/about" className="btn btn-primary">View Full Gallery</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
