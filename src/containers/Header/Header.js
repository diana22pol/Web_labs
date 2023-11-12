import React from 'react';
import '../../styles.css';
import './Header.styles.css';
import hotel_icon from '../../icons/hotel-icon.png';

function Header() {
  return (
    <div className="header">
      <div className="logo"> <img src={hotel_icon} alt="Hotel Icon" /> </div>
      <div className="pages_nav">
        <div className="nav_element">Home</div>
        <div className="nav_element">Catalog</div>
        <div className="nav_element">Cart</div>
      </div>
    </div>
  );
}

export default Header;