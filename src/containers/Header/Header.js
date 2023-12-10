import React from 'react';
import '../../styles.css';
import './Header.styles.css';
import hotel_icon from '../../icons/hotel-icon.png';
import PagesNav from '../../components/PagesNav/PagesNav';

function Header() {
  return (
    <div className="header">
      <div className="logo"> <img src={hotel_icon} alt="Hotel Icon" /> </div>
      <PagesNav/>
    </div>
  );
}

export default Header;