import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Trash2, Phone, MessageSquare } from 'lucide-react';

const AdminDashboard = () => {
    const [bookings, setBookings] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');

    useEffect(() => {
        const storedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        setBookings(storedBookings);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'admin123') {
            setIsAuthenticated(true);
        } else {
            alert('Invalid Password');
        }
    };

    const deleteBooking = (id) => {
        if (confirm('Are you sure you want to delete this lead?')) {
            const updatedBookings = bookings.filter(b => b.id !== id);
            setBookings(updatedBookings);
            localStorage.setItem('bookings', JSON.stringify(updatedBookings));
        }
    };

    if (!isAuthenticated) {
        return (
            <div style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f3f4f6'
            }}>
                <div style={{
                    backgroundColor: 'white',
                    padding: '3rem',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    width: '100%',
                    maxWidth: '400px',
                    textAlign: 'center'
                }}>
                    <h2 style={{ marginBottom: '2rem', color: '#111827', fontSize: '1.5rem', fontWeight: 'bold' }}>Admin Login</h2>
                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                padding: '0.75rem',
                                fontSize: '1rem',
                                borderRadius: '0.5rem',
                                border: '1px solid #d1d5db',
                                outline: 'none'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                        />
                        <button type="submit" style={{
                            padding: '0.75rem',
                            backgroundColor: '#2563eb',
                            color: 'white',
                            border: 'none',
                            borderRadius: '0.5rem',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'background-color 0.2s'
                        }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                        >Login</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="container section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            <Helmet>
                <title>Admin Dashboard | Best Service Cabs</title>
            </Helmet>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#111827', margin: 0 }}>Lead Dashboard</h1>
                <button onClick={() => setIsAuthenticated(false)} style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'white',
                    border: '1px solid #d1d5db',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    fontWeight: '500',
                    color: '#374151',
                    transition: 'all 0.2s'
                }}
                    onMouseOver={(e) => { e.currentTarget.style.borderColor = '#9ca3af'; e.currentTarget.style.backgroundColor = '#f9fafb'; }}
                    onMouseOut={(e) => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.backgroundColor = 'white'; }}
                >Logout</button>
            </div>

            {bookings.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '4rem', color: '#6b7280', backgroundColor: '#f9fafb', borderRadius: '1rem', border: '2px dashed #e5e7eb' }}>
                    <p style={{ fontSize: '1.25rem' }}>No leads found yet.</p>
                </div>
            ) : (
                <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))' }}>
                    {bookings.map(booking => (
                        <div key={booking.id} style={{
                            padding: '1.5rem',
                            border: '1px solid #e5e7eb',
                            borderRadius: '1rem',
                            backgroundColor: 'white',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            transition: 'box-shadow 0.2s'
                        }}
                            onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'}
                            onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'}
                        >
                            <div style={{ borderBottom: '1px solid #f3f4f6', paddingBottom: '1rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                    <h3 style={{ margin: '0', color: '#111827', fontSize: '1.25rem', fontWeight: '700' }}>{booking.name}</h3>
                                    <span style={{ fontSize: '0.75rem', color: '#6b7280', backgroundColor: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '9999px' }}>
                                        {new Date(booking.id).toLocaleDateString()}
                                    </span>
                                </div>
                                <p style={{ margin: '0.5rem 0 0', color: '#4b5563', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Phone size={16} color="#2563eb" /> {booking.phone}
                                </p>
                            </div>

                            <div style={{ display: 'grid', gap: '0.75rem', fontSize: '0.95rem' }}>
                                {booking.pickupLocation && (
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <span style={{ color: '#6b7280', minWidth: '80px', fontSize: '0.875rem' }}>Pickup:</span>
                                        <span style={{ fontWeight: '500', color: '#111827' }}>{booking.pickupLocation}</span>
                                    </div>
                                )}
                                {booking.pickupDateTime && (
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <span style={{ color: '#6b7280', minWidth: '80px', fontSize: '0.875rem' }}>Time:</span>
                                        <span style={{ fontWeight: '500', color: '#111827' }}>{new Date(booking.pickupDateTime).toLocaleString()}</span>
                                    </div>
                                )}
                                <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
                                    <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>Message:</span>
                                    <p style={{ margin: 0, color: '#374151', backgroundColor: '#f9fafb', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #f3f4f6' }}>{booking.message}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #f3f4f6' }}>
                                <a href={`tel:${booking.phone}`} style={{
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '0.5rem',
                                    backgroundColor: '#eff6ff',
                                    color: '#2563eb',
                                    borderRadius: '0.5rem',
                                    textDecoration: 'none',
                                    fontWeight: '500',
                                    fontSize: '0.875rem'
                                }}>
                                    Call
                                </a>
                                <a
                                    href={`https://wa.me/91${booking.phone}?text=Hi ${booking.name}, received your enquiry regarding: ${booking.message}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        flex: 1,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: '0.5rem',
                                        backgroundColor: '#ecfdf5',
                                        color: '#059669',
                                        borderRadius: '0.5rem',
                                        textDecoration: 'none',
                                        fontWeight: '500',
                                        fontSize: '0.875rem'
                                    }}
                                >
                                    WhatsApp
                                </a>
                                <button onClick={() => deleteBooking(booking.id)} style={{
                                    padding: '0.5rem',
                                    backgroundColor: '#fef2f2',
                                    color: '#dc2626',
                                    border: 'none',
                                    borderRadius: '0.5rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }} title="Delete">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
