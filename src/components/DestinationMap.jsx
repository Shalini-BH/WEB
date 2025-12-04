import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon missing in React Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const DestinationMap = () => {
    const destinations = [
        { name: 'Bangalore', position: [12.9716, 77.5946], desc: 'Starting Point' },
        { name: 'Mysore', position: [12.2958, 76.6394], desc: 'City of Palaces' },
        { name: 'Ooty', position: [11.4102, 76.6950], desc: 'Queen of Hill Stations' },
        { name: 'Coorg', position: [12.4244, 75.7382], desc: 'Scotland of India' },
        { name: 'Munnar', position: [10.0889, 77.0595], desc: 'Tea Gardens' },
        { name: 'Kochi', position: [9.9312, 76.2673], desc: 'Queen of Arabian Sea' }
    ];

    return (
        <div style={{ height: '400px', width: '100%', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
            <MapContainer center={[11.5, 76.5]} zoom={6} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {destinations.map((dest) => (
                    <Marker key={dest.name} position={dest.position}>
                        <Popup>
                            <strong>{dest.name}</strong> <br /> {dest.desc}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default DestinationMap;
