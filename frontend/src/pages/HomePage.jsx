// This is the website and what is displayed to the user.
import AboutUs from '../components/AboutUs';
import ServiceBox from '../components/ServiceBox';
import ServiceDetails from '../components/ServiceDetails';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Banner from '../components/Banner';
import { useState } from 'react';
import BookingPopup from '../components/BookingPopup';
import tractor from '../assets/tractor.jpg';
import sheep from '../assets/sheep.jpg';
import haybale from '../assets/haybale.jpg';
import vege from '../assets/vege.jpg';
import games from '../assets/games.jpg';
import chicken from '../assets/chicken.jpg';



const services = [
  { id: 1, title: 'Heavy Machinery', description: 'Ever wondered what it is like to drive a tractor, a harvester or an excavator? Well, wonder no more! This is your chance to try it yourself!', image: tractor },
  { id: 2, title: 'Chickens', description: 'Take care of the chickens with us!', image: chicken},
  { id: 3, title: 'Sheep', description: 'Take care of the sheep with us!', image: sheep},
  { id: 4, title: 'Haybales', description: 'Do some old-school hay work with us! The animals need to eat!', image: haybale},
  { id: 5, title: 'Gardening', description: 'Enjoy fresh produce after gardening activities.', image: vege},
  { id: 6, title: 'Game Combo', description: 'A fun set of games involving different farmhouse activities and tools.', image: games},
];

export default function HomePage() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div>
      <Navbar />
      <Banner />
      <AboutUs />
      <Contact />
      <section id="services">
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
        {selectedService && <BookingPopup service={selectedService} onClose={() => setSelectedService(null)} />}
      </section>
      
      
    </div>
  );
}
