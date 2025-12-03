import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const DiscountPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000); // Show after 3 seconds

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            zIndex: 2000,
            animation: 'slideIn 0.5s ease-out'
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--radius-lg)',
                maxWidth: '300px',
                width: '100%',
                position: 'relative',
                textAlign: 'center',
                boxShadow: 'var(--shadow-lg)',
                border: '2px solid var(--color-accent)'
            }}>
                <button
                    onClick={() => setIsVisible(false)}
                    style={{
                        position: 'absolute',
                        top: '5px',
                        right: '5px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#666'
                    }}
                >
                    <X size={20} />
                </button>

                <h3 style={{ color: 'var(--color-accent)', marginBottom: 'var(--spacing-xs)', fontSize: '1.2rem' }}>Special Offer!</h3>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>30% OFF</h2>
                <p style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem' }}>
                    On your first booking. <br />
                    <small>*T&C apply.</small>
                </p>

                <a
                    href="https://wa.me/917892665004?text=Hi, I want to claim the 30% discount offer."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ width: '100%', textDecoration: 'none', padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                >
                    Claim Now
                </a>
            </div>
            <style>{`
        @keyframes slideIn {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
        </div>
    );
};

export default DiscountPopup;
