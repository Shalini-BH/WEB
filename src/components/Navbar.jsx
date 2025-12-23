import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode');
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        {
            name: 'Services',
            path: '#',
            children: [
                { name: 'Airport Transfer', path: '/services/airport-transfer' },
                { name: 'One Way Cab', path: '/services/one-way-cab' },
                { name: 'Round Trip', path: '/services/round-trip' },
                { name: 'Hourly Rental', path: '/services/hourly-rental' },
            ]
        },
        { name: 'Vehicles', path: '/vehicles' },
        { name: 'Tours', path: '/tours' },
        { name: 'Group Travel', path: '/group-travel' },
        { name: 'Blog', path: '/blog' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav style={{
            backgroundColor: 'var(--color-bg)',
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
                    {navLinks.map((link) => {
                        if (link.children) {
                            return (
                                <div key={link.name} className="dropdown-container" style={{ position: 'relative' }}>
                                    <button
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            fontWeight: 500,
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: 'var(--color-text)',
                                            fontSize: '1rem'
                                        }}
                                        onMouseEnter={() => setServicesOpen(true)}
                                        onMouseLeave={() => setServicesOpen(false)}
                                    >
                                        {link.name} <ChevronDown size={16} style={{ marginLeft: '4px' }} />
                                    </button>

                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: 0,
                                            backgroundColor: 'var(--color-bg)',
                                            border: '1px solid var(--color-border)',
                                            borderRadius: '8px',
                                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                            minWidth: '200px',
                                            padding: '0.5rem 0',
                                            opacity: servicesOpen ? 1 : 0,
                                            visibility: servicesOpen ? 'visible' : 'hidden',
                                            transform: servicesOpen ? 'translateY(0)' : 'translateY(10px)',
                                            transition: 'all 0.2s',
                                        }}
                                        onMouseEnter={() => setServicesOpen(true)}
                                        onMouseLeave={() => setServicesOpen(false)}
                                    >
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                to={child.path}
                                                style={{
                                                    display: 'block',
                                                    padding: '0.5rem 1rem',
                                                    color: isActive(child.path) ? 'var(--color-primary)' : 'var(--color-text)',
                                                    transition: 'background-color 0.2s'
                                                }}
                                                className="dropdown-item"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        }
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                style={{
                                    fontWeight: 500,
                                    color: isActive(link.path) ? 'var(--color-primary)' : 'var(--color-text)'
                                }}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
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
                <button className="mobile-menu-btn" onClick={toggleMenu} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text)' }}>
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
                    backgroundColor: 'var(--color-bg)',
                    borderBottom: '1px solid var(--color-border)',
                    padding: 'var(--spacing-md)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-md)',
                    boxShadow: 'var(--shadow-md)'
                }}>
                    {navLinks.map((link) => {
                        if (link.children) {
                            return (
                                <div key={link.name}>
                                    <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--color-text)' }}>{link.name}</div>
                                    <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {link.children.map(child => (
                                            <Link
                                                key={child.name}
                                                to={child.path}
                                                onClick={() => setIsOpen(false)}
                                                style={{
                                                    fontSize: '1rem',
                                                    color: isActive(child.path) ? 'var(--color-primary)' : 'var(--color-text)'
                                                }}
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )
                        }
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                style={{
                                    fontSize: '1.1rem',
                                    padding: 'var(--spacing-sm) 0',
                                    color: isActive(link.path) ? 'var(--color-primary)' : 'var(--color-text)'
                                }}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
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
        .dropdown-item:hover {
            background-color: var(--color-card-bg-hover, #f3f4f6);
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
