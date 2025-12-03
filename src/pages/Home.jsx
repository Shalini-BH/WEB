import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import heroImg from '../assets/hero_south_india_landscape_1764700257274.png';
import mysoreImg from '../assets/dest_mysore_palace_1764719793546.png';
import goaImg from '../assets/dest_goa_beach_1764719811518.png';
import tirupatiImg from '../assets/dest_tirupati_temple_1764719828916.png';
import bangaloreImg from '../assets/dest_bangalore_vidhana_soudha_1764719844637.png';
import chennaiImg from '../assets/dest_chennai_marina_1764719899053.png';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Best Service Cabs and Travels | South India Tours</title>
                <meta name="description" content="Founded in 2007, we provide premium car rentals, buses, and tour packages. Cheaper than Ola/Uber with the best customer experience." />
            </Helmet>
            {/* Hero Section */}
            <section className="section" style={{
                backgroundImage: `linear-gradient(rgba(0, 106, 78, 0.8), rgba(0, 106, 78, 0.8)), url(${heroImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                padding: 'var(--spacing-2xl) 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: 'var(--spacing-lg)', color: 'white' }}>
                        Best Service Cabs and Travels
                    </h1>
                    <p style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-xl)', maxWidth: '800px', margin: '0 auto var(--spacing-xl)' }}>
                        Serving over 25,000+ happy passengers since 2007. <br />
                        <strong>Better rates than Ola/Uber. Premium comfort guaranteed.</strong>
                    </p>
                    <div className="flex gap-md justify-center" style={{ flexWrap: 'wrap' }}>
                        <Link to="/vehicles" className="btn btn-accent" style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}>
                            Book Your Ride
                        </Link>
                        <Link to="/tours" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
                            View Tour Packages
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Services */}
            <section className="section container">
                <h2 className="text-center">Our Services</h2>
                <div className="flex gap-md" style={{ flexWrap: 'wrap', justifyContent: 'center', marginTop: 'var(--spacing-xl)' }}>
                    {['Car Rentals', '12+1 Tempo Traveller', 'Tour Packages', 'Group Tours'].map((service) => (
                        <div key={service} style={{
                            padding: 'var(--spacing-lg)',
                            border: '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-md)',
                            textAlign: 'center',
                            flex: '1 1 250px'
                        }}>
                            <h3>{service}</h3>
                            <p>Professional service for your travel needs.</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="section" style={{ backgroundColor: 'var(--color-background)' }}>
                <div className="container text-center">
                    <h2>Why Choose Us?</h2>
                    <div className="flex gap-md" style={{ flexWrap: 'wrap', justifyContent: 'center', marginTop: 'var(--spacing-xl)' }}>
                        {['Since 2007', '25,000+ Passengers', '10,000+ Vehicles', 'Cheaper than Apps'].map((feature) => (
                            <div key={feature} style={{ flex: '1 1 200px' }}>
                                <h4 style={{ color: 'var(--color-primary)' }}>{feature}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Famous Destinations */}
            <section className="section container">
                <h2 className="text-center">Popular Destinations</h2>
                <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>Click on any destination to book your trip!</p>
                <div className="flex gap-md" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                    {[
                        // Karnataka
                        { name: 'Mysore', img: mysoreImg, desc: 'Palace & Heritage' },
                        { name: 'Bangalore', img: bangaloreImg, desc: 'Garden City' },
                        { name: 'Coorg', img: heroImg, desc: 'Coffee & Hills' },
                        { name: 'Hampi', img: heroImg, desc: 'Ancient Ruins' },
                        { name: 'Gokarna', img: goaImg, desc: 'Beaches & Temples' },
                        { name: 'Chikmagalur', img: heroImg, desc: 'Nature & Trekking' },
                        { name: 'Kukke Subramanya', img: mysoreImg, desc: 'Pilgrimage' },

                        // Tamil Nadu
                        { name: 'Chennai', img: chennaiImg, desc: 'Marina Beach' },
                        { name: 'Madurai', img: tirupatiImg, desc: 'Meenakshi Temple' },
                        { name: 'Ooty', img: heroImg, desc: 'Hill Station' },
                        { name: 'Kodaikanal', img: heroImg, desc: 'Princess of Hills' },
                        { name: 'Rameswaram', img: tirupatiImg, desc: 'Holy Island' },
                        { name: 'Kanyakumari', img: chennaiImg, desc: 'Southern Tip' },
                        { name: 'Mahabalipuram', img: chennaiImg, desc: 'Rock Cut Temples' },

                        // Kerala
                        { name: 'Munnar', img: heroImg, desc: 'Tea Gardens' },
                        { name: 'Alleppey', img: heroImg, desc: 'Backwaters' },
                        { name: 'Kochi', img: chennaiImg, desc: 'Queen of Arabian Sea' },
                        { name: 'Wayanad', img: heroImg, desc: 'Nature & Spices' },
                        { name: 'Thekkady', img: heroImg, desc: 'Wildlife' },
                        { name: 'Varkala', img: goaImg, desc: 'Cliffs & Beaches' },

                        // Others
                        { name: 'Goa', img: goaImg, desc: 'Party & Beaches' },
                        { name: 'Tirupati', img: tirupatiImg, desc: 'Lord Venkateswara' },
                        { name: 'Hyderabad', img: bangaloreImg, desc: 'City of Pearls' },
                        { name: 'Pondicherry', img: chennaiImg, desc: 'French Colony' },
                        { name: 'Araku Valley', img: heroImg, desc: 'Scenic Valley' },
                        { name: 'Hosur', img: bangaloreImg, desc: 'Industrial Hub' },

                    ].map((dest) => (
                        <div
                            key={dest.name}
                            style={{
                                flex: '1 1 200px',
                                position: 'relative',
                                borderRadius: 'var(--radius-md)',
                                overflow: 'hidden',
                                height: '180px',
                                cursor: 'pointer',
                                boxShadow: 'var(--shadow-md)',
                                transition: 'transform 0.2s'
                            }}
                            onClick={() => {
                                if (confirm(`Call to book a trip to ${dest.name}?`)) {
                                    window.location.href = 'tel:+917892665004';
                                }
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <img src={dest.img} alt={dest.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                color: 'white',
                                padding: 'var(--spacing-md)',
                                textAlign: 'center'
                            }}>
                                <h3 style={{
                                    margin: 0,
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                                    letterSpacing: '1px'
                                }}>
                                    {dest.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Customer Reviews */}
            <section className="section container">
                <h2 className="text-center">What Our Customers Say</h2>
                <div className="flex gap-md" style={{ flexWrap: 'wrap', justifyContent: 'center', marginTop: 'var(--spacing-xl)' }}>
                    {[
                        { name: 'Ramesh K.', text: 'Excellent service! The Innova was brand new and the driver was very polite. Highly recommended.' },
                        { name: 'Sarah J.', text: 'Booked a Tempo Traveller for our family trip to Coorg. Very comfortable and affordable.' },
                        { name: 'Priya M.', text: 'Best prices in the market. Much cheaper than Ola for outstation trips.' },
                        { name: 'Anand V.', text: 'Regular customer since 2015. Always on time and very safe driving.' },
                        { name: 'Lakshmi S.', text: 'The bus we booked for the wedding was luxurious and clean. Thank you!' },
                        { name: 'John D.', text: 'Great experience touring Kerala. The driver acted as a guide too.' }
                    ].map((review, i) => (
                        <div key={i} style={{
                            padding: 'var(--spacing-lg)',
                            border: '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-md)',
                            flex: '1 1 300px',
                            backgroundColor: 'white',
                            boxShadow: 'var(--shadow-sm)'
                        }}>
                            <p style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-md)' }}>"{review.text}"</p>
                            <strong>- {review.name}</strong>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section container text-center">
                <div style={{
                    backgroundColor: 'var(--color-secondary-light)',
                    padding: 'var(--spacing-xl)',
                    borderRadius: 'var(--radius-lg)',
                    color: 'white'
                }}>
                    <h2>Ready to Plan Your Trip?</h2>
                    <p style={{ fontSize: '1.2rem' }}>Call us for the best price quotes and custom itineraries.</p>
                    <Link to="/contact" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-secondary)', marginTop: 'var(--spacing-md)' }}>
                        Contact Support
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
