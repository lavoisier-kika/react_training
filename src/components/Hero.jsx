import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section style={{
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '4rem'
        }}>
            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(0,0,0,0) 70%)',
                borderRadius: '50%',
                zIndex: -1,
                filter: 'blur(60px)'
            }} />

            <div className="container">
                <div style={{ maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span style={{
                            color: 'var(--accent-primary)',
                            fontWeight: 600,
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            marginBottom: '1rem',
                            display: 'block'
                        }}>
                            Designer Graphic 
                        </span>

                        <h1 style={{ marginBottom: '1.5rem' }}>
                            Boost your <span className="text-gradient">Brand</span> with us !
                        </h1>

                        <p style={{
                            fontSize: '1.25rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '2.5rem',
                            maxWidth: '600px',
                            lineHeight: 1.6
                        }}>
                            I help brands stand out through bold identity design, creative direction, and digital experiences that leave a lasting impression.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Button to="/work" variant="primary">
                                View My Work
                            </Button>
                            <Button to="/contact" variant="secondary">
                                Contact Me <ArrowRight size={18} />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
