import './ServiceBox.scss';
export default function ServiceBox({ service, onBook }) {
    return (
      <div className="service-box">
        <h3>{service.title}</h3>
        <button onClick={onBook}>Book</button>
      </div>
    );
  }
  