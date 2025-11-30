import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { id, title, category, image, year } = project;

    return (
        <Link to={`/project/${id}`} style={{ display: 'block' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                style={{ cursor: 'pointer', group: 'card' }}
            >
                <div style={{
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    marginBottom: '1.5rem',
                    aspectRatio: '4/3',
                    backgroundColor: 'var(--bg-card)'
                }}>
                    <motion.img
                        src={image}
                        alt={title}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease'
                        }}
                        whileHover={{ scale: 1.05 }}
                    />
                    <div style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(4px)',
                        padding: '0.5rem',
                        borderRadius: '50%',
                        color: 'white',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                    }} className="arrow-icon">
                        <ArrowUpRight size={20} />
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{title}</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{category}</p>
                    </div>
                    <span style={{
                        border: '1px solid var(--text-muted)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)'
                    }}>
                        {year}
                    </span>
                </div>

                <style>{`
          a:hover .arrow-icon {
            opacity: 1 !important;
          }
        `}</style>
            </motion.div>
        </Link>
    );
};

export default ProjectCard;
