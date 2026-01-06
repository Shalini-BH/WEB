import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div className="container section">
            <Helmet>
                <title>About Us | Best Service Cabs and Travels</title>
                <meta name="description" content="Founded in 2007, Best Service Cabs and Travels has served over 25,000 happy passengers with safe and reliable transport." />
            </Helmet>
            <h1 className="text-center">About Us</h1>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                        Since 2007, <strong>Best Service Cabs and Travels</strong> has been the gold standard for premium outstation travel and local rentals in South India.
                        We don't just provide a vehicle; we ensure a safe, comfortable, and memorable journey for every passenger.
                    </p>
                </div>

                <div className="grid-2" style={{ marginBottom: '4rem', alignItems: 'start' }}>
                    <div>
                        <h2 className="text-h3" style={{ marginBottom: '1.25rem', color: 'var(--color-primary)' }}>Our Mission</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            To provide reliable, high-quality transportation services that exceed customer expectations. We strive to offer transparent pricing,
                            verified professional drivers, and a diverse fleet of well-maintained vehicles.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-h3" style={{ marginBottom: '1.25rem', color: 'var(--color-primary)' }}>Why Choose Us?</h2>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {[
                                'Experienced & Verified Chauffeurs',
                                'Zero Hidden Costs - Transparent Billing',
                                '24/7 Dedicated Customer Support',
                                'Regularly Sanitized & Well-Maintained Fleet',
                                'Flexible Itineraries for Custom Tours'
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex gap-md" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
                    {[
                        { label: 'Happy Passengers', value: '25,000+' },
                        { label: 'Years of Experience', value: '17+' },
                        { label: 'Vehicles in Fleet', value: '50+' },
                        { label: 'Safety Record', value: '100%' },
                    ].map((stat, i) => (
                        <div key={i} style={{
                            padding: '2rem',
                            backgroundColor: 'var(--color-bg-alt)',
                            borderRadius: 'var(--radius-lg)',
                            textAlign: 'center',
                            flex: '1 1 180px',
                            border: '1px solid var(--color-border)'
                        }}>
                            <h3 style={{ color: 'var(--color-primary)', fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.value}</h3>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase' }}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
