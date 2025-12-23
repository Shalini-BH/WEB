import { useBooking } from '../../context/BookingContext';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import heroImg from '../../assets/hero_south_india_landscape_1764700257274.png'; // Reusing scenic hero image

const RoundTrip = () => {
    const { openModal } = useBooking();

    return (
        <div style={{ paddingBottom: '4rem', position: 'relative' }}>
            <Link to="/" className="btn btn-outline" style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10, background: 'rgba(255,255,255,0.8)', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>← Back to Home</Link>
            <SEO
                title="Outstation Round Trip Cabs | Multi-Day Taxi Packages"
                description="Best outstation cab service for family vacations and weekend getaways. Experienced drivers, verified vehicles, and transparent per-km billing."
            />

            <section style={{
                height: '60vh',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${heroImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center'
            }}>
                <div className="container animate-fade-in-up">
                    <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1rem' }}>Round Trip Outstation</h1>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Discover new places at your own pace. The car stays with you from start to finish.
                    </p>
                    <button
                        onClick={() => openModal("I need a Round Trip Cab")}
                        className="btn btn-primary"
                        style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}
                    >
                        Plan Your Trip
                    </button>
                </div>
            </section>

            <section className="container section">
                <div className="grid-auto-fit" style={{ gap: '2rem' }}>
                    <div className="glass-card">
                        <h3>🚗 Dedicated Cab</h3>
                        <p>The vehicle and chauffeur are at your disposal for the entire duration of the trip.</p>
                    </div>
                    <div className="glass-card">
                        <h3>👨‍✈️ Expert Chauffeurs</h3>
                        <p>Our drivers are guides too. They know the best routes, restaurants, and hidden gems.</p>
                    </div>
                    <div className="glass-card">
                        <h3>🛡️ Safe & Secure</h3>
                        <p>24x7 support and live tracking for your peace of mind while exploring remote locations.</p>
                    </div>
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <h2>Ready to Explore?</h2>
                    <p>We specialized in packages for Coorg, Ooty, Wayanad, and more.</p>
                </div>
            </section>
        </div>
    );
};

export default RoundTrip;
