import React, { useState } from 'react';
import ImageModal from '../components/ImageModal';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { ArrowRight, Palette, Monitor, PenTool } from 'lucide-react';
import impact from '../assets/IMDIG2.jpg';
import crf from '../assets/CRF-CRF.jpg'


const Home = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Dummy data for featured projects
    const featuredProjects = [
        {
            id: 1,
            title: 'Impact digital Identity',
            category: 'Entreprise',
            year: '2025',
            image: impact
        },
        {
            id: 2,
            title: ' Creative Friends',
            category: 'Entreprise',
            year: '2025',
            image: crf
        }
    ];

    const services = [
        {
            icon: <Palette size={32} />,
            title: 'Brand Identity',
            description: 'Creating memorable visual identities that resonate with your target audience.'
        },
        {
            icon: <Monitor size={32} />,
            title: 'Poster design',
            description: 'The creation of visually appealing abd informative layout to communicate'
        },
        {
            icon: <PenTool size={32} />,
            title: 'Logo creation',
            description: 'Custom logos to add character and uniqueness to your brand.'
        }
    ];

    return (
        <>
            <Hero />

            {/* Featured Work Section */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                        <div>
                            <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Portfolio</span>
                            <h2 style={{ marginTop: '0.5rem' }}>Selected Work</h2>
                        </div>
                        <Button to="/work" variant="secondary">View All Work</Button>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {featuredProjects.map(project => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onImageClick={setSelectedImage}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Services</span>
                        <h2 style={{ marginTop: '0.5rem' }}>What I Do</h2>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
                            I combine strategy and design to build brands that stand out in a crowded digital landscape.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem'
                    }}>
                        {services.map((service, index) => (
                            <div key={index} style={{
                                padding: '1rem',
                                backgroundColor: 'var(--bg-card)',
                                borderRadius: '16px',
                                transition: 'transform 0.3s ease'
                            }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{
                                    color: 'var(--accent-primary)',
                                    marginBottom: '1.5rem',
                                    background: 'rgba(139, 92, 246, 0.1)',
                                    width: 'fit-content',
                                    padding: '1rem',
                                    borderRadius: '12px'
                                }}>
                                    {service.icon}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container">
                    <div style={{
                        backgroundColor: 'var(--bg-card)',
                        padding: '4rem 2rem',
                        borderRadius: '24px',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h2 style={{ marginBottom: '1.5rem' }}>Ready to start your project?</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
                                Let's collaborate to bring your vision to life with pixel-perfect design.
                            </p>
                            <Button to="/contact" variant="primary">
                                Let's Talk <ArrowRight size={18} />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>


            <ImageModal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                imageSrc={selectedImage}
            />
        </>
    );
};

export default Home;
