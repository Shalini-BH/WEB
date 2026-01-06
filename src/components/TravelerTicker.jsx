import React, { useState, useEffect } from 'react';
import { Cloud, MapPin, Coffee, Info } from 'lucide-react';

const TravelerTicker = () => {
    const items = [
        { icon: <Info size={16} />, text: "Bangalore-Mysore Expressway: Travel time 90 mins" },
        { icon: <Cloud size={16} />, text: "Ooty Weather: 18°C, Light Drizzle - Perfect tea weather" },
        { icon: <Coffee size={16} />, text: "Tip: Try 'Kamat Lokaruchi' on the Bangalore-Mysore highway" },
        { icon: <MapPin size={16} />, text: "Coorg: Dubare Elephant Camp booking opens at 9 AM" },
        { icon: <Info size={16} />, text: "Weekend Alert: Book 24hrs early for guaranteed cabins" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <div className="info-section">
            <div className="container">
                <div className="info-pop-container">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="info-pop-item"
                            style={{
                                display: index === currentIndex ? 'flex' : 'none',
                                animationName: 'info-pop',
                                animationDuration: '4s',
                                animationIterationCount: 'infinite'
                            }}
                        >
                            <span style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center' }}>{item.icon}</span>
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TravelerTicker;
