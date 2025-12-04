import { useState, useEffect } from 'react';
import { useBooking } from '../context/BookingContext';

const BookingModal = ({ isOpen, onClose, prefillMessage = "I am interested in booking a trip." }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: prefillMessage
    });

    useEffect(() => {
        setFormData(prev => ({ ...prev, message: prefillMessage }));
    }, [prefillMessage]);

    if (!isOpen) return null;

    const { saveBooking } = useBooking();

    const handleSubmit = (e) => {
        e.preventDefault();
        saveBooking(formData);
        alert('Thank you! Your request has been received. We will contact you shortly.');
        onClose();
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
        }} onClick={onClose}>
            <div style={{
                backgroundColor: 'white',
                padding: 'var(--spacing-xl)',
                borderRadius: 'var(--radius-lg)',
                width: '90%',
                maxWidth: '500px',
                position: 'relative'
            }} onClick={e => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        cursor: 'pointer'
                    }}
                >&times;</button>

                <h2 style={{ marginTop: 0, color: 'var(--color-primary)' }}>Request a Callback</h2>
                <p>Leave your details and we will call you back shortly to confirm your plan.</p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)' }}>Name</label>
                        <input
                            type="text"
                            required
                            style={{ width: '100%', padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)' }}>Phone Number</label>
                        <input
                            type="tel"
                            required
                            style={{ width: '100%', padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: 'var(--spacing-xs)' }}>Message / Plan Details</label>
                        <textarea
                            rows="3"
                            style={{ width: '100%', padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginTop: 'var(--spacing-sm)' }}>
                        Request Callback
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;
