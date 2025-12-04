import { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [prefillMessage, setPrefillMessage] = useState("I am interested in booking a trip.");

    const openModal = (message = "I am interested in booking a trip.") => {
        setPrefillMessage(message);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setPrefillMessage("I am interested in booking a trip."); // Reset to default
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
        return true;
    };

    return (
        <BookingContext.Provider value={{ isModalOpen, prefillMessage, openModal, closeModal, saveBooking }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => useContext(BookingContext);
