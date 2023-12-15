import React from 'react';
import '../../styles.css';
import './ViewAllButton.styles.css';

function ViewAllButton({ showMoreHotels, onClick }) {
  return (
    <div className='view_all'>
      <button className='view_all_hotels' onClick={onClick}>
        {showMoreHotels ? 'View Less' : 'View More'}
      </button>
    </div>
  );
}

export default ViewAllButton;
