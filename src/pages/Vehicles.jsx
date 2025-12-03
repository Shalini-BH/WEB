import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import sedanImg from '../assets/swift_dzire_white_1764700445755.png';
import suvImg from '../assets/toyota_innova_crysta_white_1764700427526.png';
import tempoImg from '../assets/tempo_traveller_white_1764700327141.png';
import busImg from '../assets/luxury_bus_white_1764700344953.png';

const Vehicles = () => {
    const [selectedType, setSelectedType] = useState('');
    const [selectedVehicle, setSelectedVehicle] = useState('');

    const vehicleTypes = ['Sedan', 'SUV', 'Tempo Traveller', 'Bus'];

    const vehiclesByType = {
        'Sedan': ['Swift Dzire', 'Toyota Etios'],
        'SUV': ['Toyota Innova', 'Innova Crysta', 'Maruti Ertiga'],
        'Tempo Traveller': ['12+1 Tempo Traveller'],
        'Bus': ['Luxury Bus']
    };

    const vehicleCards = [
        { name: 'Sedan', desc: 'Comfortable for small families (4 pax). Swift Dzire, Etios.', img: sedanImg },
        { name: 'SUV', desc: 'Spacious and rugged for hill stations (6-7 pax). Innova, Crysta, Ertiga.', img: suvImg },
        { name: 'Tempo Traveller', desc: 'Perfect for large groups (12+1). AC, Push-back seats.', img: tempoImg },
        { name: 'Bus', desc: 'Available for special occasions and large gatherings. Contact for details.', img: busImg },
    ];

    return (
        <div className="container section">
            <Helmet>
                <title>Vehicle Booking | Best Service Cabs and Travels</title>
                <meta name="description" content="Rent Sedans, SUVs, Tempo Travellers, and Buses. Better rates than Ola/Uber." />
            </Helmet>
            <h1 className="text-center">Vehicle Booking</h1>
            <p className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
                Choose from our wide range of well-maintained vehicles. <br />
                <strong>Pricing varies by distance & date — Call or WhatsApp us for exact fare.</strong>
            </p>

            {/* Quick Booking Dropdown */}
            <div style={{
                maxWidth: '600px',
                margin: '0 auto var(--spacing-2xl)',
                padding: 'var(--spacing-lg)',
                backgroundColor: 'var(--color-background)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
                border: '1px solid var(--color-border)'
            }}>
                <h3 style={{ marginBottom: 'var(--spacing-md)' }}>Quick Book Your Vehicle</h3>
                <div className="flex gap-md" style={{ justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'column' }}>

                    <div className="flex gap-md" style={{ width: '100%', justifyContent: 'center' }}>
                        <select
                            style={{
                                padding: 'var(--spacing-sm) var(--spacing-md)',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--color-border)',
                                fontSize: '1rem',
                                flex: 1
                            }}
                            value={selectedType}
                            onChange={(e) => {
                                setSelectedType(e.target.value);
                                setSelectedVehicle('');
                            }}
                        >
                            <option value="">Select Type...</option>
                            {vehicleTypes.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>

                        <select
                            style={{
                                padding: 'var(--spacing-sm) var(--spacing-md)',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--color-border)',
                                fontSize: '1rem',
                                flex: 1
                            }}
                            value={selectedVehicle}
                            onChange={(e) => setSelectedVehicle(e.target.value)}
                            disabled={!selectedType}
                        >
                            <option value="">Select Vehicle...</option>
                            {selectedType && vehiclesByType[selectedType].map(v => <option key={v} value={v}>{v}</option>)}
                        </select>
                    </div>

                    <a
                        href={`https://wa.me/917892665004?text=Hi, I want to book a ${selectedVehicle || selectedType || 'vehicle'}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ width: '100%', marginTop: 'var(--spacing-md)' }}
                    >
                        Book Now
                    </a>
                </div>
            </div>

            <div className="flex gap-md" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                {vehicleCards.map((v) => (
                    <div key={v.name} style={{
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        flex: '1 1 300px',
                        maxWidth: '400px'
                    }}>
                        <div style={{ height: '200px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                            <img src={v.img} alt={v.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ padding: 'var(--spacing-lg)' }}>
                            <h3>{v.name}</h3>
                            <p style={{ color: 'var(--color-text-light)' }}>{v.desc}</p>
                            <a
                                href={`https://wa.me/917892665004?text=Hi, I want to book a ${v.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ width: '100%', marginTop: 'var(--spacing-md)', textDecoration: 'none' }}
                            >
                                Book via WhatsApp
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Vehicles;
