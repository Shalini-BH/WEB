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
          </Route>
        </Routes>
      </Router>
    </BookingProvider>
  );
}

export default App;
