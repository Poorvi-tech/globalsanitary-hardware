import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="section-padding" style={{ background: 'var(--bg-page)', minHeight: '80vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <div className="container hero-grid">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="badge" style={{ display: 'inline-block', marginBottom: '16px' }}>Premium Hardware & Sanitaryware</span>
                    <h1 className="heading-lg" style={{ marginBottom: '20px' }}>Global Sanitary And Hardware</h1>
                    <p className="lead" style={{ marginBottom: '32px' }}>Professional-grade pipes, taps, showers, and bathroom accessories for your modern home construction and renovation projects.</p>
                    <div className="btn-group" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <a href="#products" className="btn btn-primary">Browse Products</a>
                        <a href="https://maps.app.goo.gl/dUgpgWuhCNYKxyWa8" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Visit Shop</a>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    style={{ position: 'relative' }}
                >
                    <div className="hero-image-wrapper">
                        <img 
                            src="/shop/shop1.jpeg" 
                            alt="Shop Inventory" 
                            onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=800'}
                        />
                    </div>
                    {/* Decorative element */}
                    <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '100px', height: '100px', background: 'var(--brand-primary)', opacity: 0.1, borderRadius: '20px', zIndex: -1 }}></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
