import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button' 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-colors duration-300";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-transparent border border-white text-white hover:bg-white hover:text-black",
    accent: "bg-purple-600 text-white hover:bg-purple-700", // Using tailwind-like classes but we have custom CSS, let's stick to style objects or custom classes if we were using modules. 
    // Since we are using global CSS variables, let's use inline styles or a mapped class approach.
    // Actually, let's use the classes we defined in index.css or just inline styles for simplicity with the variables.
    // Wait, I didn't define utility classes for buttons in index.css. I should rely on the `className` prop or define specific styles here.
    // Let's use a style object approach for the variants to ensure they use the variables correctly.
  };

  // Let's rewrite to use a style object for better control with our variables
  const getStyle = (variant) => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--text-primary)',
          color: 'var(--bg-primary)',
          border: '1px solid var(--text-primary)'
        };
      case 'secondary':
        return {
          backgroundColor: 'transparent',
          color: 'var(--text-primary)',
          border: '1px solid var(--text-secondary)'
        };
      case 'accent':
        return {
          background: 'var(--accent-gradient)',
          color: 'white',
          border: 'none'
        };
      default:
        return {};
    }
  };

  const buttonStyle = {
    ...getStyle(variant),
    padding: '0.8rem 2rem',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    transition: 'transform 0.2s ease, opacity 0.2s ease',
    textDecoration: 'none',
    border: variant === 'secondary' ? '1px solid var(--text-secondary)' : 'none', // Fallback
    ...getStyle(variant) // Override
  };

  const content = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
    >
      {children}
    </motion.span>
  );

  if (to) {
    return (
      <Link to={to} style={buttonStyle} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      style={buttonStyle}
      className={className}
      onClick={onClick}
      type={type}
      whileHover={{ opacity: 0.9, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
