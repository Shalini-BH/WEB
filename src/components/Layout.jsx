import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import BookingModal from './BookingModal';
import TravelerTicker from './TravelerTicker';
import WelcomePopup from './WelcomePopup';
import { useBooking } from '../context/BookingContext';

const Layout = () => {
    const { isModalOpen, closeModal, prefillMessage } = useBooking();

    return (
        <div className="app-layout">
            <Navbar />
            <div style={{ paddingTop: '80px' }}>
                <TravelerTicker />
                <main style={{ minHeight: '100vh' }}>
                    <Outlet />
                </main>
            </div>
            <Footer />
            <WhatsAppButton />
            <BookingModal isOpen={isModalOpen} onClose={closeModal} prefillMessage={prefillMessage} />
            <WelcomePopup />
        </div>
    );
};

export default Layout;
