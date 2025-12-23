import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#111827', color: '#f3f4f6', paddingTop: '4rem', paddingBottom: '2rem', marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="container">
                <div className="grid-auto-fit" style={{ gap: '3rem', marginBottom: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>

                    {/* Brand & Contact */}
                    <div>
                        <h3 style={{ marginBottom: '1.5rem', color: '#f3f4f6', fontSize: '1.5rem' }}>Best Service Cabs</h3>
                        <p style={{ opacity: 0.8, marginBottom: '1.5rem', lineHeight: 1.6 }}>
                            Your trusted travel partner for safe, reliable, and premium outstation and local car rentals since 2007.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <div className="flex gap-sm items-center" style={{ opacity: 0.9 }}>
                                <MapPin size={18} color="#34d399" />
                                <span>JP Nagar, Bangalore</span>
                            </div>
                            <div className="flex gap-sm items-center" style={{ opacity: 0.9 }}>
                                <Phone size={18} color="#34d399" />
                                <span>+91 999 999 9999</span>
                            </div>
                            <div className="flex gap-sm items-center" style={{ opacity: 0.9 }}>
                                <Mail size={18} color="#34d399" />
                                <span>booking@bestservicecabs.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem', borderBottom: '2px solid #34d399', display: 'inline-block', paddingBottom: '0.25rem' }}>Our Services</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><Link to="/services/outstation" style={{ color: '#9ca3af', textDecoration: 'none' }} onMouseOver={e => e.target.style.color = '#34d399'} onMouseOut={e => e.target.style.color = '#9ca3af'}>Outstation Round Trip</Link></li>
                            <li><Link to="/services/one-way-cab" style={{ color: '#9ca3af', textDecoration: 'none' }} onMouseOver={e => e.target.style.color = '#34d399'} onMouseOut={e => e.target.style.color = '#9ca3af'}>One Way Drops</Link></li>
                            <li><Link to="/services/airport-transfer" style={{ color: '#9ca3af', textDecoration: 'none' }} onMouseOver={e => e.target.style.color = '#34d399'} onMouseOut={e => e.target.style.color = '#9ca3af'}>Airport Transfers</Link></li>
                            <li><Link to="/services/hourly-rental" style={{ color: '#9ca3af', textDecoration: 'none' }} onMouseOver={e => e.target.style.color = '#34d399'} onMouseOut={e => e.target.style.color = '#9ca3af'}>Local Hourly Rentals</Link></li>
                            <li><Link to="/tours" style={{ color: '#9ca3af', textDecoration: 'none' }} onMouseOver={e => e.target.style.color = '#34d399'} onMouseOut={e => e.target.style.color = '#9ca3af'}>Holiday Packages</Link></li>
                        </ul>
                    </div>

                    {/* Popular Routes */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem', borderBottom: '2px solid #34d399', display: 'inline-block', paddingBottom: '0.25rem' }}>Popular Routes</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><Link to="/services/one-way-cab" style={{ color: '#9ca3af', textDecoration: 'none' }} onMouseOver={e => e.target.style.color = '#34d399'} onMouseOut={e => e.target.style.color = '#9ca3af'}>Bangalore to Mysore</Link></li>
                            <li><Link to="/services/one-way-cab" style={{ color: '#9ca3af', textDecoration: 'none' }} onMouseOver={e => e.target.style.color = '#34d399'} onMouseOut={e => e.target.style.color = '#9ca3af'}>Bangalore to Chennai</Link></li>
                            <li><Link to="/services/one-way-cab" style={{ color: '#9ca3af', textDecoration: 'none' }} onMouseOver={e => e.target.style.color = '#34d399'} onMouseOut={e => e.target.style.color = '#9ca3af'}>Bangalore to Ooty</Link></li>
                            <li><Link to="/services/one-way-cab" style={{ color: '#9ca3af', textDecoration: 'none' }} onMouseOver={e => e.target.style.color = '#34d399'} onMouseOut={e => e.target.style.color = '#9ca3af'}>Bangalore to Coorg</Link></li>
                            <li><Link to="/services/one-way-cab" style={{ color: '#9ca3af', textDecoration: 'none' }} onMouseOver={e => e.target.style.color = '#34d399'} onMouseOut={e => e.target.style.color = '#9ca3af'}>Chennai to Pondicherry</Link></li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div className="flex gap-md">
                        <a href="#" style={{ color: '#f3f4f6', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#34d399'} onMouseOut={e => e.currentTarget.style.color = '#f3f4f6'}><Instagram /></a>
                        <a href="#" style={{ color: '#f3f4f6', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#34d399'} onMouseOut={e => e.currentTarget.style.color = '#f3f4f6'}><Facebook /></a>
                        <a href="#" style={{ color: '#f3f4f6', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#34d399'} onMouseOut={e => e.currentTarget.style.color = '#f3f4f6'}><Twitter /></a>
                    </div>
                    <div className="text-center">
                        <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} Best Service Cabs and Travels. All rights reserved.</p>
                        <p style={{ color: '#6b7280', fontSize: '0.8rem', marginTop: '0.5rem' }}>Serving happy customers across South India.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
