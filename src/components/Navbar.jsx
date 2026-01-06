import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown, Phone, Car } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <nav
            className={isScrolled ? 'scrolled' : ''}
            style={{
                backgroundColor: isScrolled ? 'var(--color-bg)' : 'transparent',
                backdropFilter: isScrolled ? 'var(--glass-blur)' : 'none',
                borderBottom: isScrolled ? '1px solid var(--color-border)' : 'none',
                boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
                position: 'fixed',
                width: '100%',
                top: '0',
                zIndex: 1000,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                padding: isScrolled ? '10px 0' : '20px 0'
            }}
        >
            {/* Background Gradient for readability on transparent state */}
            {!isScrolled && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '140px',
                    background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.8) 0%, transparent 100%)',
                    zIndex: -1,
                    pointerEvents: 'none'
                }} />
            )}

            <div className="container flex justify-between items-center">
                <Link to="/" style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: isScrolled ? 'var(--color-text)' : 'white',
                    fontFamily: 'var(--font-heading)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    <div style={{ background: 'var(--color-primary)', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Car size={20} color="white" />
                    </div>
                    Best Service Cabs
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu flex gap-md items-center">
                    {navLinks.map((link) => {
                        if (link.children) {
                            return (
                                <div key={link.name} className="dropdown-container" style={{ position: 'relative' }}>
                                    <button
                                        style={{
                                            fontWeight: 600,
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: isScrolled ? 'var(--color-text)' : 'white',
                                            fontSize: '0.9375rem',
                                            opacity: isScrolled ? 1 : 0.9
                                        }}
                                        onMouseEnter={() => setServicesOpen(true)}
                                        onMouseLeave={() => setServicesOpen(false)}
                                    >
                                        {link.name} <ChevronDown size={14} style={{ marginLeft: '4px' }} />
                                    </button>

                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: '50%',
                                            transform: servicesOpen ? 'translateX(-50%) translateY(10px)' : 'translateX(-50%) translateY(20px)',
                                            backgroundColor: 'var(--color-bg)',
                                            border: '1px solid var(--color-border)',
                                            borderRadius: 'var(--radius-md)',
                                            boxShadow: 'var(--shadow-xl)',
                                            minWidth: '220px',
                                            padding: '0.75rem',
                                            opacity: servicesOpen ? 1 : 0,
                                            visibility: servicesOpen ? 'visible' : 'hidden',
                                            transition: 'all 0.3s ease',
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
                                                    padding: '0.75rem 1rem',
                                                    borderRadius: 'var(--radius-sm)',
                                                    color: isActive(child.path) ? 'var(--color-primary)' : 'var(--color-text)',
                                                    fontSize: '0.9rem',
                                                    fontWeight: 500,
                                                    transition: 'var(--transition)'
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
                                    fontWeight: 600,
                                    color: isScrolled ? 'var(--color-text)' : 'white',
                                    fontSize: '0.9375rem',
                                    padding: '0.5rem 0.75rem',
                                    opacity: isScrolled ? (isActive(link.path) ? 1 : 0.8) : (isActive(link.path) ? 1 : 0.9),
                                    transition: 'var(--transition)'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                                onMouseOut={(e) => e.currentTarget.style.color = isScrolled ? 'var(--color-text)' : 'white'}
                            >
                                {link.name}
                            </Link>
                        );
                    })}

                    <div style={{ width: '1px', height: '24px', background: isScrolled ? 'var(--color-border)' : 'rgba(255,255,255,0.2)', margin: '0 10px' }} />

                    <button
                        onClick={toggleTheme}
                        style={{
                            color: isScrolled ? 'var(--color-text)' : 'white',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'var(--transition)'
                        }}
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <a href="tel:+917892665004" className="btn btn-primary" style={{ padding: '0.625rem 1.25rem', fontSize: '0.875rem' }}>
                        <Phone size={16} /> 78926 65004
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} style={{ color: isScrolled ? 'var(--color-text)' : 'white' }}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: isScrolled ? '60px' : '80px',
                    left: 0,
                    right: 0,
                    backgroundColor: 'var(--color-bg)',
                    borderBottom: '1px solid var(--color-border)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    height: '100vh',
                    zIndex: 2000,
                    overflowY: 'auto'
                }}>
                    {navLinks.map((link) => {
                        if (link.children) {
                            return (
                                <div key={link.name}>
                                    <div style={{ fontWeight: 800, marginBottom: '1rem', color: 'var(--color-text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>{link.name}</div>
                                    <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {link.children.map(child => (
                                            <Link
                                                key={child.name}
                                                to={child.path}
                                                onClick={() => setIsOpen(false)}
                                                style={{
                                                    fontSize: '1.125rem',
                                                    fontWeight: 600,
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
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                    color: isActive(link.path) ? 'var(--color-primary)' : 'var(--color-text)',
                                    borderBottom: '1px solid var(--color-border)',
                                    paddingBottom: '0.5rem'
                                }}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </div>
            )}

            <style>{`
        @media (min-width: 1024px) {
          .desktop-menu { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        .dropdown-item:hover {
            background-color: var(--color-bg-alt) !important;
            color: var(--color-primary) !important;
        }
      `}</style>
        </nav>
    );
};

export default Navbar;

