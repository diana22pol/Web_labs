import React from 'react';
import '../../styles.css';
import './PagesNav.styles.css';


function PagesNav() {
    return (
        <div className="pages_nav">
            <nav>
                <div className="nav_element"><a href="/">Home</a></div>
                <div className="nav_element"><a href="/catalog">Catalog</a></div>
                <div className="nav_element"><a href="/cart">Cart</a></div>
            </nav>
        </div>
    );
}

export default PagesNav;
