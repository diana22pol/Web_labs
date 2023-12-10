import React, { useState, useEffect } from 'react';
import '../../styles.css';
import './CardsContainer.styles.css';
import HotelCardWithoutButton from '../../components/HotelCardWithoutButton/HotelCardWithoutButton';
import ViewAllButton from '../../components/ViewAllButton/ViewAllButton';
import { getAllHotels } from '../../components/api/api';
import Loader from '../../components/Loader/Loader';

const initialDisplayCount = 3;
const additionalDisplayCount = 3;

function Cardscontainer() {
  const [hotels, setHotels] = useState([]);
  const [showMoreHotels, setShowMoreHotels] = useState(false);
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [loading, setLoading] = useState(true);
  
  const handleClick = () => {
    setShowMoreHotels((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getAllHotels();
        setHotels(response);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  const handleViewButtonClick = () => {
    if (displayCount === initialDisplayCount) {
      setDisplayCount(displayCount + additionalDisplayCount);
    } else {
      setDisplayCount(initialDisplayCount);
    }
  };

  return (
    <div className='cards_container'>
      <div className='cards_block'>
        {loading ? <Loader/>:hotels.slice(0, displayCount).map((hotel) => (
          <HotelCardWithoutButton
            key={hotel.id}
            image={hotel.image}
            title={hotel.title}
            price={`${hotel.price}$`}
            description={hotel.description}
          />
        ))}
      </div>
      <ViewAllButton onClick={handleClick} onViewButtonClick={handleViewButtonClick} showMoreHotels={showMoreHotels} />
    </div>
  );
}

export default Cardscontainer;
