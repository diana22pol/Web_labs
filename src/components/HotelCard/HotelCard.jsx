import React from 'react';
import '../../styles.css';
import './HotelCard.styles.css';

function HotelCard(props) {
  return (
    <div className="info-card">
      <img src={props.image} alt={props.title} className="info-card-image" />
      <div className="info-card-content">
        <h2 className="info-card-title">{props.title}</h2>
        <p className="info-card-description">{props.description}</p>
      </div>
    </div>
  );
}

export default HotelCard;
