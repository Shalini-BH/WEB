import { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import SEO from '../components/SEO';
import mysoreImg from '../assets/dest_mysore_palace_1764719793546.png';
import goaImg from '../assets/dest_goa_beach_1764719811518.png';
import tirupatiImg from '../assets/dest_tirupati_temple_1764719828916.png';
import chennaiImg from '../assets/dest_chennai_marina_1764719899053.png';
import ootyImg from '../assets/dest_ooty.jpg';
import munnarImg from '../assets/dest_munnar.jpg';
import rameswaramImg from '../assets/dest_rameswaram.jpg';
import hampiImg from '../assets/dest_hampi.png';
import chikmagalurImg from '../assets/dest_chikmagalur.jpg';
import wayanadImg from '../assets/dest_wayanad.JPG';
import pondicherryImg from '../assets/dest_pondicherry.jpg';
import gokarnaImg from '../assets/dest_gokarna.JPG';
import alleppeyImg from '../assets/dest_alleppey.jpg';
import maduraiImg from '../assets/dest_madurai.jpg';
import thekkadyImg from '../assets/dest_thekkady.jpg';
import kodaikanalImg from '../assets/dest_kodaikanal.jpg';

const Tours = () => {
    const { openModal } = useBooking();
    const [searchQuery, setSearchQuery] = useState('');

    const tours = [
        { name: 'Ooty & Coorg', duration: '4 Days / 3 Nights', highlights: 'Botanical Gardens, Tea Estates, Abbey Falls', img: ootyImg },
        { name: 'Munnar & Alleppey', duration: '5 Days / 4 Nights', highlights: 'Tea Museum, Houseboat Stay, Backwaters', img: munnarImg },
        { name: 'Rameswaram & Kanyakumari', duration: '3 Days / 2 Nights', highlights: 'Temple Visit, Vivekananda Rock, Sunrise', img: rameswaramImg },
        { name: 'Tirupati Package', duration: '2 Days / 1 Night', highlights: 'Darshan Assistance, Local Sightseeing', img: tirupatiImg },
        { name: 'Mysore Heritage', duration: '2 Days / 1 Night', highlights: 'Palace, Zoo, Chamundi Hills', img: mysoreImg },
        { name: 'Goa Beach Fun', duration: '4 Days / 3 Nights', highlights: 'Beaches, Churches, Water Sports', img: goaImg },
        { name: 'Hampi & Badami', duration: '3 Days / 2 Nights', highlights: 'Vijayanagara Empire Ruins, Cave Temples', img: hampiImg },
        { name: 'Chikmagalur Coffee', duration: '3 Days / 2 Nights', highlights: 'Mullayanagiri, Coffee Estates, Hebbe Falls', img: chikmagalurImg },
        { name: 'Wayanad Nature', duration: '3 Days / 2 Nights', highlights: 'Edakkal Caves, Pookode Lake, Banasura Dam', img: wayanadImg },
        { name: 'Pondicherry Vibes', duration: '3 Days / 2 Nights', highlights: 'French Colony, Auroville, Promenade Beach', img: pondicherryImg },
        { name: 'Gokarna Beach Trek', duration: '3 Days / 2 Nights', highlights: 'Om Beach, Kudle Beach, Mahabaleshwar Temple', img: gokarnaImg },
        { name: 'Kerala Backwaters', duration: '6 Days / 5 Nights', highlights: 'Alleppey, Kumarakom, Cochin', img: alleppeyImg },
        { name: 'Temple Trail', duration: '5 Days / 4 Nights', highlights: 'Madurai, Rameswaram, Kanyakumari, Thanjavur', img: maduraiImg },
        { name: 'Wildlife Safari', duration: '3 Days / 2 Nights', highlights: 'Bandipur, Nagarhole, Kabini', img: thekkadyImg },
        { name: 'Hill Station Special', duration: '6 Days / 5 Nights', highlights: 'Ooty, Kodaikanal, Munnar', img: kodaikanalImg }
    ];

    const filteredTours = tours.filter(tour =>
        tour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.highlights.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="container section">
            <SEO
                title="South India Tour Packages | Best Service Cabs"
                description="Explore Ooty, Munnar, Kodaikanal and more with our custom South India tour packages. Affordable rates and premium comfort."
                canonical="/tours"
            />
            <h1 className="text-center">South India Tour Packages</h1>
            <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
                Explore the beauty of South India with our curated packages. <br />
                <strong>Contact us for price quote — Call Support.</strong>
            </p>

            {/* Search Bar */}
            <div style={{ maxWidth: '500px', margin: '0 auto var(--spacing-xl)' }}>
                <input
                    type="text"
                    placeholder="Search tours (e.g., Ooty, Temple, Beach)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                        width: '100%',
                        padding: 'var(--spacing-md)',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--color-border)',
                        fontSize: '1rem',
                        boxShadow: 'var(--shadow-sm)',
                        color: 'var(--color-text)', // Explicit contrast
                        backgroundColor: 'var(--color-bg)'
                    }}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                {filteredTours.map((tour) => (
                    <div key={tour.name} style={{
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        backgroundColor: 'var(--color-bg)',
                        boxShadow: 'var(--shadow-sm)'
                    }}>
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                            <img src={tour.img} alt={tour.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ padding: 'var(--spacing-lg)' }}>
                            <h3>{tour.name}</h3>
                            <p><strong>Duration:</strong> {tour.duration}</p>
                            <p><strong>Highlights:</strong> {tour.highlights}</p>
                            <div style={{ marginTop: 'var(--spacing-md)' }}>
                                <button
                                    onClick={() => openModal(`I am interested in the ${tour.name} package (${tour.duration}). Please provide a quote.`)}
                                    className="btn btn-secondary"
                                    style={{ width: '100%', display: 'block', textAlign: 'center' }}
                                >
                                    Get Quote
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Tours;
