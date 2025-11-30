import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <div className="section" style={{ paddingTop: '8rem' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem'
                }}>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Get in Touch</span>
                        <h1 style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>Let's work together</h1>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{
                                    backgroundColor: 'var(--bg-card)',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    color: 'var(--accent-primary)'
                                }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Email</h3>
                                    <a href="mailto:hello@chelo.design" style={{ color: 'var(--text-secondary)' }}>chelographicdesign005@gmail.com</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{
                                    backgroundColor: 'var(--bg-card)',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    color: 'var(--accent-primary)'
                                }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Phone</h3>
                                    <a href="tel:+1234567890" style={{ color: 'var(--text-secondary)' }}>+243 970 510 489</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{
                                    backgroundColor: 'var(--bg-card)',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    color: 'var(--accent-primary)'
                                }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Location</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>Goma, DRC</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{
                            backgroundColor: 'var(--bg-card)',
                            padding: '2.5rem',
                            borderRadius: '24px'
                        }}
                    >
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '8px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        backgroundColor: 'var(--bg-primary)',
                                        color: 'white',
                                        outline: 'none'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '8px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        backgroundColor: 'var(--bg-primary)',
                                        color: 'white',
                                        outline: 'none'
                                    }}
                                />
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '8px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        backgroundColor: 'var(--bg-primary)',
                                        color: 'white',
                                        outline: 'none',
                                        resize: 'vertical'
                                    }}
                                ></textarea>
                            </div>

                            <Button type="submit" variant="primary" style={{ width: '100%' }}>
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
