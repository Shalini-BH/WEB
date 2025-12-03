import { Helmet } from 'react-helmet-async';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will contact you shortly.');
        e.target.reset();
    };

    return (
        <div className="container section">
            <Helmet>
                <title>Contact Us | South India Tours</title>
                <meta name="description" content="Get in touch for bookings and enquiries. Call or WhatsApp us 24/7." />
            </Helmet>
            <h1 className="text-center">Contact Us</h1>
            <div className="flex gap-md" style={{ flexWrap: 'wrap', marginTop: 'var(--spacing-xl)' }}>

                {/* Contact Info */}
                <div style={{ flex: '1 1 300px' }}>
                    <h3>Get in Touch</h3>
                    <p>For all bookings & pricing, call our 24/7 support team.</p>

                    <div style={{ marginTop: 'var(--spacing-lg)' }}>
                        <div style={{ marginBottom: 'var(--spacing-md)', padding: 'var(--spacing-md)', backgroundColor: 'var(--color-background)', borderRadius: 'var(--radius-md)' }}>
                            <h4 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>📍 Location</h4>
                            <p><strong>JP Nagar, Bangalore</strong></p>
                            <p>Karnataka, India</p>
                        </div>

                        <div style={{ marginBottom: 'var(--spacing-md)', padding: 'var(--spacing-md)', backgroundColor: 'var(--color-background)', borderRadius: 'var(--radius-md)' }}>
                            <h4 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>🚕 Doorstep Service</h4>
                            <p><strong>We pick you up from your home!</strong></p>
                            <p>Hassle-free pickup and drop anywhere in Bangalore.</p>
                        </div>

                        <p><strong>Phone:</strong> +91 78926 65004</p>
                        <p><strong>WhatsApp:</strong> +91 78926 65004</p>
                        <p><strong>Email:</strong> booking@bestservicecabs.com</p>
                    </div>

                    <div style={{ marginTop: 'var(--spacing-xl)' }}>
                        {/* Placeholder for Map */}
                        <div style={{ height: '300px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            Google Map Placeholder
                        </div>
                    </div>
                </div>

                {/* Enquiry Form */}
                <div style={{ flex: '1 1 300px', padding: 'var(--spacing-lg)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                    <h3>Quick Enquiry</h3>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                        <input type="text" placeholder="Your Name" required style={{ padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }} />
                        <input type="tel" placeholder="Mobile Number" required style={{ padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }} />
                        <textarea placeholder="Message / Requirement" rows="5" required style={{ padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}></textarea>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
