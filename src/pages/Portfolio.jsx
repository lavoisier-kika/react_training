import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import colonie from '../assets/colonie-ECEDEN.jpg'
import kls from '../assets/KLS-MOCK-UP.jpg'
import mockup from '../assets/mock-up--&&&&.jpg'
import poulet from '../assets/POULET-DE-CHAIR.png'
import shein from '../assets/SHEIN-COLLECTIONS.jpg'
import mgl from '../assets/MGL-GOAL-SUPRA.jpg'

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            id: 1,
            title: 'Colonie ECEDEN',
            category: 'Institution',
            year: '2025',
            image: colonie
        },
        {
            id: 2,
            title: 'KIVU LAPINO SERVICE',
            category: 'Entreprise',
            year: '2023',
            image: kls
        },
        {
            id: 3,
            title: 'Identité Visuelle',
            category: 'Marque',
            year: '2024',
            image: mockup
        },
        {
            id: 4,
            title: 'Maison Adonis',
            category: 'Entreprise',
            year: '2025',
            image: poulet
        },
        {
            id: 5,
            title: 'Shein Collections',
            category: 'Marque',
            year: '2024',
            image: shein
        },
        {
            id: 6,
            title: 'Maendeleo GL',
            category: 'Foot club',
            year: '2025',
            image: mgl
        }
    ];

    const categories = ['All', 'Branding', 'Web Design', 'Illustration', 'Print'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <div className="section" style={{ paddingTop: '8rem' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '4rem', textAlign: 'center' }}
                >
                    <h1 style={{ marginBottom: '1rem' }}>Selected Works</h1>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        A collection of projects that showcase my passion for design and attention to detail.
                    </p>
                </motion.div>

                {/* Filter Buttons
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginBottom: '3rem',
                    flexWrap: 'wrap'
                }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            style={{
                                padding: '0.5rem 1.5rem',
                                borderRadius: '50px',
                                border: filter === cat ? '1px solid var(--accent-primary)' : '1px solid var(--text-muted)',
                                backgroundColor: filter === cat ? 'var(--accent-primary)' : 'transparent',
                                color: filter === cat ? 'white' : 'var(--text-secondary)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div> */}

                {/* Projects Grid */}
                <motion.div
                    layout
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                        gap: '3rem'
                    }}
                >
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Portfolio;
