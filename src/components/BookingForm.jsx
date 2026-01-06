import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useBooking } from '../context/BookingContext';
import { Car, Plane, Repeat, Clock, Plus, Trash2, Gift, Dog, Globe, MapPin, ChevronDown } from 'lucide-react';

const BookingForm = ({ defaultTab = 'oneway', onCancel, isEmbed = false }) => {
    const { saveBooking, tripType, prefillMessage } = useBooking();

    const getInitialTab = (type) => {
        if (type === 'airport-transfer') return 'airport';
        if (type === 'round-trip') return 'roundtrip';
        if (type === 'hourly-rental') return 'hourly';
        if (type === 'one-way') return 'oneway';
        return 'oneway';
    };

    const [activeTab, setActiveTab] = useState(defaultTab);
    const [stops, setStops] = useState([]);

    const [formData, setFormData] = useState({
        name: '', phone: '', message: '', pickupLocation: '', dropLocation: '',
        pickupDateTime: new Date(), returnDate: null, flightNumber: '', hourlyPackage: '8hr80km',
        isPetFriendly: false, isSpecialOccasion: false, languagePreference: 'English Driver'
    });

    useEffect(() => {
        if (!isEmbed) {
            setActiveTab(getInitialTab(tripType));
            setFormData(prev => ({ ...prev, message: prefillMessage }));
        }
    }, [tripType, prefillMessage, isEmbed]);

    const handleAddStop = () => setStops([...stops, '']);
    const handleStopChange = (index, value) => {
        const newStops = [...stops];
        newStops[index] = value;
        setStops(newStops);
    };
    const handleRemoveStop = (index) => setStops(stops.filter((_, i) => i !== index));

    const handleSubmit = (e) => {
        e.preventDefault();
        saveBooking({ ...formData, tripType: activeTab, stops });
        alert('Thank you! Your request has been received.');
        if (onCancel) onCancel();
    };

    const tabs = [
        { id: 'oneway', label: 'One Way', icon: <Car size={16} /> },
        { id: 'roundtrip', label: 'Round Trip', icon: <Repeat size={16} /> },
        { id: 'airport', label: 'Airport', icon: <Plane size={16} /> },
        { id: 'hourly', label: 'Hourly', icon: <Clock size={16} /> },
    ];

    const inputStyle = {
        width: '100%',
        padding: '0.875rem 1rem',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text)',
        fontSize: '0.9375rem',
        outline: 'none',
        transition: 'var(--transition)',
        fontFamily: 'inherit'
    };

    const labelStyle = {
        display: 'block',
        fontSize: '0.8125rem',
        fontWeight: 600,
        color: 'var(--color-text-muted)',
        marginBottom: '0.5rem',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    };

    return (
        <div style={{
            background: 'transparent',
            color: 'var(--color-text)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden'
        }}>
            {/* Tabs */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                background: 'var(--color-bg-alt)',
                borderRadius: 'var(--radius-md)',
                padding: '4px',
                marginBottom: '2rem'
            }}>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '4px',
                            padding: '10px 4px',
                            borderRadius: 'var(--radius-md)',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: activeTab === tab.id ? 'white' : 'var(--color-text-muted)',
                            background: activeTab === tab.id ? 'var(--color-primary)' : 'transparent',
                            boxShadow: activeTab === tab.id ? 'var(--shadow-md)' : 'none',
                        }}
                    >
                        {tab.icon}
                        <span>{tab.label}</span>
                    </button>
                ))}
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                        <label style={labelStyle}>Full Name</label>
                        <input
                            type="text"
                            style={inputStyle}
                            required
                            placeholder="e.g. John Doe"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label style={labelStyle}>Phone Number</label>
                        <input
                            type="tel"
                            style={inputStyle}
                            required
                            placeholder="+91 99999 99999"
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: activeTab === 'hourly' ? '1fr' : '1fr 1fr', gap: '1rem' }}>
                    <div>
                        <label style={labelStyle}>Pickup Location</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="text"
                                style={{ ...inputStyle, paddingLeft: '2.5rem' }}
                                required
                                placeholder="Locality, City"
                                value={formData.pickupLocation}
                                onChange={e => setFormData({ ...formData, pickupLocation: e.target.value })}
                            />
                            <MapPin size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-primary)' }} />
                        </div>
                    </div>

                    {activeTab !== 'hourly' && (
                        <div>
                            <label style={labelStyle}>Drop Location</label>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type="text"
                                    style={{ ...inputStyle, paddingLeft: '2.5rem' }}
                                    required
                                    placeholder="Destination"
                                    value={formData.dropLocation}
                                    onChange={e => setFormData({ ...formData, dropLocation: e.target.value })}
                                />
                                <MapPin size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-accent)' }} />
                            </div>
                        </div>
                    )}
                </div>

                {/* Multi-Stop Logic */}
                {activeTab === 'roundtrip' && stops.length > 0 && (
                    <div style={{ borderLeft: '2px dashed var(--color-border)', marginLeft: '1rem', paddingLeft: '1rem' }}>
                        {stops.map((stop, index) => (
                            <div key={index} style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                                <input type="text" style={inputStyle} placeholder={`Via Point #${index + 1}`} value={stop} onChange={e => handleStopChange(index, e.target.value)} />
                                <button type="button" onClick={() => handleRemoveStop(index)} style={{ color: '#ef4444', padding: '0 8px' }}><Trash2 size={18} /></button>
                            </div>
                        ))}
                    </div>
                )}
                {activeTab === 'roundtrip' && (
                    <button type="button" onClick={handleAddStop} style={{ color: 'var(--color-primary)', fontSize: '0.8125rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', width: 'fit-content' }}>
                        <Plus size={14} /> Add Via Stop
                    </button>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: activeTab === 'roundtrip' ? '1fr 1fr' : '1fr', gap: '1rem' }}>
                    <div className="custom-datepicker-wrapper">
                        <label style={labelStyle}>Pickup Date & Time</label>
                        <DatePicker
                            selected={formData.pickupDateTime}
                            onChange={(date) => setFormData({ ...formData, pickupDateTime: date })}
                            showTimeSelect
                            dateFormat="MMM d, h:mm aa"
                            className="form-input"
                            required
                        />
                    </div>
                    {activeTab === 'roundtrip' && (
                        <div className="custom-datepicker-wrapper">
                            <label style={labelStyle}>Return Date (Approx)</label>
                            <DatePicker
                                selected={formData.returnDate}
                                onChange={(date) => setFormData({ ...formData, returnDate: date })}
                                dateFormat="MMM d, yyyy"
                                className="form-input"
                                placeholderText="Select Date"
                            />
                        </div>
                    )}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                    <label style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '12px 6px',
                        background: formData.isPetFriendly ? 'rgba(13, 148, 136, 0.05)' : 'var(--color-bg-alt)',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                        border: `1px solid ${formData.isPetFriendly ? 'var(--color-primary)' : 'transparent'}`,
                        transition: 'var(--transition)'
                    }}>
                        <input type="checkbox" checked={formData.isPetFriendly} onChange={e => setFormData({ ...formData, isPetFriendly: e.target.checked })} style={{ display: 'none' }} />
                        <Dog size={18} color={formData.isPetFriendly ? 'var(--color-primary)' : 'var(--color-text-muted)'} style={{ marginBottom: '4px' }} />
                        <span style={{ fontSize: '0.625rem', fontWeight: 700, color: formData.isPetFriendly ? 'var(--color-primary)' : 'var(--color-text-muted)' }}>PETS</span>
                    </label>
                    <label style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '12px 6px',
                        background: formData.isSpecialOccasion ? 'rgba(245, 158, 11, 0.05)' : 'var(--color-bg-alt)',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                        border: `1px solid ${formData.isSpecialOccasion ? 'var(--color-accent)' : 'transparent'}`,
                        transition: 'var(--transition)'
                    }}>
                        <input type="checkbox" checked={formData.isSpecialOccasion} onChange={e => setFormData({ ...formData, isSpecialOccasion: e.target.checked })} style={{ display: 'none' }} />
                        <Gift size={18} color={formData.isSpecialOccasion ? 'var(--color-accent)' : 'var(--color-text-muted)'} style={{ marginBottom: '4px' }} />
                        <span style={{ fontSize: '0.625rem', fontWeight: 700, color: formData.isSpecialOccasion ? 'var(--color-accent)' : 'var(--color-text-muted)' }}>EVENT</span>
                    </label>
                    <div style={{ position: 'relative' }}>
                        <select
                            style={{ ...inputStyle, padding: '12px 24px 12px 8px', fontSize: '0.75rem', fontWeight: 600, height: '100%', border: 'none', background: 'var(--color-bg-alt)' }}
                            value={formData.languagePreference}
                            onChange={e => setFormData({ ...formData, languagePreference: e.target.value })}
                        >
                            <option>English</option>
                            <option>Kannada</option>
                            <option>Hindi</option>
                            <option>Tamil</option>
                        </select>
                        <ChevronDown size={14} style={{ position: 'absolute', right: '6px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--color-text-muted)' }} />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    Get Instant Quote
                </button>
            </form>
        </div>
    );
};

export default BookingForm;

