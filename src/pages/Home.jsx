import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import TestimonialCarousel from '../components/TestimonialCarousel';
import DestinationMap from '../components/DestinationMap';
import SEO from '../components/SEO';
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
        <div style={{ paddingBottom: '4rem' }}>
            <SEO
                title="Premium South India Tours & Travels"
                description="Experience the beauty of South India with Best Service Cabs. Luxury cars, expert drivers, and custom tour packages since 2007."
            />

            {/* Hero Section */}
            <section style={{
                height: '90vh',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
                position: 'relative'
            }}>
                <div className="container animate-fade-in-up">
                    <span style={{
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        backdropFilter: 'blur(5px)'
                    }}>Welcome to South India</span>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 5vw, 5rem)',
                        marginTop: '1.5rem',
                        marginBottom: '1rem',
                        lineHeight: 1.1,
                        textShadow: '0 4px 10px rgba(0,0,0,0.3)'
                    }}>
                        Discover the <span style={{ color: '#34d399' }}>Extraordinary</span>
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        maxWidth: '700px',
                        margin: '0 auto 2.5rem',
                        opacity: 0.9,
                        color: '#f3f4f6'
                    }}>
                        Your journey begins with us. Premium vehicles, curated experiences, and memories that last a lifetime.
                    </p>
                    <div className="flex gap-md justify-center" style={{ flexWrap: 'wrap' }}>
                        <button
                            onClick={() => openModal("I want to book a ride for my upcoming trip.")}
                            className="btn btn-primary"
                            style={{
                                padding: '1rem 2.5rem',
                                fontSize: '1.1rem',
                                boxShadow: '0 10px 25px -5px rgba(5, 150, 105, 0.5)'
                            }}
                        >
                            Start Your Journey
                        </button>
                        <Link to="/tours" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                            View Packages
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem', display: 'inline-block' }}>World-Class Services</h2>
                    <p>Designed for your comfort and convenience</p>
                </div>

                <div className="grid-auto-fit">
                    {[
                        { title: 'Luxury Fleet', desc: 'From Sedans to SUVs, travel in style and comfort.', icon: '🚗' },
                        { title: 'Group Travel', desc: ' Spacious Tempo Travellers for family & friends.', icon: '🚐' },
                        { title: 'Custom Tours', desc: 'Tailor-made itineraries just for you.', icon: '🗺️' },
                        { title: '24/7 Support', desc: 'We are here for you, anytime, anywhere.', icon: '🎧' }
                    ].map((service, index) => (
                        <div key={index} className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                            <h3 style={{ fontSize: '1.25rem' }}>{service.title}</h3>
                            <p style={{ margin: 0, opacity: 0.8 }}>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section" style={{ backgroundColor: '#111827', color: 'white' }}>
                <div className="container">
                    <div className="flex flex-col items-center text-center">
                        <h2 style={{ color: 'white' }}>Why Travelers Trust Us</h2>
                        <div className="grid-auto-fit" style={{ width: '100%', marginTop: '3rem', gap: '3rem' }}>
                            {[
                                { number: '15+', label: 'Years Experience' },
                                { number: '25k+', label: 'Happy Travelers' },
                                { number: '10k+', label: 'Successful Trips' },
                                { number: '100%', label: 'Safety Record' }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div style={{ fontSize: '3.5rem', fontWeight: '800', color: '#34d399', lineHeight: 1 }}>{stat.number}</div>
                                    <div style={{ fontSize: '1.1rem', marginTop: '0.5rem', opacity: 0.8 }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery / Popular Destinations */}
            <section className="section container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem', display: 'inline-block' }}>Trending Destinations</h2>
                    <p>Explore the most visited places this season</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {[
                        { name: 'Mysore', img: mysoreImg, desc: 'City of Palaces' },
                        { name: 'Coorg', img: coorgImg, desc: 'Scotland of India' },
                        { name: 'Ooty', img: ootyImg, desc: 'Queen of Hills' },
                        { name: 'Goa', img: goaImg, desc: 'Sun, Sand & Sea' },
                        { name: 'Munnar', img: munnarImg, desc: 'Backwaters & Tea' },
                        { name: 'Hampi', img: hampiImg, desc: 'Historic Ruins' },
                        { name: 'Wayanad', img: wayanadImg, desc: 'Nature\'s Abode' },
                        { name: 'Kodaikanal', img: kodaikanalImg, desc: 'Princess of Hills' },
                    ].map((dest, index) => (
                        <div
                            key={index}
                            className="glass-card"
                            style={{
                                height: '350px',
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                padding: 0
                            }}
                            onClick={() => openModal(`I'm interested in a trip to ${dest.name}`)}
                        >
                            <img
                                src={dest.img}
                                alt={dest.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                padding: '2rem 1.5rem',
                                color: 'white',
                                pointerEvents: 'none'
                            }}>
                                <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'white' }}>{dest.name}</h3>
                                <p style={{ margin: 0, opacity: 0.9, fontSize: '0.9rem' }}>{dest.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '3rem' }}>
                    <Link to="/tours" className="btn btn-outline" style={{ color: '#111827', borderColor: '#111827' }}>
                        View All Destinations
                    </Link>
                </div>
            </section>

            {/* Map Section */}
            <section className="section" style={{ backgroundColor: '#f3f4f6' }}>
                <div className="container">
                    <h2 className="text-center">Interactive Map</h2>
                    <p className="text-center" style={{ marginBottom: '3rem' }}>Plan your route across South India</p>
                    <div className="glass-panel" style={{ padding: '1rem', borderRadius: '1rem' }}>
                        <DestinationMap />
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section container">
                <h2 className="text-center">Guest Experiences</h2>
                <div style={{ marginTop: '3rem' }}>
                    <TestimonialCarousel />
                </div>
            </section>

            {/* CTA */}
            <section className="container" style={{ margin: '4rem auto' }}>
                <div style={{
                    background: 'linear-gradient(135deg, #111827 0%, #374151 100%)',
                    borderRadius: '24px',
                    padding: '4rem 2rem',
                    textAlign: 'center',
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>Ready for an Adventure?</h2>
                        <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2rem' }}>
                            Let us handle the driving while you make the memories.
                        </p>
                        <Link to="/contact" className="btn" style={{
                            backgroundColor: 'white',
                            color: '#111827',
                            padding: '1rem 3rem',
                            fontWeight: 'bold'
                        }}>
                            Contact Us Today
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
