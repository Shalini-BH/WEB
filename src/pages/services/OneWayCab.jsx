import { useBooking } from '../../context/BookingContext';
import SEO from '../../components/SEO';
import heroImg from '../../assets/service_highway.png';

const OneWayCab = () => {
    const { openModal } = useBooking();

    return (
        <div style={{ paddingBottom: '4rem' }}>
            <SEO
                title="Cheapest One Way Cab Services | Inter-City Taxi"
                description="Book one-way cabs between Bangalore, Mysore, Chennai, and other cities. Pay only for one side. Save up to 40% on travel costs."
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
                    <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1rem' }}>One Way Drops</h1>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Why pay for a return trip when you don't need one? Save big with our one-way fares.
                    </p>
                    <button
                        onClick={() => openModal("I need a One-Way Cab")}
                        className="btn btn-primary"
                        style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}
                    >
                        Book One-Way Cab
                    </button>
                </div>
            </section>

            <section className="container section">
                <h2 className="text-center" style={{ marginBottom: '3rem' }}>Popular One-Way Routes</h2>
                <div className="grid-auto-fit">
                    {[
                        { route: "Bangalore ⇄ Mysore", price: "Starts ₹2,500" },
                        { route: "Bangalore ⇄ Chennai", price: "Starts ₹5,200" },
                        { route: "Chennai ⇄ Pondicherry", price: "Starts ₹3,000" },
                        { route: "Coimbatore ⇄ Ooty", price: "Starts ₹2,200" }
                    ].map((item, i) => (
                        <div key={i} className="glass-card" style={{ textAlign: 'center' }}>
                            <h3 style={{ color: '#34d399' }}>{item.route}</h3>
                            <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{item.price}</p>
                            <button
                                onClick={() => openModal(`I'm interested in One-Way trip: ${item.route}`)}
                                className="btn btn-sm btn-outline"
                                style={{ marginTop: '1rem' }}
                            >
                                Check Availability
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default OneWayCab;
