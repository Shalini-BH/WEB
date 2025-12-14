import { MessageCircle } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const WhatsAppButton = () => {
    const { openModal } = useBooking();

    return (
        <button
            onClick={() => openModal("I would like to enquire about a booking.")}
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                backgroundColor: '#2563eb', // Changed to professional blue
                color: 'white',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                zIndex: 1000,
                transition: 'transform 0.2s ease, background-color 0.2s',
                border: 'none',
                cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.backgroundColor = '#1d4ed8';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = '#2563eb';
            }}
            aria-label="Request Callback"
        >
            <MessageCircle size={32} />
        </button>
    );
};

export default WhatsAppButton;
