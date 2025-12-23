import { useRef, useEffect } from 'react';
import BookingForm from './BookingForm';

const BookingModal = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center',
            zIndex: 1000, backdropFilter: 'blur(4px)'
        }} onClick={onClose}>
            <div
                ref={modalRef}
                style={{
                    width: '95%', maxWidth: '550px', position: 'relative',
                    maxHeight: '90vh', overflowY: 'auto', borderRadius: '16px'
                }}
                onClick={e => e.stopPropagation()}
            >
                <div style={{ position: 'relative' }}>
                    <button onClick={onClose} style={{
                        position: 'absolute', top: '1rem', right: '1rem',
                        background: 'rgba(0,0,0,0.1)', border: 'none', borderRadius: '50%', width: '30px', height: '30px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.5rem', cursor: 'pointer', color: '#111827', zIndex: 20
                    }}>&times;</button>

                    <BookingForm onCancel={onClose} />
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
