import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: 'var(--spacing-xl) 0', textAlign: 'center', marginTop: 'auto' }}>
            <div className="container">
                <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Best Service Cabs and Travels</h3>
                <p style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-lg)', opacity: 0.9 }}>
                    "Your Safety and Comfort is our Priority. Travel with the Best."
                </p>

                <div className="flex gap-md" style={{ justifyContent: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <a href="#" style={{ color: 'white' }}><Instagram /></a>
                    <a href="#" style={{ color: 'white' }}><Facebook /></a>
                    <a href="#" style={{ color: 'white' }}><Twitter /></a>
                </div>

                <p>&copy; {new Date().getFullYear()} Best Service Cabs and Travels. All rights reserved.</p>
                <p style={{ fontSize: '0.9rem', marginTop: 'var(--spacing-sm)', opacity: 0.8 }}>Serving 25,000+ happy passengers since 2007.</p>
            </div>
        </footer>
    );
};

export default Footer;
