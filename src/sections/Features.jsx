import React from 'react';
import { motion } from 'framer-motion';
import { Settings, ShieldCheck, Truck, Users } from 'lucide-react';

const Features = () => {
    const featureList = [
        {
            icon: <ShieldCheck size={40} />,
            title: 'Genuine Products',
            description: 'We only stock 100% original brands like Texmo, Johnson, and Plasto. Every item is verified for quality.',
            color: '#3B82F6'
        },
        {
            icon: <Settings size={40} />,
            title: 'Expert Advice',
            description: 'Not sure what you need? Our experts provide free consultations on plumbing and bathroom fittings.',
            color: '#10B981'
        },
        {
            icon: <Users size={40} />,
            title: 'Builder Trusted',
            description: 'Preferred partner for local builders and contractors in Sagar for reliable bulk hardware supply.',
            color: '#F59E0B'
        },
        {
            icon: <Truck size={40} />,
            title: 'In-Store Shop',
            description: 'Visit us to touch, feel, and inspect products before you buy. We prioritize in-person service quality.',
            color: '#EF4444'
        }
    ];

    return (
        <section id="features" className="section-padding" style={{ background: '#f8fafc' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="heading-md">Why Choose Global Sanitary</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        We go beyond just selling hardware. We provide reliability and expertise you can count on for your construction.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
                    {featureList.map((f, index) => (
                        <motion.div 
                            key={f.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            style={{ 
                                background: '#fff', padding: '48px 32px', borderRadius: '32px', 
                                border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                            }}
                        >
                            <div style={{ color: f.color, marginBottom: '24px' }}>{f.icon}</div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>{f.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{f.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
