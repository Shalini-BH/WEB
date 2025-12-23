import { useBooking } from '../../context/BookingContext';
import SEO from '../../components/SEO';
import heroImg from '../../assets/service_airport.png';

const AirportTransfer = () => {
    const { openModal } = useBooking();

    return (
        <div style={{ paddingBottom: '4rem' }}>
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
                <div className="grid-auto-fit" style={{ gap: '2rem' }}>
                    <div className="glass-card">
                        <h3>✈️ Flight Tracking</h3>
                        <p>We monitor your flight schedule to ensure our driver is there when you land, even if your flight is delayed.</p>
                    </div>
                    <div className="glass-card">
                        <h3>🕒 Zero Waiting</h3>
                        <p>Our drivers arrive 15 minutes early. Step out of the terminal and step into your cab.</p>
                    </div>
                    <div className="glass-card">
                        <h3>🏷️ Fixed Pricing</h3>
                        <p>Transparent airport fares inclusive of tolls and parking. No surge pricing ever.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AirportTransfer;
