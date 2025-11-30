import React from 'react';
import { Github, Twitter, Linkedin, Instagram, Mail, Facebook } from 'lucide-react';
import logo from '../assets/New-logo-CGD3.png'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/chelographic-design-320a05397?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
        { icon: <Twitter size={20} />, href: 'https://x.com/chelodesign667?t=2NKNtJqZOABrMULEfIpVWw&s=09', label: 'Twitter' },
        { icon: <Instagram size={20} />, href: 'https://www.instagram.com/chelographicdesign?igsh=MTE4dTZwc2twd25hdA==', label: 'Instagram' },
        { icon: <Facebook size={20} />, href: 'https://www.facebook.com/profile.php?id=61576634039013', label: 'Facebbok' },
    ];

    return (
        <footer style={{
            backgroundColor: 'var(--bg-secondary)',
            padding: '4rem 0 2rem',
            marginTop: 'auto'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2rem',
                    textAlign: 'center'
                }}>
                    <div>
                        
                        <img src={logo} style={{width: '450px'}} alt="" />
                        <p style={{ color: 'var(--text-secondary)' }}> Your vision, Our creation.</p>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                aria-label={link.label}
                                style={{
                                    color: 'var(--text-secondary)',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    <div style={{
                        width: '100%',
                        height: '1px',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        margin: '1rem 0'
                    }} />

                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem'
                    }}>
                        <p>&copy; {currentYear} Chelo Design. All rights reserved.</p>
                        <a href="mailto:chelographicdesign005@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Mail size={16} /> chelographicdesign005@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
