import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { Shield, Award, Map, Headphones, Car, Star, CheckCircle, ArrowRight, MousePointer2 } from 'lucide-react';
import DestinationMap from '../components/DestinationMap';
import SEO from '../components/SEO';
import BookingForm from '../components/BookingForm';
import TravelerTicker from '../components/TravelerTicker';
import LiveBookingFeed from '../components/LiveBookingFeed';
import ValueLockOverlay from '../components/ValueLockOverlay';
import WelcomePopup from '../components/WelcomePopup';

// Assets
import heroImg from '../assets/hero_premium_new.png';
import mysoreImg from '../assets/dest_mysore_palace_1764719793546.png';
import goaImg from '../assets/dest_goa_beach_1764719811518.png';
import coorgImg from '../assets/dest_coorg.png';
import ootyImg from '../assets/dest_ooty.jpg';

const Home = () => {
    const { openModal } = useBooking();

    return (
        <div className="page-wrapper" style={{ overflow: 'hidden' }}>
            <SEO
                title="Premium South India Tours & Travels | Best Service Cabs"
                description="Experience the beauty of South India with verified drivers, luxury fleet, and transparent pricing."
            />

            <LiveBookingFeed />

            {/* --- Hero Section --- */}
            <header className="hero-wrapper">
                <div className="hero-bg">
                    <img src={heroImg} alt="South India Landscape" />
                    <div className="hero-overlay" style={{ background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.2) 0%, rgba(15, 23, 42, 0.5) 50%, rgba(15, 23, 42, 0.8) 100%)' }}></div>
                </div>

                <div className="container hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 10 }}>
                    {/* Hero Text */}
                    <div style={{ textAlign: 'center', maxWidth: '850px', marginBottom: '4rem' }}>
                        <span className="hero-badge stagger-1" style={{ boxShadow: '0 0 20px rgba(45, 212, 191, 0.3)' }}>No. 1 Premium Cab Service</span>
                        <h1 className="text-display stagger-2" style={{ marginBottom: '1.5rem', lineHeight: 1.1, color: '#FFFFFF' }}>
                            Travel South India <br />
                            <span className="text-gradient-primary">In Absolute Comfort.</span>
                        </h1>
                        <p className="text-body-lg stagger-3" style={{ color: '#f1f5f9', marginBottom: '2.5rem', fontWeight: 500, opacity: 0.9, textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                            We don't just provide cabs; we curate your journey. Experienced chauffeurs, premium vehicles, and the promise of reliability.
                        </p>

                        <div className="stagger-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '12px', backdropFilter: 'blur(4px)' }}>
                                <div style={{ background: 'rgba(45, 212, 191, 0.2)', padding: '6px', borderRadius: '8px' }}>
                                    <Shield size={18} className="text-primary-light" />
                                </div>
                                <span style={{ fontWeight: 500, color: 'white', fontSize: '0.9rem' }}>Safety First</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '12px', backdropFilter: 'blur(4px)' }}>
                                <div style={{ background: 'rgba(251, 191, 36, 0.2)', padding: '6px', borderRadius: '8px' }}>
                                    <Award size={18} style={{ color: 'var(--accent-light)' }} />
                                </div>
                                <span style={{ fontWeight: 500, color: 'white', fontSize: '0.9rem' }}>Best-in-Class</span>
                            </div>
                        </div>

                        <button onClick={() => document.getElementById('offer-section').scrollIntoView()} className="btn btn-outline stagger-4" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white', padding: '1rem 2rem', backdropFilter: 'blur(8px)' }}>
                            Explore Pricing <ArrowRight size={18} />
                        </button>
                    </div>

                    {/* Hero Booking Form */}
                    <div className="glass-premium stagger-5" style={{ width: '100%', maxWidth: '850px', padding: '3rem', borderRadius: '24px', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '2px', background: 'linear-gradient(90deg, transparent, var(--color-primary-light), transparent)' }}></div>
                        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                            <h3 className="text-h3" style={{ fontSize: '1.75rem', color: '#ffffff', marginBottom: '0.5rem' }}>Instant Travel Estimate</h3>
                            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)' }}>Get transparent pricing for your next journey in seconds</p>
                        </div>
                        <BookingForm isEmbed={true} />
                        <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                <Star size={14} fill="var(--color-primary-light)" stroke="var(--color-primary-light)" /> 4.9/5 TrustScore from 10k+ Travelers
                            </span>
                        </div>
                    </div>
                </div>

                {/* Decorative Scroll Hint */}
                <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', color: 'white', textAlign: 'center', opacity: 0.6, pointerEvents: 'none' }}>
                    <p style={{ fontSize: '0.7rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 600 }}>Explore</p>
                    <MousePointer2 size={24} style={{ animation: 'float 3s ease-in-out infinite' }} />
                </div>
            </header>

            {/* --- Trust Pillars --- */}
            <section className="section" id="pillars">
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 5rem auto' }}>
                        <span className="hero-badge" style={{ background: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)' }}>Why Choose Us</span>
                        <h2 className="text-h2" style={{ marginBottom: '1.5rem' }}>The Gold Standard of Travel</h2>
                        <p className="text-body-lg">We've redefined outstation travel with a focus on hygiene, punctuality, and professionalism.</p>
                    </div>

                    <div className="grid-dynamic">
                        {[
                            { icon: <Car />, title: "Premium Fleet", desc: "Reguarly sanitized Sedans, luxury SUVs, and spacious Travelers." },
                            { icon: <Shield />, title: "Verified Pros", desc: "Experienced chauffeurs background-checked for your safety." },
                            { icon: <Map />, title: "Custom Tours", desc: "Flexible itineraries designed around your preferences." },
                            { icon: <Headphones />, title: "Direct Support", desc: "Assistance available 24/7 throughout your entire journey." }
                        ].map((item, idx) => (
                            <div key={idx} className="card-base card-hover" style={{ textAlign: 'center' }}>
                                <div className="icon-box" style={{ margin: '0 auto 1.5rem auto' }}>
                                    {item.icon}
                                </div>
                                <h3 className="text-h3" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{item.title}</h3>
                                <p className="text-body-sm" style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Pricing Section (Value Locked) --- */}
            <section className="section section-alt" id="offer-section">
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
                        <h2 className="text-h2">Transparent Per-KM Rates</h2>
                        <p className="text-body-lg">No hidden charges. No surprises. Just honest pricing.</p>
                    </div>

                    <ValueLockOverlay>
                        <div className="grid-dynamic" style={{ alignItems: 'stretch' }}>
                            {[
                                { title: "Hatchback", cars: "Indica, Etios Liva", price: "11", color: "#64748b" },
                                { title: "Executive Sedan", cars: "Dzire, Xcent, Etios", price: "13", color: "var(--primary)" },
                                { title: "Comfort SUV", cars: "Innova, Ertiga, Marazzo", price: "17", color: "var(--accent)" },
                                { title: "Premium VIP", cars: "Crysta, Fortuner", price: "22", color: "#1e293b" }
                            ].map((plan, i) => (
                                <div key={i} className="card-base card-hover" style={{ padding: '2.5rem 2rem', borderTop: `4px solid ${plan.color}` }}>
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3 className="text-h3" style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{plan.title}</h3>
                                        <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{plan.cars}</p>
                                    </div>
                                    <div style={{ marginBottom: '2rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                                            <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-muted)' }}>₹</span>
                                            <span className="text-display" style={{ fontSize: '2.5rem', color: 'var(--text-main)' }}>{plan.price}</span>
                                            <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>/km</span>
                                        </div>
                                    </div>
                                    <ul style={{ textAlign: 'left', marginBottom: '2.5rem', listStyle: 'none' }}>
                                        {['Includes Driver Allowance', 'Clean Car & Zero Odor', 'Verified Safe Driver'].map((feat, j) => (
                                            <li key={j} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', fontSize: '0.875rem' }}>
                                                <CheckCircle size={16} style={{ color: plan.color }} /> {feat}
                                            </li>
                                        ))}
                                    </ul>
                                    <button onClick={() => openModal(plan.title)} className="btn btn-primary" style={{ width: '100%', backgroundColor: plan.color, borderColor: plan.color }}>
                                        Book Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </ValueLockOverlay>
                </div>
            </section>

            {/* --- Top Destinations --- */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
                        <div>
                            <span className="hero-badge" style={{ background: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)' }}>Travel Inspiration</span>
                            <h2 className="text-h2">Trending Destinations</h2>
                        </div>
                        <Link to="/tours" className="btn btn-outline" style={{ display: 'none' }}>
                            View Gallery
                        </Link>
                    </div>

                    <div className="grid-dynamic">
                        {[
                            { name: "Mysore Palace", img: mysoreImg, tag: "Heritage", price: "Starting ₹2,500" },
                            { name: "Coorg Highlands", img: coorgImg, tag: "Nature", price: "Starting ₹3,800" },
                            { name: "Ooty Mist", img: ootyImg, tag: "Hills", price: "Starting ₹4,200" },
                            { name: "Goa Beaches", img: goaImg, tag: "Leisure", price: "Starting ₹12,000" }
                        ].map((dest, i) => (
                            <div key={i} className="card-base card-hover" onClick={() => openModal(dest.name)} style={{ padding: '0', cursor: 'pointer', overflow: 'hidden', position: 'relative', border: 'none' }}>
                                <div style={{ height: '350px', overflow: 'hidden', position: 'relative' }}>
                                    <img src={dest.img} alt={dest.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }}></div>

                                    <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem' }}>
                                        <span style={{ background: 'var(--color-primary)', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>{dest.tag}</span>
                                    </div>

                                    <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', color: 'white' }}>
                                        <h3 className="text-h3" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>{dest.name}</h3>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                                            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-primary-light)', fontWeight: 600 }}>{dest.price}</p>
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Map Visibility --- */}
            <section className="section section-alt">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className="text-h2">Service Area Coverage</h2>
                    </div>
                    <div className="card-base" style={{ padding: '0.5rem', borderRadius: '24px', overflow: 'hidden' }}>
                        <DestinationMap />
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {transform: translateY(0) translateX(-50%);}
                    40% {transform: translateY(-10px) translateX(-50%);}
                    60% {transform: translateY(-5px) translateX(-50%);}
                }
                .hero-content {
                    padding-bottom: 4rem;
                }
                @media (min-width: 1024px) {
                    .hero-content {
                        padding-top: 4rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Home;

