import { useState, useEffect } from 'react';
import { useBooking } from '../context/BookingContext';
import { X, ShieldCheck } from 'lucide-react';

const WelcomePopup = () => {
    const { isUnlockModalOpen, unlockContent } = useBooking();
    const [localOpen, setLocalOpen] = useState(false);

    // Controlled by context
    useEffect(() => {
        setLocalOpen(isUnlockModalOpen);
    }, [isUnlockModalOpen]);

    const [step, setStep] = useState('details');
    const [formData, setFormData] = useState({ name: '', phone: '' });
    const [otp, setOtp] = useState('');

    const handleClose = () => setLocalOpen(false); // In a real app, might want to sync with context close

    const handleSendOtp = (e) => {
        e.preventDefault();
        alert(`OTP sent to ${formData.phone}: 1234`);
        setStep('otp');
    };

    const handleVerify = (e) => {
        e.preventDefault();
        if (otp === '1234') {
            unlockContent();
            setStep('success');
            setTimeout(() => setLocalOpen(false), 1500);
        } else {
            alert('Wrong OTP');
        }
    };

    if (!localOpen) return null;

    return (
        <div style={{
            position: 'fixed', inset: 0, zIndex: 100,
            background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(5px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
        }}>
            <div className="animate-fade-in" style={{
                background: 'white',
                width: '100%', maxWidth: '400px',
                borderRadius: '1.5rem',
                padding: '2rem',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
            }}>
                <button onClick={handleClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#f3f4f6', border: 'none', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer' }}>
                    <X size={20} color="#4b5563" />
                </button>

                <div style={{ textAlign: 'center' }}>
                    <div style={{ background: '#d1fae5', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                        <ShieldCheck size={32} color="#059669" />
                    </div>

                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Secure Verification</h2>
                    <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '0.9rem' }}>
                        {step === 'details' ? 'Unlock member-only rates & permit waivers.' : 'Enter the code sent to your phone.'}
                    </p>

                    {step === 'details' && (
                        <form onSubmit={handleSendOtp} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input type="text" className="form-input" required placeholder="Your Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                            <input type="tel" className="form-input" required placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                            <button type="submit" className="btn btn-primary">Send OTP</button>
                        </form>
                    )}

                    {step === 'otp' && (
                        <form onSubmit={handleVerify} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input type="text" className="form-input" style={{ textAlign: 'center', letterSpacing: '0.5rem', fontSize: '1.5rem' }} required maxLength="4" placeholder="0000" value={otp} onChange={e => setOtp(e.target.value)} />
                            <button type="submit" className="btn btn-primary">Verify & Unlock</button>
                        </form>
                    )}

                    {step === 'success' && (
                        <div style={{ color: '#059669', fontWeight: 'bold', fontSize: '1.2rem' }}>
                            Success! Unlocking...
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WelcomePopup;
