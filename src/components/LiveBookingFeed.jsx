import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

const bookings = [
    { location: "Indiranagar", dest: "Ooty", type: "Round Trip", car: "Innova Crysta" },
    { location: "Whitefield", dest: "Airport KIAL", type: "Drop", car: "Sedan" },
    { location: "Jayanagar", dest: "Mysore", type: "One Way", car: "Etios" },
    { location: "Koramangala", dest: "Coorg", type: "Round Trip", car: "Tempo Traveller" },
    { location: "HSR Layout", dest: "Nandi Hills", type: "Hourly", car: "Hatchback" },
];

const LiveBookingFeed = () => {
    const [current, setCurrent] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Initial delay
        const initTimer = setTimeout(() => setVisible(true), 3000);

        // Cycle every 8 seconds
        const cycleTimer = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % bookings.length);
                setVisible(true);
            }, 1000); // Wait for exit animation
        }, 8000);

        return () => {
            clearTimeout(initTimer);
            clearInterval(cycleTimer);
        };
    }, []);

    const booking = bookings[current];

    return (
        <div style={{
            position: 'fixed',
            bottom: '100px',
            right: '20px',
            zIndex: 90,
            transform: visible ? 'translateY(0)' : 'translateY(100px)',
            opacity: visible ? 1 : 0,
            transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}>
            <div className="glass-panel" style={{
                padding: '12px 20px',
                borderRadius: '50px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)'
            }}>
                <div style={{
                    background: '#ecfdf5',
                    padding: '8px',
                    borderRadius: '50%'
                }}>
                    <MapPin size={20} color="#059669" />
                </div>
                <div>
                    <p style={{ fontSize: '0.8rem', color: '#6b7280', margin: 0 }}>Just Booked</p>
                    <p style={{ fontSize: '0.9rem', fontWeight: '600', color: '#111827', margin: 0 }}>
                        From {booking.location} to {booking.dest}
                    </p>
                    <p style={{ fontSize: '0.75rem', color: '#059669', margin: 0 }}>{booking.car}</p>
                </div>
            </div>
        </div>
    );
};

export default LiveBookingFeed;
