import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="hero-section" style={{ minHeight: '60vh', background: 'var(--gradient-hero)' }}>
                <div className="container text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ color: 'var(--accent-primary)' }}
                    >
                        Connect With Us
                    </motion.h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-body)' }}>We'd love to hear from you. Reach out today!</p>
                </div>
            </section>

            <section className="section-padding" style={{ marginTop: '-100px' }}>
                <div className="container grid-2">
                    <motion.div
                        className="glass-panel"
                        style={{ padding: '40px' }}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 style={{ marginBottom: '30px', color: 'var(--accent-secondary)' }}>Send a Message</h3>
                        <form>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Full Name</label>
                                <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-body)' }} />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Email Address</label>
                                <input type="email" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-body)' }} />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Message</label>
                                <textarea rows="5" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-body)' }}></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-secondary"
                                style={{ width: '100%' }}
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    <motion.div
                        style={{ padding: '40px' }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 style={{ marginBottom: '30px', color: 'var(--text-heading)' }}>Contact Info</h3>
                        <div style={{ marginBottom: '30px' }}>
                            <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>📍 Address</h4>
                            <p>Kirinya, Uganda</p>
                        </div>
                        <div style={{ marginBottom: '30px' }}>
                            <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>📞 Phone</h4>
                            <p><a href="tel:+256752502831" style={{ color: 'var(--accent-secondary)' }}>+256 752 502 831</a></p>
                        </div>
                        <div style={{ marginBottom: '30px' }}>
                            <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>✉️ Email</h4>
                            <p><a href="mailto:info@christlinessinternationalschool.com" style={{ color: 'var(--accent-secondary)' }}>info@christlinessinternationalschool.com</a></p>
                        </div>

                        <div className="glass-panel" style={{ padding: '20px', marginTop: '40px', textAlign: 'center' }}>
                            <h4 style={{ color: 'var(--text-heading)' }}>Admissions Open!</h4>
                            <p style={{ fontSize: '0.9rem' }}>We welcome children of all levels for Day & Boarding.</p>
                            <button className="btn btn-primary small">Call Admissions</button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
