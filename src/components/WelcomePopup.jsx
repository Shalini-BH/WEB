import { useState, useEffect } from 'react';

const WelcomePopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState('details'); // details, otp, success
    const [formData, setFormData] = useState({ name: '', phone: '' });
    const [otp, setOtp] = useState('');
    const [generatedOtp, setGeneratedOtp] = useState('');

    useEffect(() => {
        const hasSeenPopup = sessionStorage.getItem('hasSeenWelcomePopup');
        if (!hasSeenPopup) {
            // Show popup after a short delay
            const timer = setTimeout(() => setIsOpen(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem('hasSeenWelcomePopup', 'true');
    };

    const handleSendOtp = (e) => {
        e.preventDefault();
        if (formData.phone.length < 10) {
            alert('Please enter a valid phone number');
            return;
        }
        // Mock OTP generation
        const mockOtp = Math.floor(1000 + Math.random() * 9000).toString();
        setGeneratedOtp(mockOtp);
        alert(`Your OTP is: ${mockOtp}`); // In real app, this would be SMS
        setStep('otp');
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        if (otp === generatedOtp || otp === '1234') { // Allow '1234' as master code
            // Success
            const text = `*New Lead from Website*%0AName: ${formData.name}%0APhone: ${formData.phone}%0AStatus: OTP Verified`;
            window.open(`https://wa.me/917892665004?text=${text}`, '_blank');
            setStep('success');
        } else {
            alert('Invalid OTP. Please try again.');
        }
    };

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2000,
            backdropFilter: 'blur(5px)'
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: 'var(--spacing-xl)',
                borderRadius: 'var(--radius-lg)',
                width: '90%',
                maxWidth: '450px',
                position: 'relative',
                boxShadow: 'var(--shadow-lg)',
                textAlign: 'center'
            }}>
                {step !== 'success' && (
                    <button
                        onClick={handleClose}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            background: 'none',
                            border: 'none',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            color: '#666'
                        }}
                    >&times;</button>
                )}

                {step === 'details' && (
                    <>
                        <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-sm)' }}>Welcome to South India Explorer!</h2>
                        <p style={{ marginBottom: 'var(--spacing-lg)', color: '#666' }}>Enter your details to unlock exclusive offers.</p>
                        <form onSubmit={handleSendOtp} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                                style={{ padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', border: '1px solid #ddd', fontSize: '1rem' }}
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                required
                                style={{ padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', border: '1px solid #ddd', fontSize: '1rem' }}
                                value={formData.phone}
                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            />
                            <button type="submit" className="btn btn-primary" style={{ padding: 'var(--spacing-md)', fontSize: '1.1rem' }}>
                                Get OTP
                            </button>
                        </form>
                    </>
                )}

                {step === 'otp' && (
                    <>
                        <h2 style={{ color: 'var(--color-primary)' }}>Verify Phone Number</h2>
                        <p style={{ marginBottom: 'var(--spacing-lg)' }}>Enter the OTP sent to {formData.phone}</p>
                        <form onSubmit={handleVerifyOtp} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                required
                                maxLength="4"
                                style={{ padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', border: '1px solid #ddd', fontSize: '1.2rem', textAlign: 'center', letterSpacing: '5px' }}
                                value={otp}
                                onChange={e => setOtp(e.target.value)}
                            />
                            <button type="submit" className="btn btn-primary">
                                Verify & Unlock Offer
                            </button>
                            <button
                                type="button"
                                onClick={() => setStep('details')}
                                style={{ background: 'none', border: 'none', color: '#666', textDecoration: 'underline', cursor: 'pointer' }}
                            >
                                Change Phone Number
                            </button>
                        </form>
                    </>
                )}

                {step === 'success' && (
                    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
                        <div style={{ fontSize: '4rem', marginBottom: 'var(--spacing-md)' }}>🎉</div>
                        <h2 style={{ color: 'var(--color-secondary)', fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}>Congratulations!</h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-lg)' }}>
                            You have unlocked an exclusive <br />
                            <strong style={{ color: 'var(--color-accent)', fontSize: '1.5rem' }}>UPTO 30% OFF</strong> <br />
                            on your first booking!
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: 'var(--spacing-xl)' }}>
                            Our team has received your details and will contact you shortly to help you plan your trip.
                        </p>
                        <button onClick={handleClose} className="btn btn-primary">
                            Explore Packages
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WelcomePopup;
