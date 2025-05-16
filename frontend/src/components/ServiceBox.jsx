//Small "preview" boxes for each service
import './ServiceBox.scss';

export default function ServiceBox({ service, onBook }) {
    return (
      <div className="service-box">
        <img src={service.image} alt={service.title} className="service-image"/>
        
        
        <h3>
          <a href={`#service-${service.id}`} className="service-title">
            {service.title}
          </a>
        </h3>
      </div>
    );
  }
  