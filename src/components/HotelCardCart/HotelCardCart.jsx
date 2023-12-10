import React, { useState } from 'react';
import '../../styles.css';
import './HotelCardCart.styles.css';
import { Link, useParams } from 'react-router-dom';

function HotelCardCart(props) {
  return (
    <div className="cart-card">
      <img src={props.image} alt={props.title} className="cart-card" />
      <div className="cart-card-content">
        <div>
          <h2 className="cart-card-title">{props.title}</h2>
          <h2 className="cart-card-price">{props.price}</h2>
        </div>
      </div>
    </div>
  );
}

export default HotelCardCart;
