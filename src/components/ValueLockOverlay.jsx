import React from 'react';
import { useBooking } from '../context/BookingContext';
import { Lock, ShieldCheck } from 'lucide-react';

const ValueLockOverlay = ({ children }) => {
    const { isVerified, openUnlockModal } = useBooking();

    return (
        <div className={`lock-wrapper ${!isVerified ? 'locked' : ''}`}>
            {/* Content (will be blurred if locked) */}
            <div className="lock-content">
                {children}
            </div>

            {/* Overlay (only visible if locked) */}
            {!isVerified && (
                <div className="lock-overlay-screen">
                    <div className="lock-modal animate-fade-in">
                        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                            <div style={{ background: '#d1fae5', padding: '1rem', borderRadius: '50%' }}>
                                <Lock size={32} color="#059669" />
                            </div>
                        </div>
                        <h2>Member-Only Rates</h2>
                        <p style={{ color: '#6b7280', margin: '1rem 0' }}>
                            Unlock wholesale pricing and permit waivers.
                        </p>
                        <button onClick={openUnlockModal} className="btn btn-primary" style={{ width: '100%' }}>
                            Unlock Rates
                        </button>
                        <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#9ca3af', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                            <ShieldCheck size={14} /> Verified Secure
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ValueLockOverlay;
