import React from 'react';
import Header from '../containers/Header/Header';
import Footer from '../containers/Footer/Footer';
import HotelCard from '../components/HotelCard/HotelCard';
import img1 from '../icons/h_photo1.jpeg';
import img2 from '../icons/h_photo2.jpeg';
import img3 from '../icons/h_photo3.jpeg';
import './Catalog.styles.css'

function Catalog() {
    const hotelsItemList = [
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
  return (
    <div>
        <Header/>
        <div className="hotels_list">
            {hotelsItemList.map((hotels) => (
                <HotelCard key={hotels.id} image={hotels.image} title={hotels.title} description={hotels.description} />
            ))}
        </div>
        <Footer/>
    </div>
    );
}

export default Catalog;
