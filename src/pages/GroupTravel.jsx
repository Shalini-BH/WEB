import { Helmet } from 'react-helmet-async';
import groupImg from '../assets/group_travel_happy_tourists_1764719875005.png';

const GroupTravel = () => {
    return (
        <div className="container section">
            <Helmet>
                <title>Group Tours | South India Explorer</title>
                <meta name="description" content="Join our monthly group tours for solo travelers. Explore South India with new friends." />
            </Helmet>
            <h1 className="text-center">South India Explorer - Group Tours</h1>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <img src={groupImg} alt="Group Travel" style={{ width: '100%', borderRadius: 'var(--radius-lg)', marginBottom: 'var(--spacing-lg)' }} />
                <p className="text-center" style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-xl)' }}>
                    Join our monthly group tours designed for solo travelers and small groups who want to explore together.
                    Make new friends and create unforgettable memories.
                </p>

                <div style={{
                    backgroundColor: 'var(--color-background)',
                    padding: 'var(--spacing-xl)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-border)'
                }}>
                    <h3>Upcoming Trip: Wayanad Wilderness</h3>
                    <p><strong>Date:</strong> 15th - 17th Next Month</p>
                    <p><strong>Group Size:</strong> Max 12 People</p>
                    <p><strong>Vehicle:</strong> Luxury Tempo Traveller</p>

                    <div style={{ marginTop: 'var(--spacing-lg)', padding: 'var(--spacing-md)', backgroundColor: '#e6fffa', borderRadius: 'var(--radius-md)', color: '#006A4E' }}>
                        <strong>Note:</strong> Group tour prices depend on the month and seats available.
                    </div>

                    <a
                        href="tel:+917892665004"
                        className="btn btn-primary"
                        style={{ marginTop: 'var(--spacing-lg)', width: '100%', textDecoration: 'none' }}
                    >
                        Call to Register
                    </a>
                </div>
            </div>
        </div>
    );
};

export default GroupTravel;
