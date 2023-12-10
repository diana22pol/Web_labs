import React, { useState } from 'react';
import '../../styles.css';
import './HotelCard.styles.css';
import { Link, useParams } from 'react-router-dom';

function HotelCardWithoutButton(props) {
  return (
    <div className="info-card">
      <img src={props.image} alt={props.title} className="info-card-image" />
      <div className="info-card-content">
        <div>
          <h2 className="info-card-title">{props.title}</h2>
          <h2 className="info-card-price">{props.price}</h2>
          <p className="info-card-description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default HotelCardWithoutButton;