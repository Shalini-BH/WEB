import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div className="container section">
            <Helmet>
                <title>About Us | Best Service Cabs and Travels</title>
                <meta name="description" content="Founded in 2007, Best Service Cabs and Travels has served over 25,000 happy passengers with safe and reliable transport." />
            </Helmet>
            <h1 className="text-center">About Us</h1>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <p style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-lg)' }}>
                    Welcome to <strong>Best Service Cabs and Travels</strong>. We are a dedicated team committed to providing the best customer experience.
                </p>
                <p>
                    Founded in <strong>2007</strong>, we have proudly served over <strong>25,000+ passengers</strong>.
                    We offer a wide variety of vehicles including buses for special occasions. We assure you better rates than online vendors like Ola and Uber.
                </p>

                <div className="flex gap-md" style={{ marginTop: 'var(--spacing-xl)', justifyContent: 'center' }}>
                    <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--color-background)', borderRadius: 'var(--radius-md)' }}>
                        <h3 style={{ color: 'var(--color-primary)' }}>25,000+</h3>
                        <p>Happy Passengers</p>
                    </div>
                    <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--color-background)', borderRadius: 'var(--radius-md)' }}>
                        <h3 style={{ color: 'var(--color-primary)' }}>50+</h3>
                        <p>Vehicles</p>
                    </div>
                    <div style={{ padding: 'var(--spacing-md)', backgroundColor: 'var(--color-background)', borderRadius: 'var(--radius-md)' }}>
                        <h3 style={{ color: 'var(--color-primary)' }}>100%</h3>
                        <p>Safety Record</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
