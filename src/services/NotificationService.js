/**
 * NotificationService.js
 * Simulates backend automation for Email and WhatsApp notifications.
 */

export const NotificationService = {
    /**
     * Simulates sending booking details to Admin Dashboard & Email
     * @param {Object} bookingDetails 
     */
    sendAdminNotification: async (bookingDetails) => {
        console.group('🔔 ADMIN NOTIFICATION');
        console.log('To: admin@bestservicecabs.com');
        console.log('Subject: New Booking Request - ' + bookingDetails.tripType);
        console.log('Payload:', bookingDetails);
        console.groupEnd();

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        return true;
    },

    /**
     * Simulates sending a WhatsApp message to Admin
     * In a real app, this would call the WhatsApp Business API.
     * Here we also open a wa.me link for the user to confirm (client-side fallback).
     * @param {Object} bookingDetails 
     */
    sendAdminWhatsApp: (bookingDetails) => {
        const adminPhone = "917892665004"; // Actual Admin number from Contact page
        const text = `New Booking Request:\nName: ${bookingDetails.name}\nPhone: ${bookingDetails.phone}\nType: ${bookingDetails.tripType}\nPickup: ${bookingDetails.pickupLocation}\nDrop: ${bookingDetails.dropLocation || 'N/A'}`;

        console.log('📱 WHATSAPP TRIGGERED:', text);

        // Open WhatsApp Web for the customer to chat directly
        const url = `https://wa.me/${adminPhone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    },

    /**
     * Simulates sending a confirmation to the Customer
     * @param {Object} customerDetails 
     */
    sendCustomerConfirmation: async (customerDetails) => {
        console.group('📩 CUSTOMER CONFIRMATION');
        console.log(`To: ${customerDetails.phone} / ${customerDetails.name}`);
        console.log('Message: Thank you for your request. Our team will contact you shortly to confirm availability.');
        console.groupEnd();
    }
};
