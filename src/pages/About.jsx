import React from 'react';
import { motion } from 'framer-motion';
import chelo from '../assets/CGD-PNG.png'


const About = () => {
    const skills = [
        'Brand Strategy', 'Logo Design', 'Illustration', 'Motion Graphics',
        'Art Direction', 'Packaging Design'
    ];

    return (
        <div className="section" style={{ paddingTop: '8rem' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{
                            position: 'relative',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            aspectRatio: '3/4'
                        }}>
                            <img
                                src={chelo}
                                alt="Chelo Portrait"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>About Me</span>
                        <h1 style={{ marginTop: '0.5rem', marginBottom: '2rem' }}>
                            Design is not just what it looks like. 
                        </h1>

                        <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                            <p style={{ marginBottom: '1rem' }}>
                                Hi, I'm Chelo. Highly skilled graphic designer with over 2 years of experience managing the end-to-end design process, from concept development to delivery.
                            </p>
                            <p>
                                My journey started with a passion for art and technology, which led me to explore the intersection of design and functionality. I believe that good design should be invisible—it should solve problems and communicate ideas without getting in the way.
                            </p>
                        </div>

                        <h3 style={{ marginBottom: '1rem' }}>Skills & Expertise</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {skills.map(skill => (
                                <span key={skill} style={{
                                    backgroundColor: 'var(--bg-card)',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '50px',
                                    fontSize: '0.9rem',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
