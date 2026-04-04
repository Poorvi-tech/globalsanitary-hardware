import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '60px 0', background: '#020617', color: 'var(--text-muted)', textAlign: 'center', borderTop: '1px solid #1E293B' }}>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '60px' }}>
                        <img 
                            src="/shop/logo.png" 
                            alt="Global Sanitary & Hardware Logo" 
                            style={{ height: '60px', objectFit: 'contain' }}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.insertAdjacentHTML('afterend', '<span style="font-size: 1.4rem; font-weight: 800; color: white">GLOBAL<span style="color: var(--brand-accent)">SAN&HW</span></span>');
                            }}
                        />
                    </div>
                    <nav>
                        <ul style={{ display: 'flex', gap: '24px', listStyle: 'none' }}>
                            <li><a href="#home" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a></li>
                            <li><a href="#brands" style={{ color: 'inherit', textDecoration: 'none' }}>Brands</a></li>
                            <li><a href="#products" style={{ color: 'inherit', textDecoration: 'none' }}>Products</a></li>
                            <li><a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a></li>
                        </ul>
                    </nav>
                    <p style={{ maxWidth: '600px', fontSize: '0.9rem' }}>
                        Your one-stop destination for premium water fitting materials, sanitaryware, and hardware in Sagar. Professional quality and superior service since 2024.
                    </p>
                    <div style={{ borderTop: '1px solid #1E293B', width: '100%', paddingTop: '24px', marginTop: '12px' }}>
                        <p>&copy; Global Sanitary And Hardware. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
