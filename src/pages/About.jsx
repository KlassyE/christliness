import React from 'react';
import { motion } from 'framer-motion';

// Import images
import ruthImg from '../assets/images/Ruth.jpg';
import learningImg from '../assets/images/learning.jpg';
import studySpaceImg from '../assets/images/Study space 1.jpg';
import classesImg from '../assets/images/classes.jpg';
import classroomImg from '../assets/images/classroom.jpg';

const About = () => {
    return (
        <div className="about-page">
            <section className="page-banner" style={{
                backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.85)), url('https://via.placeholder.com/1200x300.png?text=Our+Campus')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '120px 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '3rem', color: 'var(--accent-primary)' }}
                    >
                        Our Story & Values
                    </motion.h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-body)' }}>Dedicated to Excellence in Spirit and Mind</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container grid-3">
                    {[
                        { title: 'Our Mission', text: 'To provide an excellent christian education for children to please Jesus in all their interactions with man (2 Timothy 2:15)', color: 'var(--bg-element)' },
                        { title: 'Our Vision', text: 'To nurture children into Bible based individuals who are excellently equipped spiritually, emotionally, academically and practically for every good work (2 Timothy 3:16)', color: 'var(--bg-card)' },
                        { title: 'Core Values', text: 'Excellent spiritual, emotional, practical and academic learning.', color: 'var(--bg-element)' }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel"
                            style={{ padding: '30px', textAlign: 'center', backgroundColor: item.color }}
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 style={{ color: 'var(--accent-secondary)', marginBottom: '15px' }}>{item.title}</h3>
                            <p>{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="section-padding" style={{ background: 'var(--bg-card)' }}>
                <div className="container">
                    <motion.div
                        className="glass-panel"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ padding: '40px', display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap-reverse' }}
                    >
                        <div style={{ flex: '2 1 400px' }}>
                            <h2 style={{ color: 'var(--accent-primary)', marginBottom: '20px' }}>Meet Principal Kabagambe Ruth</h2>
                            <p style={{ marginBottom: '20px' }}>
                                Mrs. Kabagambe Ruth is a dedicated educator with a passion for fostering a learning environment where Christian values and academic rigor go hand-in-hand.
                                With years of experience in educational leadership, she is committed to the holistic development of every student at Christliness International School.
                            </p>
                            <p style={{ fontStyle: 'italic', borderLeft: '4px solid var(--accent-secondary)', paddingLeft: '20px', color: 'var(--text-body)' }}>
                                "Our goal is to raise up a generation that loves God and uses their talents to make a positive impact on the world."
                            </p>
                        </div>
                        <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
                            <img src={ruthImg} alt="Principal Kabagambe Ruth" style={{ borderRadius: '10px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', border: '2px solid var(--accent-secondary)' }} />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '50px' }}>Our Curriculum</h2>
                    <div className="grid-2">
                        <motion.div
                            className="feature-card"
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 style={{ color: 'var(--accent-primary)' }}>Christian Liberty (CLASS)</h3>
                            <p>A comprehensive, Christ-centered curriculum designed to provide a solid academic foundation with a focus on biblical values and character development.</p>
                        </motion.div>
                        <motion.div
                            className="feature-card"
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 style={{ color: 'var(--accent-primary)' }}>Accelerated Christian Education (ACE)</h3>
                            <p>A Bible-based, individualized curriculum that allows students to learn at their own pace, focusing on mastery of concepts and moral character.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section-padding" style={{ background: 'var(--bg-element)' }}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '40px' }}>Campus Facilities</h2>
                    <div className="grid-4">
                        {[learningImg, studySpaceImg, classesImg, classroomImg].map((img, index) => (
                            <motion.div key={index} whileHover={{ scale: 1.1, zIndex: 10 }} style={{ borderRadius: '8px', overflow: 'hidden', height: '200px' }}>
                                <img src={img} alt="Facility" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
