import './ServiceDetails.css';

export default function ServiceDetails({ service, onBook }) {
  return (
    <div className="service-details-container">
      <div className="service-details" style={{ backgroundImage: `url(${service.image})` }}>
        <div className="details-box">
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <button onClick={onBook}>Book Now</button>
        </div>
      </div>
    </div>
  );
}
