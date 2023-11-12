import React from 'react';
import '../../styles.css';
import './ViewAllButton.styles.css';

function ViewAllButton() {
    return (
        <div className='view_all'><button className='view_all_hotels'><a href='/catalog'>View all</a></button></div>
    );
}

export default ViewAllButton;