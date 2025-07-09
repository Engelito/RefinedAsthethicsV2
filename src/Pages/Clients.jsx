import React from 'react';
import './ClientCard.css'; // We'll create this next

function ClientCard({ beforeImage, afterImage, name, testimonial }) {
  return (
    <div className="client-card">
      <div className="client-images">
        <div className="client-image-container">
          <img src={beforeImage} alt={`${name} before`} className="client-image" />
          <span className="image-label">Before</span>
        </div>
        <div className="client-image-container">
          <img src={afterImage} alt={`${name} after`} className="client-image" />
          <span className="image-label">After</span>
        </div>
      </div>
      <div className="client-info">
        <h3 className="client-name">{name}</h3>
        <p className="client-testimonial">"{testimonial}"</p>
      </div>
    </div>
  );
}

export default ClientCard;