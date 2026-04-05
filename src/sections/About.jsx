import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, History, Award } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ background: '#fff', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center' }}>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 style={{ color: 'var(--brand-accent)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '16px' }}>Our Story</h4>
                        <h2 className="heading-md" style={{ marginBottom: '24px' }}>Serving Sagar with Excellence Since 2024</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '32px', lineHeight: '1.8' }}>
                            Global Sanitary And Hardware was founded with a clear mission: to provide the people of Sagar with the highest quality hardware and plumbing solutions at unbeatable market value. 
                            <br /><br />
                            In a short time, we have become a trusted name for builders, homeowners, and contractors alike. We believe in the power of quality materials to build lasting homes.
                        </p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ color: 'var(--brand-accent)' }}><Award size={24} /></div>
                                <span style={{ fontWeight: 600 }}>Premium Brands</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ color: 'var(--brand-accent)' }}><ShieldCheck size={24} /></div>
                                <span style={{ fontWeight: 600 }}>Quality Assured</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '12px solid #f8fafc' }}>
                            <img 
                                src="/shop/featurepro1.jpeg" 
                                alt="Shop Interior" 
                                style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                                onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&q=80&w=800'}
                            />
                        </div>
                        <div style={{ 
                            position: 'absolute', bottom: '30px', left: '-30px', background: 'var(--brand-primary)', color: 'white', 
                            padding: '24px 32px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(15,23,42,0.3)'
                        }}>
                            <h3 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '4px' }}>100%</h3>
                            <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Genuine Products Only</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
