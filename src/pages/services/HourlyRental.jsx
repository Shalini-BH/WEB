import { useBooking } from '../../context/BookingContext';
import SEO from '../../components/SEO';
import heroImg from '../../assets/service_city.png';

const HourlyRental = () => {
    const { openModal } = useBooking();

    return (
        <div style={{ paddingBottom: '4rem' }}>
            <SEO
                title="Hourly Car Rental & Local Cabs | Full Day Hire"
                description="Rent a car with driver for local shopping, business meetings, or sightseeing. Flexible packages: 4hr/40km, 8hr/80km, 12hr/120km."
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
                    <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1rem' }}>Local Hourly Rentals</h1>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Your personal chauffeur for the day. Perfect for business meetings, shopping, or city tours.
                    </p>
                    <button
                        onClick={() => openModal("I need Hourly Rental")}
                        className="btn btn-primary"
                        style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}
                    >
                        Book for Local Use
                    </button>
                </div>
            </section>

            <section className="container section">
                <div className="grid-auto-fit" style={{ gap: '2rem' }}>
                    <div className="glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
                        <div style={{ background: '#34d399', color: '#111827', padding: '0.25rem 1rem', position: 'absolute', top: 0, right: 0, fontWeight: 'bold' }}>Most Popular</div>
                        <h3>8 Hrs / 80 Kms</h3>
                        <p>Standard full day package. Ideal for office commute or day-out.</p>
                        <button onClick={() => openModal("Book 8hr/80km Package")} className="btn btn-outline" style={{ width: '100%' }}>Select Package</button>
                    </div>
                    <div className="glass-card">
                        <h3>12 Hrs / 120 Kms</h3>
                        <p>Extended day package. Great for sightseeing and multiple stops.</p>
                        <button onClick={() => openModal("Book 12hr/120km Package")} className="btn btn-outline" style={{ width: '100%' }}>Select Package</button>
                    </div>
                    <div className="glass-card">
                        <h3>4 Hrs / 40 Kms</h3>
                        <p>Half day package. Quick errands or short meetings.</p>
                        <button onClick={() => openModal("Book 4hr/40km Package")} className="btn btn-outline" style={{ width: '100%' }}>Select Package</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HourlyRental;
