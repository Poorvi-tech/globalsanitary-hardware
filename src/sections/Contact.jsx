import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Opening Mail Client...');
        
        const subject = encodeURIComponent(`Inquiry from ${formData.name} via Website`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        const mailtoLink = `mailto:globalsanitaryandhardware@gmail.com?subject=${subject}&body=${body}`;
        
        setTimeout(() => {
            window.location.href = mailtoLink;
            setStatus('Message Ready to Send');
            setTimeout(() => setStatus(''), 3000);
            setFormData({ name: '', email: '', message: '' });
        }, 800);
    };

    return (
        <section id="contact" className="section-padding" style={{ background: 'var(--brand-primary)', color: 'white', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px' }}>
                    
                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ padding: '40px', borderRadius: 'var(--radius-lg)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                        <h2 className="heading-md" style={{ color: 'white', marginBottom: '8px' }}>Send a Message</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '32px' }}>Fill out the form to inquire about product availability.</p>
                        
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', color: 'rgba(255,255,255,0.6)' }}>Full Name</label>
                                <input 
                                    type="text" required placeholder="Your Name"
                                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.03)', color: 'white', outline: 'none' }}
                                />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', color: 'rgba(255,255,255,0.6)' }}>Email Address</label>
                                <input 
                                    type="email" required placeholder="yourname@email.com"
                                    value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.03)', color: 'white', outline: 'none' }}
                                />
                            </div>
                            <div style={{ marginBottom: '32px' }}>
                                <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '8px', color: 'rgba(255,255,255,0.6)' }}>Message</label>
                                <textarea 
                                    rows="4" required placeholder="What are you looking for?"
                                    value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.03)', color: 'white', outline: 'none' }}
                                ></textarea>
                            </div>
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit" disabled={!!status} className="btn" 
                                style={{ 
                                    width: '100%', padding: '16px', borderRadius: '12px', background: 'white', color: 'var(--brand-primary)', 
                                    border: 'none', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'
                                }}
                            >
                                {status ? status : <><Send size={18} /> Send Inquiry</>}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Info Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="heading-md" style={{ color: 'white', marginBottom: '40px' }}>Shop Information</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ width: '54px', height: '54px', background: 'rgba(255,255,255,0.1)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 style={{ color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '4px' }}>Location</h4>
                                    <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>Near Gas Godam, Somnath Puram Road, Bidi Colony Baghraj Ward Sagar (M.P)</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ width: '54px', height: '54px', background: 'rgba(255,255,255,0.1)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px' }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 style={{ color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '4px' }}>Call Us</h4>
                                    <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>9993004008 | 8103726423</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ width: '54px', height: '54px', background: 'rgba(255,255,255,0.1)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px' }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 style={{ color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '4px' }}>Email</h4>
                                    <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>globalsanitaryandhardware@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div 
                            onClick={() => window.open('https://maps.app.goo.gl/dUgpgWuhCNYKxyWa8', '_blank')}
                            style={{ marginTop: '48px', borderRadius: '24px', overflow: 'hidden', height: '280px', background: '#334155', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}
                        >
                             <iframe 
                                title="Shop Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1378968019926!2d78.73935589999999!3d23.813695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978d5d5bb0343fd%3A0x922ee5639e362bb8!2sGlobal%20Sanitary%20And%20Hardware!5e0!3m2!1sen!2sin!4v1775318801603!5m2!1sen!2sin" 
                                width="100%" height="100%" style={{ border:0, pointerEvents: 'none' }} allowFullScreen="" loading="lazy"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
