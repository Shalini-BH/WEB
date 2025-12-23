import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import Tours from './pages/Tours';
import GroupTravel from './pages/GroupTravel';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import { BookingProvider } from './context/BookingContext';
import AirportTransfer from './pages/services/AirportTransfer';
import OneWayCab from './pages/services/OneWayCab';
import HourlyRental from './pages/services/HourlyRental';
import RoundTrip from './pages/services/RoundTrip';

function App() {
  return (
    <BookingProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="tours" element={<Tours />} />
            <Route path="group-travel" element={<GroupTravel />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="admin" element={<AdminDashboard />} />

            {/* Service Routes */}
            <Route path="services/airport-transfer" element={<AirportTransfer />} />
            <Route path="services/one-way-cab" element={<OneWayCab />} />
            <Route path="services/hourly-rental" element={<HourlyRental />} />
            <Route path="services/round-trip" element={<RoundTrip />} />
          </Route>
        </Routes>
      </Router>
    </BookingProvider>
  );
}

export default App;
