import React from 'react';
import '../../styles.css';
import './ViewAllButton.styles.css';

function ViewAllButton({ showMoreHotels, onClick, onViewButtonClick }) {
  return (
    <div className='view_all'>
      <button className='view_all_hotels' onClick={() => { onClick(); onViewButtonClick(); }}>
        {showMoreHotels ? 'View Less' : 'View More'}
      </button>
    </div>
  );
}

export default ViewAllButton;
