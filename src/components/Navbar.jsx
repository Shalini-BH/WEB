import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode');
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Vehicles', path: '/vehicles' },
        { name: 'Tours', path: '/tours' },
        { name: 'Group Travel', path: '/group-travel' },
        { name: 'Blog', path: '/blog' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav style={{
            backgroundColor: 'white',
            borderBottom: '1px solid var(--color-border)',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            <div className="container flex justify-between items-center" style={{ height: '70px' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                    Best Service Cabs
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu flex gap-md items-center" style={{ display: 'none' }}>
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.path} style={{ fontWeight: 500 }}>
                            {link.name}
                        </Link>
                    ))}
                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--color-text)',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        title="Toggle Dark Mode"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '70px',
                    left: 0,
                    right: 0,
                    backgroundColor: 'white',
                    borderBottom: '1px solid var(--color-border)',
                    padding: 'var(--spacing-md)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-md)',
                    boxShadow: 'var(--shadow-md)'
                }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            style={{ fontSize: '1.1rem', padding: 'var(--spacing-sm) 0' }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        onClick={() => {
                            toggleTheme();
                            setIsOpen(false);
                        }}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--color-text)',
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '1.1rem',
                            padding: 'var(--spacing-sm) 0',
                            textAlign: 'left'
                        }}
                    >
                        {isDarkMode ? (
                            <>
                                <Sun size={20} style={{ marginRight: '10px' }} /> Light Mode
                            </>
                        ) : (
                            <>
                                <Moon size={20} style={{ marginRight: '10px' }} /> Dark Mode
                            </>
                        )}
                    </button>
                </div>
            )}

            <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
