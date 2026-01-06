import { useBooking } from '../../context/BookingContext';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import heroImg from '../../assets/service_airport.png';

const AirportTransfer = () => {
    const { openModal } = useBooking();

    return (
        <div style={{ paddingBottom: '4rem', position: 'relative' }}>
            <Link to="/" className="btn btn-outline" style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10, background: 'rgba(255,255,255,0.8)', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>← Back to Home</Link>
            <SEO
                title="Airport Taxi Services | Reliable Pickup & Drop"
                description="On-time airport transfers with flight tracking. Book reliable airport cabs for pickups and drops in Bangalore, Chennai, and major South Indian cities."
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
                    <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1rem' }}>Airport Transfers</h1>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Never miss a flight again. Punctual, professional, and comfortable airport rides.
                    </p>
                    <button
                        onClick={() => openModal("I need an Airport Transfer")}
                        className="btn btn-primary"
                        style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}
                    >
                        Book Airport Taxi
                    </button>
                </div>
            </section>

            <section className="container section">
                <div className="grid-dynamic">
                    <div className="card-base card-hover">
                        <h3 className="text-h3" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>✈️ Flight Tracking</h3>
                        <p className="text-body-sm" style={{ color: 'var(--color-text-muted)' }}>We monitor your flight schedule to ensure our driver is there when you land, even if your flight is delayed.</p>
                    </div>
                    <div className="card-base card-hover">
                        <h3 className="text-h3" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>🕒 Zero Waiting</h3>
                        <p className="text-body-sm" style={{ color: 'var(--color-text-muted)' }}>Our drivers arrive 15 minutes early. Step out of the terminal and step into your cab.</p>
                    </div>
                    <div className="card-base card-hover">
                        <h3 className="text-h3" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>🏷️ Fixed Pricing</h3>
                        <p className="text-body-sm" style={{ color: 'var(--color-text-muted)' }}>Transparent airport fares inclusive of tolls and parking. No surge pricing ever.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AirportTransfer;
