import { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [prefillMessage, setPrefillMessage] = useState("I am interested in booking a trip.");
    const [tripType, setTripType] = useState('general');

    const openModal = (message = "I am interested in booking a trip.", type = 'general') => {
        setPrefillMessage(message);
        setTripType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setPrefillMessage("I am interested in booking a trip."); // Reset to default
        setTripType('general');
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
        import('../services/NotificationService').then(({ NotificationService }) => {
            NotificationService.sendAdminNotification(bookingDetails);
            NotificationService.sendAdminWhatsApp(bookingDetails);
            NotificationService.sendCustomerConfirmation(bookingDetails);
        });

        return true;
    };

    return (
        <BookingContext.Provider value={{ isModalOpen, prefillMessage, tripType, openModal, closeModal, saveBooking }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => useContext(BookingContext);
