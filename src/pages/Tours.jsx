import { Helmet } from 'react-helmet-async';
import mysoreImg from '../assets/dest_mysore_palace_1764719793546.png';
import goaImg from '../assets/dest_goa_beach_1764719811518.png';
import tirupatiImg from '../assets/dest_tirupati_temple_1764719828916.png';
import heroImg from '../assets/hero_south_india_landscape_1764700257274.png';
import chennaiImg from '../assets/dest_chennai_marina_1764719899053.png';

const Tours = () => {
    const tours = [
        { name: 'Ooty & Coorg', duration: '4 Days / 3 Nights', highlights: 'Botanical Gardens, Tea Estates, Abbey Falls' },
        { name: 'Munnar & Alleppey', duration: '5 Days / 4 Nights', highlights: 'Tea Museum, Houseboat Stay, Backwaters' },
        { name: 'Rameswaram & Kanyakumari', duration: '3 Days / 2 Nights', highlights: 'Temple Visit, Vivekananda Rock, Sunrise' },
        { name: 'Tirupati Package', duration: '2 Days / 1 Night', highlights: 'Darshan Assistance, Local Sightseeing' },
    ];

    return (
        <div className="container section">
            <Helmet>
                <title>Tour Packages | South India Tours</title>
                <meta name="description" content="Explore Ooty, Munnar, Kodaikanal and more with our custom South India tour packages." />
            </Helmet>
            <h1 className="text-center">South India Tour Packages</h1>
            <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
                Explore the beauty of South India with our curated packages. <br />
                <strong>Contact us for price quote — Call Support.</strong>
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                {[
                    { name: 'Ooty & Coorg', duration: '4 Days / 3 Nights', highlights: 'Botanical Gardens, Tea Estates, Abbey Falls', img: heroImg },
                    { name: 'Munnar & Alleppey', duration: '5 Days / 4 Nights', highlights: 'Tea Museum, Houseboat Stay, Backwaters', img: heroImg },
                    { name: 'Rameswaram & Kanyakumari', duration: '3 Days / 2 Nights', highlights: 'Temple Visit, Vivekananda Rock, Sunrise', img: chennaiImg },
                    { name: 'Tirupati Package', duration: '2 Days / 1 Night', highlights: 'Darshan Assistance, Local Sightseeing', img: tirupatiImg },
                    { name: 'Mysore Heritage', duration: '2 Days / 1 Night', highlights: 'Palace, Zoo, Chamundi Hills', img: mysoreImg },
                    { name: 'Goa Beach Fun', duration: '4 Days / 3 Nights', highlights: 'Beaches, Churches, Water Sports', img: goaImg }
                ].map((tour) => (
                    <div key={tour.name} style={{
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden'
                    }}>
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                            <img src={tour.img} alt={tour.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ padding: 'var(--spacing-lg)' }}>
                            <h3>{tour.name}</h3>
                            <p><strong>Duration:</strong> {tour.duration}</p>
                            <p><strong>Highlights:</strong> {tour.highlights}</p>
                            <div style={{ marginTop: 'var(--spacing-md)' }}>
                                <a
                                    href={`https://wa.me/917892665004?text=Hi, I want a quote for ${tour.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary"
                                    style={{ width: '100%', textDecoration: 'none', display: 'block', textAlign: 'center' }}
                                >
                                    Get Quote via WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tours;
