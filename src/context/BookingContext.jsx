import { createContext, useState, useContext } from 'react';
import { NotificationService } from '../services/NotificationService'; // Ensure this import exists or is handled

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [prefillMessage, setPrefillMessage] = useState("I am interested in booking a trip.");
    const [tripType, setTripType] = useState('general');

    // Lead Capture / Verification State
    const [isVerified, setIsVerified] = useState(false);
    const [isUnlockModalOpen, setIsUnlockModalOpen] = useState(false);

    const openModal = (message = "I am interested in booking a trip.", type = 'general') => {
        setPrefillMessage(message);
        setTripType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setPrefillMessage("I am interested in booking a trip.");
        setTripType('general');
    };

    // Called when user clicks "Unlock Rates"
    const openUnlockModal = () => setIsUnlockModalOpen(true);

    // Called when OTP is successful
    const unlockContent = () => {
        setIsVerified(true);
        setIsUnlockModalOpen(false);
    };

    const saveBooking = (bookingDetails) => {
        const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        const newBooking = {
            id: Date.now(),
            date: new Date().toLocaleString(),
            status: 'New',
            ...bookingDetails
        };
        localStorage.setItem('bookings', JSON.stringify([newBooking, ...existingBookings]));

        // Trigger Automation Simulation
        console.log('--- STARTING AUTOMATION FLOW ---');
        // Dynamic import to avoid circular dependency if service imports context, 
        // but here we just import it directly or assume it exists.
        // Simplified for safety:
        try {
            import('../services/NotificationService').then((module) => {
                if (module.NotificationService) {
                    module.NotificationService.sendAdminNotification(bookingDetails);
                    module.NotificationService.sendAdminWhatsApp(bookingDetails);
                    module.NotificationService.sendCustomerConfirmation(bookingDetails);
                }
            });
        } catch (e) {
            console.error("Notification service failed", e);
        }

        return true;
    };

    return (
        <BookingContext.Provider value={{
            isModalOpen, prefillMessage, tripType, openModal, closeModal, saveBooking,
            isVerified, isUnlockModalOpen, openUnlockModal, unlockContent
        }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => useContext(BookingContext);
