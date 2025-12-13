import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#111827', color: '#f3f4f6', padding: 'var(--spacing-xl) 0', textAlign: 'center', marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="container">
                <h3 style={{ marginBottom: 'var(--spacing-md)', color: '#f3f4f6' }}>Best Service Cabs and Travels</h3>
                <p style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-lg)', opacity: 0.9, color: '#e5e7eb' }}>
                    "Your Safety and Comfort is our Priority. Travel with the Best."
                </p>

                <div className="flex gap-md" style={{ justifyContent: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <a href="#" style={{ color: '#f3f4f6', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#34d399'} onMouseOut={e => e.currentTarget.style.color = '#f3f4f6'}><Instagram /></a>
                    <a href="#" style={{ color: '#f3f4f6', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#34d399'} onMouseOut={e => e.currentTarget.style.color = '#f3f4f6'}><Facebook /></a>
                    <a href="#" style={{ color: '#f3f4f6', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#34d399'} onMouseOut={e => e.currentTarget.style.color = '#f3f4f6'}><Twitter /></a>
                </div>

                <p style={{ color: '#9ca3af' }}>&copy; {new Date().getFullYear()} Best Service Cabs and Travels. All rights reserved.</p>
                <p style={{ fontSize: '0.9rem', marginTop: 'var(--spacing-sm)', color: '#6b7280' }}>Serving 25,000+ happy passengers since 2007.</p>
            </div>
        </footer>
    );
};

export default Footer;
