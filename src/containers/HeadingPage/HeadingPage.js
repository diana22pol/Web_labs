import React from 'react';
import '../../styles.css';
import './HeadingPage.styles.css';
import hotel_icon from '../../icons/hotel-icon.png';

function HeadingPage() {
    return (
        <div className='heading_page_container'>
            <div className="icon"> <img src={hotel_icon} alt="Hotel Icon" /> </div>
            <div className='heading_text_block'>
                <h1>Hotels Platform</h1>
                <p>This is a platfort with base of hotels. 
                   Here you can view, add, edit and delete hotels. 
                   Also, you can make a filter and book some hotel.</p>
            </div>
        </div>
    );
}

export default HeadingPage;