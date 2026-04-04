import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const questions = [
        {
            q: "Do you provide online delivery?",
            a: "We currently do not provide online delivery. We believe hardware and sanitaryware are best inspected in person to ensure they meet your exact size and quality needs. Visit our Sagar shop for personalized service."
        },
        {
            q: "Are all your brands original?",
            a: "Yes, 100%. We are authorized dealers for major brands like Texmo, Plasto, and Johnson. Every product comes with a genuine brand guarantee."
        },
        {
            q: "Since when has Global Sanitary been operating?",
            a: "We started our journey in 2024 with a commitment to bring world-class hardware solutions to Sagar. Our team has extensive industry knowledge to help you choose the right materials."
        },
        {
            q: "Do you provide expert plumbing installation?",
            a: "While we specialize in supplying high-quality materials, we can recommend local, verified expert plumbers who are familiar with the brands we sell to help with your installations."
        }
    ];

    return (
        <section id="faq" className="section-padding" style={{ background: '#fff', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px' }}>
                    
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <HelpCircle size={40} color="var(--brand-accent)" style={{ marginBottom: '24px' }} />
                        <h2 className="heading-md" style={{ marginBottom: '24px' }}>Common Questions</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '32px' }}>
                            We are committed to full transparency. If you have any other questions, feel free to visit our shop or contact us on WhatsApp.
                        </p>
                        <a href="https://maps.app.goo.gl/dUgpgWuhCNYKxyWa8" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Visit Our Location</a>
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {questions.map((item, index) => (
                            <div key={index} style={{ border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden', background: activeIndex === index ? '#F1F5F9' : '#fff' }}>
                                <button 
                                    onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                                    style={{ 
                                        width: '100%', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                                        textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', outline: 'none'
                                    }}
                                >
                                    <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--brand-primary)' }}>{item.q}</span>
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </button>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div 
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div style={{ padding: '0 24px 24px 24px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                                                {item.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;
