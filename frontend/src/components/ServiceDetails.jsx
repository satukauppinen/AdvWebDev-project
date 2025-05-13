// The more detailed info for each service, including the image and description, is displayed in a separate component.
import './ServiceDetails.css';

export default function ServiceDetails({ service, onBook }) {
  return (
    <div id={`service-${service.id}`} className="service-details-container">
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
