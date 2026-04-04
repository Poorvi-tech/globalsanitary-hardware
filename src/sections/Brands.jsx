import React from 'react';
import { motion } from 'framer-motion';

const Brands = () => {
    const brands = ['Texmo', 'Plasto', 'Johnson', 'Vectus', 'Lipka', 'Bluwave', 'Waterwell', 'Benson', 'Hindware'];
    
    return (
        <section id="brands" className="section-padding" style={{ background: '#fff', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
            <div className="container text-center">
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '40px', fontWeight: 600 }}
                >
                    Authorized Brands
                </motion.p>
                <motion.div 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}
                >
                    {brands.map(brand => (
                        <motion.span 
                            key={brand} 
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 0.8, y: 0 }
                            }}
                            whileHover={{ opacity: 1, scale: 1.1, color: 'var(--brand-primary)' }}
                            style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--brand-secondary)', fontFamily: 'Outfit', cursor: 'default' }}
                        >
                            {brand}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Brands;
