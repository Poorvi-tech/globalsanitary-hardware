import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Phone, ExternalLink, X, HelpCircle, CheckCircle2 } from 'lucide-react';
import { products, arrivalProducts, productCategories } from '../data/products';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [visibleCount, setVisibleCount] = useState(6);

    // Reset visible count when category or search changes
    useEffect(() => {
        setVisibleCount(6);
    }, [activeCategory, searchTerm]);

    // Filter logic
    const filteredProducts = useMemo(() => {
        let result = products;
        if (activeCategory !== 'all') {
            result = result.filter(p => p.category === activeCategory);
        }
        if (searchTerm) {
            result = result.filter(p => 
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.brand.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        return result;
    }, [activeCategory, searchTerm]);

    // Check if an item is "New" (less than 7 days old)
    const isNewItem = (arrivalDate) => {
        if (!arrivalDate) return false;
        const arrival = new Date(arrivalDate);
        const today = new Date();
        const diffInDays = (today - arrival) / (1000 * 60 * 60 * 24);
        return diffInDays <= 7;
    };

    // Calculate discount percentage
    const getDiscount = (price, marketPrice) => {
        const p = parseFloat(price.replace(/,/g, ''));
        const m = parseFloat(marketPrice.replace(/,/g, ''));
        if (!p || !m) return null;
        return Math.round(((m - p) / m) * 100);
    };

    const handleWhatsAppEnquiry = (product) => {
        const message = `Hi! I'm interested in the ${product.name} (${product.brand}). Price: ₹${product.price}. Please share more details.`;
        const whatsappUrl = `https://wa.me/919993004008?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="products" className="section-padding" style={{ background: '#f8fafc' }}>
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center" 
                    style={{ marginBottom: '60px' }}
                >
                    <h2 className="heading-md">Our Premium Range</h2>
                    <p className="text-muted">High-quality materials for every plumbing and hardware need.</p>
                </motion.div>

                {/* Search & Filter Bar */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    style={{ marginBottom: '48px' }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
                        {/* Search Input */}
                        <div style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>
                            <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                            <input 
                                type="text"
                                placeholder="Search by name or brand..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    width: '100%', padding: '14px 14px 14px 50px', borderRadius: '12px',
                                    border: '1px solid #e2e8f0', background: 'white', fontSize: '1rem',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', outline: 'none',
                                    transition: 'border-color 0.2s'
                                }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                            />
                        </div>

                        {/* Category Tabs */}
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
                            {productCategories.map(cat => (
                                <button 
                                    key={cat.id} 
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`btn ${activeCategory === cat.id ? 'btn-primary' : 'btn-outline'}`}
                                    style={{ padding: '10px 24px', borderRadius: '99px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* New Arrivals Section */}
                {!searchTerm && activeCategory === 'all' && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: '60px' }}
                    >
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '32px' }}>
                            {arrivalProducts.map(item => (
                                isNewItem(item.arrivalDate) && (
                                    <motion.div 
                                        key={item.id} 
                                        layout
                                        whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                                        className="product-card-new" 
                                        style={{
                                            background: '#fff', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--brand-accent)', position: 'relative', cursor: 'zoom-in'
                                        }}
                                    >
                                        <div onClick={() => setSelectedProduct({ ...item, folder: 'arrivalproduct' })} style={{ height: '230px', background: '#fff', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px' }}>
                                            <img src={`/arrivalproduct/${item.image || 'placeholder.jpg'}`} alt={item.name} 
                                                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                                onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=400'}
                                            />
                                            <span style={{ position: 'absolute', top: '12px', right: '12px', background: '#10B981', color: 'white', padding: '6px 12px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800 }}>
                                                NEW ARRIVAL
                                            </span>
                                            {getDiscount(item.price, item.marketPrice) && (
                                                <span style={{ position: 'absolute', top: '12px', left: '12px', background: '#f43f5e', color: 'white', padding: '6px 12px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800 }}>
                                                    {getDiscount(item.price, item.marketPrice)}% OFF
                                                </span>
                                            )}
                                        </div>
                                        <div style={{ padding: '24px' }}>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '8px', textTransform: 'uppercase', fontWeight: 600 }}>{item.brand}</p>
                                            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', fontWeight: 700, color: '#0f172a', height: '1.5em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</h3>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--brand-primary)' }}>₹{item.price}</span>
                                                    <span style={{ fontSize: '0.95rem', color: '#94a3b8', textDecoration: 'line-through' }}>₹{item.marketPrice}</span>
                                                </div>
                                                <button 
                                                    onClick={(e) => { e.stopPropagation(); handleWhatsAppEnquiry(item); }}
                                                    style={{ background: '#25D366', color: 'white', border: 'none', borderRadius: '8px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                                    title="Enquire on WhatsApp"
                                                >
                                                    <Phone size={18} fill="currentColor" />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Main Catalog Grid */}
                <motion.div 
                    layout
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '32px' }}
                >
                    <AnimatePresence>
                        {filteredProducts.slice(0, visibleCount).map(item => (
                            <motion.div 
                                key={item.id} 
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                                style={{
                                    background: '#fff', borderRadius: 'var(--radius-md)', overflow: 'hidden', 
                                    border: '1px solid #e2e8f0', cursor: 'zoom-in', position: 'relative'
                                }}
                            >
                                <div onClick={() => setSelectedProduct({ ...item, folder: 'featureproduct' })} style={{ height: '230px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px', borderBottom: '1px solid #f1f5f9' }}>
                                    <img src={`/featureproduct/${item.image || 'placeholder.jpg'}`} alt={item.name} 
                                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                        onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1620626011761-9963d7521476?auto=format&fit=crop&q=80&w=400'}
                                    />
                                    {getDiscount(item.price, item.marketPrice) && (
                                        <span style={{ position: 'absolute', top: '12px', left: '12px', background: '#f43f5e', color: 'white', padding: '6px 12px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800 }}>
                                            {getDiscount(item.price, item.marketPrice)}% OFF
                                        </span>
                                    )}
                                </div>
                                <div style={{ padding: '24px' }}>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '8px', textTransform: 'uppercase', fontWeight: 600 }}>{item.brand || 'Premium Quality'}</p>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', fontWeight: 700, color: '#0f172a', height: '1.5em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--brand-primary)' }}>₹{item.price}</span>
                                            <span style={{ fontSize: '0.95rem', color: '#94a3b8', textDecoration: 'line-through' }}>₹{item.marketPrice}</span>
                                        </div>
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); handleWhatsAppEnquiry(item); }}
                                            style={{ background: '#25D366', color: 'white', border: 'none', borderRadius: '8px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                            title="Enquire on WhatsApp"
                                        >
                                            <Phone size={18} fill="currentColor" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                
                {/* Load More Button */}
                {filteredProducts.length > visibleCount && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ textAlign: 'center', marginTop: '48px' }}
                    >
                        <button 
                            onClick={() => setVisibleCount(prev => prev + 6)}
                            className="btn btn-outline"
                            style={{ 
                                padding: '14px 40px', 
                                borderRadius: '14px', 
                                display: 'inline-flex', 
                                alignItems: 'center', 
                                gap: '10px',
                                fontSize: '1rem',
                                border: '2px solid var(--brand-accent)',
                                color: 'var(--brand-accent)',
                                background: 'transparent'
                            }}
                        >
                            <span>Show More Products</span>
                            <motion.div
                                animate={{ y: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m6 9 6 6 6-6"/>
                                </svg>
                            </motion.div>
                        </button>
                        <p style={{ marginTop: '12px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            Showing {Math.min(visibleCount, filteredProducts.length)} of {filteredProducts.length} products
                        </p>
                    </motion.div>
                )}

                {filteredProducts.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ textAlign: 'center', padding: '80px 0', color: '#64748b' }}
                    >
                        <HelpCircle size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
                        <h3>No products found match your search.</h3>
                        <p>Try different keywords or categories.</p>
                    </motion.div>
                )}
            </div>

            {/* Premium Lightbox Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProduct(null)}
                        style={{
                            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                            backgroundColor: 'rgba(2, 6, 23, 0.9)',
                            backdropFilter: 'blur(12px)',
                            zIndex: 2000,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}
                    >
                        <motion.button 
                            initial={{ scale: 0, rotate: -90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={() => setSelectedProduct(null)}
                            style={{
                                position: 'absolute', top: '32px', right: '32px',
                                background: 'white', border: 'none', borderRadius: '50%',
                                width: '48px', height: '48px', cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.3)', zIndex: 2002
                            }}
                        >
                            <X size={24} color="#0f172a" strokeWidth={3} />
                        </motion.button>
                        
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                maxWidth: '900px', width: '95%',
                                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '40px', alignItems: 'center', padding: '20px'
                            }}
                        >
                            <div style={{
                                padding: '20px', background: 'white', borderRadius: '24px',
                                boxShadow: '0 30px 60px -12px rgba(0,0,0,0.5)',
                                border: '12px solid #fff', position: 'relative',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                <img 
                                    src={`/${selectedProduct.folder}/${selectedProduct.image || 'placeholder.jpg'}`} 
                                    alt={selectedProduct.name}
                                    style={{ maxWidth: '100%', maxHeight: '60vh', objectFit: 'contain', borderRadius: '8px' }}
                                />
                                {getDiscount(selectedProduct.price, selectedProduct.marketPrice) && (
                                    <div style={{ position: 'absolute', top: '-15px', left: '-15px', background: '#f43f5e', color: 'white', padding: '10px 20px', borderRadius: '12px', fontWeight: 800, fontSize: '1.1rem', boxShadow: '0 10px 20px rgba(244, 63, 94, 0.4)' }}>
                                        {getDiscount(selectedProduct.price, selectedProduct.marketPrice)}% OFF
                                    </div>
                                )}
                            </div>

                            <div style={{ color: 'white' }}>
                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                                    <p style={{ color: 'var(--brand-accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '12px' }}>{selectedProduct.brand}</p>
                                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '24px', lineHeight: 1.1, color: '#fff' }}>{selectedProduct.name}</h2>
                                    
                                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '16px', marginBottom: '32px' }}>
                                        <span style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}>₹{selectedProduct.price}</span>
                                        <span style={{ fontSize: '1.5rem', color: '#94a3b8', textDecoration: 'line-through' }}>₹{selectedProduct.marketPrice}</span>
                                    </div>

                                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '32px' }}>
                                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle2 size={18} color="#10B981" /> Authorized Brand Product</li>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle2 size={18} color="#10B981" /> High Durability Material</li>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><CheckCircle2 size={18} color="#10B981" /> Best Price Guarantee</li>
                                        </ul>
                                    </div>

                                    <motion.button 
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleWhatsAppEnquiry(selectedProduct)}
                                        style={{ 
                                            width: '100%', padding: '18px', background: '#25D366', color: 'white', border: 'none', 
                                            borderRadius: '16px', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
                                            boxShadow: '0 10px 20px rgba(37, 211, 102, 0.3)'
                                        }}
                                    >
                                        <Phone size={24} fill="currentColor" />
                                        Enquire on WhatsApp
                                    </motion.button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Products;
