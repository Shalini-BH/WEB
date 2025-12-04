import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useBooking } from '../context/BookingContext';
import TestimonialCarousel from '../components/TestimonialCarousel';
import DestinationMap from '../components/DestinationMap';
import heroImg from '../assets/hero_south_india_landscape_1764700257274.png';
import mysoreImg from '../assets/dest_mysore_palace_1764719793546.png';
import goaImg from '../assets/dest_goa_beach_1764719811518.png';
import tirupatiImg from '../assets/dest_tirupati_temple_1764719828916.png';
import bangaloreImg from '../assets/dest_bangalore_vidhana_soudha_1764719844637.png';
import chennaiImg from '../assets/dest_chennai_marina_1764719899053.png';
import coorgImg from '../assets/dest_coorg.png';
import hampiImg from '../assets/dest_hampi.png';
import chikmagalurImg from '../assets/dest_chikmagalur.jpg';
import kukkeImg from '../assets/dest_kukke.jpg';
import ootyImg from '../assets/dest_ooty.jpg';
import kodaikanalImg from '../assets/dest_kodaikanal.jpg';
import munnarImg from '../assets/dest_munnar.jpg';
import alleppeyImg from '../assets/dest_alleppey.jpg';
import wayanadImg from '../assets/dest_wayanad.JPG';
import thekkadyImg from '../assets/dest_thekkady.jpg';
import varkalaImg from '../assets/dest_varkala.jpg';
import maduraiImg from '../assets/dest_madurai.jpg';
import rameswaramImg from '../assets/dest_rameswaram.jpg';
import kanyakumariImg from '../assets/dest_kanyakumari.jpg';
import mahabalipuramImg from '../assets/dest_mahabalipuram.jpg';
import kochiImg from '../assets/dest_kochi.jpg';
import hyderabadImg from '../assets/dest_hyderabad.jpg';
import pondicherryImg from '../assets/dest_pondicherry.jpg';
import arakuImg from '../assets/dest_araku.jpg';
import hosurImg from '../assets/dest_hosur.jpg';
import gokarnaImg from '../assets/dest_gokarna.JPG';

const Home = () => {
    const { openModal } = useBooking();
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
                        <button
                            onClick={() => openModal("I want to book a ride. Please contact me.")}
                            className="btn btn-accent"
                            style={{ backgroundColor: 'var(--color-accent)', color: 'white', border: 'none', cursor: 'pointer', fontSize: '1rem' }}
                        >
                            Book Your Ride
                        </button>
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
                        { name: 'Coorg', img: coorgImg, desc: 'Coffee & Hills' },
                        { name: 'Hampi', img: hampiImg, desc: 'Ancient Ruins' },
                        { name: 'Gokarna', img: gokarnaImg, desc: 'Beaches & Temples' },
                        { name: 'Chikmagalur', img: chikmagalurImg, desc: 'Nature & Trekking' },
                        { name: 'Kukke Subramanya', img: kukkeImg, desc: 'Pilgrimage' },

                        // Tamil Nadu
                        { name: 'Chennai', img: chennaiImg, desc: 'Marina Beach' },
                        { name: 'Madurai', img: maduraiImg, desc: 'Meenakshi Temple' },
                        { name: 'Ooty', img: ootyImg, desc: 'Hill Station' },
                        { name: 'Kodaikanal', img: kodaikanalImg, desc: 'Princess of Hills' },
                        { name: 'Rameswaram', img: rameswaramImg, desc: 'Holy Island' },
                        { name: 'Kanyakumari', img: kanyakumariImg, desc: 'Southern Tip' },
                        { name: 'Mahabalipuram', img: mahabalipuramImg, desc: 'Rock Cut Temples' },

                        // Kerala
                        { name: 'Munnar', img: munnarImg, desc: 'Tea Gardens' },
                        { name: 'Alleppey', img: alleppeyImg, desc: 'Backwaters' },
                        { name: 'Kochi', img: kochiImg, desc: 'Queen of Arabian Sea' },
                        { name: 'Wayanad', img: wayanadImg, desc: 'Nature & Spices' },
                        { name: 'Thekkady', img: thekkadyImg, desc: 'Wildlife' },
                        { name: 'Varkala', img: varkalaImg, desc: 'Cliffs & Beaches' },

                        // Others
                        { name: 'Goa', img: goaImg, desc: 'Party & Beaches' },
                        { name: 'Tirupati', img: tirupatiImg, desc: 'Lord Venkateswara' },
                        { name: 'Hyderabad', img: hyderabadImg, desc: 'City of Pearls' },
                        { name: 'Pondicherry', img: pondicherryImg, desc: 'French Colony' },
                        { name: 'Araku Valley', img: arakuImg, desc: 'Scenic Valley' },
                        { name: 'Hosur', img: hosurImg, desc: 'Industrial Hub' },

                    ].map((dest) => (
                        <div
                            key={dest.name}
                            style={{
                                flex: '1 1 250px',
                                position: 'relative',
                                borderRadius: 'var(--radius-md)',
                                overflow: 'hidden',
                                height: '250px',
                                cursor: 'pointer',
                                // boxShadow: 'var(--shadow-md)',
                                textColor: 'white',
                                transition: 'transform 0.2s'
                            }}
                            onClick={() => {
                                openModal(`I am interested in a trip to ${dest.name}. Please provide details.`);
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <img src={dest.img} alt={dest.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                background: 'linear-gradient(to top, rgba(50, 47, 47, 0.95) 0%, rgba(44, 40, 40, 0.7) 50%, transparent 100%)',
                                color: 'white',
                                padding: 'var(--spacing-lg)',
                                textAlign: 'left'
                            }}>
                                <h3 style={{
                                    margin: 0,
                                    fontSize: '1.75rem',
                                    fontWeight: '800',
                                    textColor: 'white',
                                    textShadow: '2px 2px 4px rgba(250, 237, 237, 0.9)',
                                    letterSpacing: '0.5px'
                                }}>
                                    {dest.name}
                                </h3>
                                <p style={{
                                    margin: 'var(--spacing-xs) 0 0 0',
                                    fontSize: '1rem',
                                    fontWeight: '500',
                                    opacity: 0.9,
                                    // textShadow: '1px 1px 2px rgba(255, 250, 250, 0.8)'
                                }}>
                                    {dest.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Destination Map */}
            <section className="section container">
                <h2 className="text-center">Explore Our Destinations</h2>
                <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
                    We cover all major tourist spots in South India.
                </p>
                <DestinationMap />
            </section>

            {/* Customer Reviews */}
            <section className="section container">
                <h2 className="text-center">What Our Customers Say</h2>
                <div style={{ marginTop: 'var(--spacing-xl)' }}>
                    <TestimonialCarousel />
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
