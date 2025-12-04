import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialCarousel = () => {
    const reviews = [
        { name: 'Ramesh K.', text: 'Excellent service! The Innova was brand new and the driver was very polite. Highly recommended.', rating: 5 },
        { name: 'Sarah J.', text: 'Booked a Tempo Traveller for our family trip to Coorg. Very comfortable and affordable.', rating: 5 },
        { name: 'Priya M.', text: 'Best prices in the market. Much cheaper than Ola for outstation trips.', rating: 4 },
        { name: 'Anand V.', text: 'Regular customer since 2015. Always on time and very safe driving.', rating: 5 },
        { name: 'Lakshmi S.', text: 'The bus we booked for the wedding was luxurious and clean. Thank you!', rating: 5 },
        { name: 'John D.', text: 'Great experience touring Kerala. The driver acted as a guide too.', rating: 5 }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [reviews.length]);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

    return (
        <div style={{
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto',
            padding: 'var(--spacing-xl) var(--spacing-2xl)',
            backgroundColor: 'var(--color-surface)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-md)',
            textAlign: 'center'
        }}>
            <button
                onClick={prevSlide}
                style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--color-primary)'
                }}
            >
                <ChevronLeft size={32} />
            </button>

            <div style={{ minHeight: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: 'var(--spacing-md)', color: '#FFD700' }}>
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => <Star key={i} size={20} fill="#FFD700" />)}
                </div>
                <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: 'var(--spacing-md)' }}>
                    "{reviews[currentIndex].text}"
                </p>
                <h4 style={{ color: 'var(--color-primary)', margin: 0 }}>- {reviews[currentIndex].name}</h4>
            </div>

            <button
                onClick={nextSlide}
                style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--color-primary)'
                }}
            >
                <ChevronRight size={32} />
            </button>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: 'var(--spacing-lg)' }}>
                {reviews.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            border: 'none',
                            backgroundColor: i === currentIndex ? 'var(--color-primary)' : 'var(--color-border)',
                            cursor: 'pointer'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;
