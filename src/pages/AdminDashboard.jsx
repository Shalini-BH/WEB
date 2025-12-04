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
            <div className="container section" style={{ maxWidth: '400px', textAlign: 'center', marginTop: '100px' }}>
                <h2>Admin Login</h2>
                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ padding: '0.5rem', fontSize: '1rem' }}
                    />
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }

    return (
        <div className="container section">
            <Helmet>
                <title>Admin Dashboard | Best Service Cabs</title>
            </Helmet>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Lead Dashboard</h1>
                <button onClick={() => setIsAuthenticated(false)} className="btn btn-outline">Logout</button>
            </div>

            {bookings.length === 0 ? (
                <p>No leads found.</p>
            ) : (
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {bookings.map(booking => (
                        <div key={booking.id} style={{
                            padding: '1.5rem',
                            border: '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-md)',
                            backgroundColor: 'var(--color-surface)',
                            boxShadow: 'var(--shadow-sm)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            flexWrap: 'wrap',
                            gap: '1rem'
                        }}>
                            <div>
                                <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--color-primary)' }}>{booking.name}</h3>
                                <p style={{ margin: '0 0 0.5rem 0' }}><strong>Phone:</strong> {booking.phone}</p>
                                <p style={{ margin: '0 0 0.5rem 0' }}><strong>Date:</strong> {booking.date}</p>
                                <p style={{ margin: '0', color: '#666' }}><strong>Message:</strong> {booking.message}</p>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <a href={`tel:${booking.phone}`} className="btn btn-outline" title="Call">
                                    <Phone size={18} />
                                </a>
                                <a
                                    href={`https://wa.me/91${booking.phone}?text=Hi ${booking.name}, received your enquiry regarding: ${booking.message}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                    title="WhatsApp"
                                >
                                    <MessageSquare size={18} />
                                </a>
                                <button onClick={() => deleteBooking(booking.id)} className="btn btn-outline" style={{ color: 'red', borderColor: 'red' }} title="Delete">
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
