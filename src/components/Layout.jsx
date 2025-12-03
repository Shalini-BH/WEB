import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import DiscountPopup from './DiscountPopup';

const Layout = () => {
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
                zIndex: 101
            }}>
                📞 Call & Book Now: <a href="tel:+917892665004" style={{ color: 'white', textDecoration: 'underline' }}>+91 7892665004</a>
            </div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <WhatsAppButton />
            <DiscountPopup />
        </div>
    );
};

export default Layout;
