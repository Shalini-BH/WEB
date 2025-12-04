import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import BookingModal from './BookingModal';
import WelcomePopup from './WelcomePopup';
import { useBooking } from '../context/BookingContext';

const Layout = () => {
    const { isModalOpen, closeModal, prefillMessage, openModal } = useBooking();

    return (
        <div className="app-layout">
            <div style={{
                backgroundColor: 'var(--color-accent)',
                color: 'white',
                textAlign: 'center',
                padding: 'var(--spacing-xs)',
                fontWeight: 'bold',
                position: 'sticky',
                top: 0,
                zIndex: 101,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 'var(--spacing-md)'
            }}>
                <span>📞 Call & Book Now: <a href="tel:+917892665004" style={{ color: 'white', textDecoration: 'underline' }}>+91 7892665004</a></span>
                <button
                    onClick={() => openModal()}
                    style={{
                        backgroundColor: 'white',
                        color: 'var(--color-accent)',
                        border: 'none',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: 'bold'
                    }}
                >
                    Request Callback
                </button>
            </div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <WhatsAppButton />
            <BookingModal isOpen={isModalOpen} onClose={closeModal} prefillMessage={prefillMessage} />
            <WelcomePopup />
        </div>
    );
};

export default Layout;
