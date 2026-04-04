import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                height: 'var(--nav-height)',
                position: 'fixed',
                top: 0, left: 0, right: 0,
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                background: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
                borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.3)' : 'none'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <motion.a 
                    href="#" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                >
                    <img 
                        src="/shop/logo.png" 
                        alt="Global Sanitary & Hardware Logo" 
                        style={{ height: '50px', objectFit: 'contain' }}
                        onError={(e) => {
                            e.target.style.display = 'none';
                            if (!e.target.parentNode.querySelector('.fallback-logo')) {
                                e.target.insertAdjacentHTML('afterend', '<span class="fallback-logo" style="font-size: 1.4rem; font-weight: 800; color: var(--brand-primary)">GLOBAL<span style="color: var(--brand-accent)">SAN&HW</span></span>');
                            }
                        }}
                    />
                </motion.a>
                <nav>
                    <ul style={{ display: 'flex', gap: '24px', listStyle: 'none', alignItems: 'center' }}>
                        {['Home', 'About', 'Brands', 'FAQ', 'Products'].map((item) => (
                            <li key={item}>
                                <motion.a 
                                    href={`#${item.toLowerCase()}`} 
                                    whileHover={{ y: -2, color: 'var(--brand-primary)' }}
                                    style={{ 
                                        textDecoration: 'none', 
                                        color: isScrolled ? '#1e293b' : 'var(--text-secondary)', 
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        transition: 'color 0.2s',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {item}
                                </motion.a>
                            </li>
                        ))}
                        <li>
                            <motion.a 
                                href="#contact" 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-primary" 
                                style={{ padding: '8px 20px', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', fontSize: '0.9rem' }}
                            >
                                Contact
                            </motion.a>
                        </li>
                    </ul>
                </nav>
            </div>
        </motion.header>
    );
};

export default Navbar;
