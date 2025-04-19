export default function ServiceDetails({ service, onBook }) {
    return (
      <div className="service-detail">
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        <button onClick={onBook}>Book Now</button>
      </div>
    );
  }
  