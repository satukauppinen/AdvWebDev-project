import AboutUs from '../components/AboutUs';
import ServiceBox from '../components/ServiceBox';
import ServiceDetails from '../components/ServiceDetails';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import { useState } from 'react';
import BookingPopup from '../components/BookingPopup';

const services = [
  { id: 1, title: 'Heavy Machinery', description: 'Ever wondered what it is like to drive a tractor, a harvester or an excavator? Well, wonder no more! This is your chance to try it yourself!' },
  { id: 2, title: 'Chickens', description: 'Take care of the chickens with us!' },
  { id: 3, title: 'Sheep', description: 'Take care of the sheep with us!' },
  { id: 4, title: 'Haybales', description: 'Do some old-school hay work with us! The animals need to eat!' },
  { id: 5, title: 'Game Combo', description: 'A fun set of games involving different farmhouse activities and tools.' },
  { id: 6, title: 'Big Combo', description: 'A combination set of all or chosen activities and games.' },
];

export default function HomePage() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div>
      <Navbar />
      <AboutUs />
      <section className="services">
        <div className="service-grid">
          {services.map(service => (
            <ServiceBox key={service.id} service={service} onBook={() => setSelectedService(service)} />
          ))}
        </div>
        <div className="service-details">
          {services.map(service => (
            <ServiceDetails key={service.id} service={service} onBook={() => setSelectedService(service)} />
          ))}
        </div>
      </section>
      {selectedService && <BookingPopup service={selectedService} onClose={() => setSelectedService(null)} />}
        <Contact />
    </div>
  );
}
