import React, {useState} from 'react';
import Header from '../containers/Header/Header';
import Footer from '../containers/Footer/Footer';
import HotelCard from '../components/HotelCard/HotelCard';
import img1 from '../icons/h_photo1.jpeg';
import img2 from '../icons/h_photo2.jpeg';
import img3 from '../icons/h_photo3.jpeg';
import './Catalog.styles.css'
import Filter from '../components/Filter/Filter';

export const hotelsItemList = [
    {id:1, image: img1, title: "Badrutt’s Palace", description:"Badrutt’s Palace Hotel is a historic luxury hotel located in St. Moritz, Switzerland. The hotel opened in 1896 and has 155 rooms, of which 43 are suites. The hotel is a member of Leading Hotels of the World, Swiss Deluxe Hotels, and Swiss Historic Hotels."},
    {id:2, image: img2, title: "Grand Hotel Tremezzo",
    description: "Grand Hotel Tremezzo is a luxurious hotel located on the shores of Lake Como in Italy. The hotel has 90 rooms. The hotel also has a spa, an outdoor pool, and a private beach."},
    {id:3, image: img3, title: "The Ritz-Carlton",
    description: "The Ritz-Carlton Bali is a luxurious resort located on the southern coast of Bali. The resort features 313 rooms. The resort is located on a cliff overlooking the Indian Ocean, providing stunning views of the ocean and the surrounding landscape."},
    {id:4, image: img1, title: "Badrutt’s Palace", 
    description:"Badrutt’s Palace Hotel is a historic luxury hotel located in St. Moritz, Switzerland. The hotel opened in 1896 and has 155 rooms, of which 43 are suites. The hotel is a member of Leading Hotels of the World, Swiss Deluxe Hotels, and Swiss Historic Hotels."},
    {id:5, image: img2, title: "Grand Hotel Tremezzo",
    description: "Grand Hotel Tremezzo is a luxurious hotel located on the shores of Lake Como in Italy. The hotel has 90 rooms. The hotel also has a spa, an outdoor pool, and a private beach."},
    {id:6, image: img3, title: "The Ritz-Carlton",
    description: "The Ritz-Carlton Bali is a luxurious resort located on the southern coast of Bali. The resort features 313 rooms. The resort is located on a cliff overlooking the Indian Ocean, providing stunning views of the ocean and the surrounding landscape."},
    {id:7, image: img1, title: "Badrutt’s Palace", 
    description:"Badrutt’s Palace Hotel is a historic luxury hotel located in St. Moritz, Switzerland. The hotel opened in 1896 and has 155 rooms, of which 43 are suites. The hotel is a member of Leading Hotels of the World, Swiss Deluxe Hotels, and Swiss Historic Hotels."},
    {id:8, image: img2, title: "Grand Hotel Tremezzo",
    description: "Grand Hotel Tremezzo is a luxurious hotel located on the shores of Lake Como in Italy. The hotel has 90 rooms. The hotel also has a spa, an outdoor pool, and a private beach."},
    {id:9, image: img3, title: "The Ritz-Carlton",
    description: "The Ritz-Carlton Bali is a luxurious resort located on the southern coast of Bali. The resort features 313 rooms. The resort is located on a cliff overlooking the Indian Ocean, providing stunning views of the ocean and the surrounding landscape."}
];

function Catalog() {
    const [filteredHotels, setFilteredHotels] = useState(hotelsItemList);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (query) => {
        setSearchQuery(query);
      };

      const applyFilter = (selectedOptions) => {
        const sortedHotels = [...hotelsItemList]
          .filter((hotel) => hotel.title.toLowerCase().includes(searchQuery.toLowerCase()))
          .sort((a, b) => {
            if (selectedOptions[1] === 'old_to_new') {
              return a.id - b.id; // Sort by ascending order of id (oldest to newest)
            } else if (selectedOptions[1] === 'new_to_old') {
              return b.id - a.id; // Sort by descending order of id (newest to oldest)
            }
    
            const nameA = a.title.toUpperCase();
            const nameB = b.title.toUpperCase();
    
            if (selectedOptions[0] === 'A_to_Z') {
              return nameA.localeCompare(nameB);
            } else if (selectedOptions[0] === 'Z_to_A') {
              return nameB.localeCompare(nameA);
            }
    
            return 0;
          });
    
        setFilteredHotels(sortedHotels);
      };


  return (
    <div>
        <Header/>
        <Filter
        options={[
            [
                {label: 'Name', value: 'Name'},
                {label: 'From A to Z', value: 'A_to_Z'},
                {label: 'From Z to A', value: 'Z_to_A'}
            ],
            [
                {label: 'Date of adding', value: 'date'},
                {label: 'From oldest to newest', value: 'old_to_new'},
                {label: 'From newest to oldest', value: 'new_to_old'}
            ],
        ]} 
        onApplyFilter={applyFilter}
        onSearchChange={handleSearchChange}
        />
        <div className="hotels_list">
        {filteredHotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            id={hotel.id}
            image={hotel.image}
            title={hotel.title}
            description={hotel.description}
          />
        ))}
      </div>
        <Footer/>
    </div>
    );
}

export default Catalog;
