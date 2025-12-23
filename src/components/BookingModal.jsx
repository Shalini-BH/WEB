import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useBooking } from '../context/BookingContext';
import { Car, Plane, Repeat, Clock } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
    const { saveBooking, tripType, prefillMessage } = useBooking();

    // Map context tripType to internal tab keys
    const getInitialTab = (type) => {
        if (type === 'airport-transfer') return 'airport';
        if (type === 'round-trip') return 'roundtrip';
        if (type === 'hourly-rental') return 'hourly';
        if (type === 'one-way') return 'oneway';
        return 'oneway'; // Default
    };

    const [activeTab, setActiveTab] = useState('oneway');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
        pickupLocation: '',
        dropLocation: '',
        pickupDateTime: new Date(),
        returnDate: null,
        flightNumber: '',
        hourlyPackage: '8hr80km'
    });

    useEffect(() => {
        if (isOpen) {
            setActiveTab(getInitialTab(tripType));
            setFormData(prev => ({ ...prev, message: prefillMessage }));
        }
    }, [isOpen, tripType, prefillMessage]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        saveBooking({ ...formData, tripType: activeTab });
        alert('Thank you! Your request has been received. We will contact you shortly.');
        onClose();
    };

    const tabs = [
        { id: 'oneway', label: 'One Way', icon: <Car size={16} /> },
        { id: 'roundtrip', label: 'Round Trip', icon: <Repeat size={16} /> },
        { id: 'airport', label: 'Airport', icon: <Plane size={16} /> },
        { id: 'hourly', label: 'Hourly', icon: <Clock size={16} /> },
    ];

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center',
            zIndex: 1000, backdropFilter: 'blur(4px)'
        }} onClick={onClose}>
            <div style={{
                backgroundColor: 'white', padding: '0', borderRadius: '16px',
                width: '95%', maxWidth: '550px', position: 'relative',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                maxHeight: '90vh', overflowY: 'auto', display: 'flex', flexDirection: 'column'
            }} onClick={e => e.stopPropagation()}>

                {/* Header / Tabs */}
                <div style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', overflowX: 'auto' }}>
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                flex: 1, padding: '1rem', border: 'none', background: activeTab === tab.id ? '#f3f4f6' : 'white',
                                borderBottom: activeTab === tab.id ? '2px solid #2563eb' : '2px solid transparent',
                                color: activeTab === tab.id ? '#2563eb' : '#6b7280', fontWeight: '600', cursor: 'pointer',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', minWidth: '80px'
                            }}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </div>

                <div style={{ padding: '2rem' }}>
                    <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#9ca3af' }}>&times;</button>

                    <h2 style={{ marginTop: 0, marginBottom: '1.5rem', color: '#111827', fontSize: '1.5rem' }}>
                        {activeTab === 'oneway' && 'One Way Drop'}
                        {activeTab === 'roundtrip' && 'Round Trip Booking'}
                        {activeTab === 'airport' && 'Airport Transfer'}
                        {activeTab === 'hourly' && 'Local Rental'}
                    </h2>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <label className="form-label">Name</label>
                                <input type="text" required className="form-input" placeholder="Your Name"
                                    value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                            </div>
                            <div>
                                <label className="form-label">Phone</label>
                                <input type="tel" required className="form-input" placeholder="+91 9999999999"
                                    value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: activeTab === 'hourly' ? '1fr' : '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <label className="form-label">Pickup Location</label>
                                <input type="text" required className="form-input" placeholder="Pickup Address"
                                    value={formData.pickupLocation} onChange={e => setFormData({ ...formData, pickupLocation: e.target.value })} />
                            </div>
                            {activeTab !== 'hourly' && (
                                <div>
                                    <label className="form-label">Drop Location</label>
                                    <input type="text" required className="form-input" placeholder="Destination"
                                        value={formData.dropLocation} onChange={e => setFormData({ ...formData, dropLocation: e.target.value })} />
                                </div>
                            )}
                        </div>

                        {activeTab === 'hourly' && (
                            <div>
                                <label className="form-label">Select Package</label>
                                <select className="form-input" value={formData.hourlyPackage} onChange={e => setFormData({ ...formData, hourlyPackage: e.target.value })}>
                                    <option value="4hr40km">4 Hr / 40 Km</option>
                                    <option value="8hr80km">8 Hr / 80 Km</option>
                                    <option value="12hr120km">12 Hr / 120 Km</option>
                                </select>
                            </div>
                        )}

                        <div style={{ display: 'grid', gridTemplateColumns: activeTab === 'roundtrip' ? '1fr 1fr' : '1fr', gap: '1rem' }}>
                            <div className="custom-datepicker-wrapper">
                                <label className="form-label">Pickup Date & Time</label>
                                <DatePicker
                                    selected={formData.pickupDateTime}
                                    onChange={(date) => setFormData({ ...formData, pickupDateTime: date })}
                                    showTimeSelect dateFormat="MMMM d, yyyy h:mm aa"
                                    className="form-input w-full" required />
                            </div>
                            {activeTab === 'roundtrip' && (
                                <div className="custom-datepicker-wrapper">
                                    <label className="form-label">Return Date</label>
                                    <DatePicker
                                        selected={formData.returnDate}
                                        onChange={(date) => setFormData({ ...formData, returnDate: date })}
                                        dateFormat="MMMM d, yyyy"
                                        className="form-input w-full" placeholderText="Select Date" />
                                </div>
                            )}
                        </div>

                        {activeTab === 'airport' && (
                            <div>
                                <label className="form-label">Flight Number (Optional)</label>
                                <input type="text" className="form-input" placeholder="e.g. AI-505"
                                    value={formData.flightNumber} onChange={e => setFormData({ ...formData, flightNumber: e.target.value })} />
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                            Check Fare & Book
                        </button>
                    </form>
                </div>
            </div>
            <style>{`
                .form-label { display: block; margin-bottom: 0.5rem; font-size: 0.875rem; font-weight: 500; color: #374151; }
                .form-input { width: 100%; padding: 0.75rem; border-radius: 0.5rem; border: 1px solid #d1d5db; font-size: 1rem; outline: none; }
                .form-input:focus { border-color: #2563eb; }
                .btn-primary { background-color: #2563eb; color: white; padding: 0.875rem; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer; transition: background 0.2s; }
                .btn-primary:hover { background-color: #1d4ed8; }
            `}</style>
        </div>
    );
};

export default BookingModal;
