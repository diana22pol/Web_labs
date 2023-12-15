import React from 'react';
import './Footer.styles.css';


function Footer() {
    return (
        <div className='footer'>
            <h1>Explore our exquisite collection of hotels for an unforgettable experience.</h1>
            <div className="pages_nav_footer">
                <div className="nav_element"><a href="/">Home</a></div>
                <div className="nav_element"><a href="/catalog">Catalog</a></div>
                <div className="nav_element"><a href="/cart">Cart</a></div>
            </div>
            <div class="running-text-container">
                <div class="running-text" id="runningText">
                    HOTEL    HOTEL  HOTEL   HOTEL   HOTEL    HOTEL   HOTEL  HOTEL   HOTEL   HOTEL    HOTEL  HOTEL   HOTEL   HOTEL 
                </div>
            </div>
        </div>
    );
}

export default Footer;