import React from 'react';
import '../../styles.css';
import './CardsContainer.styles.css';
import '../../components/HotelCard/HotelCard';
import HotelCard from '../../components/HotelCard/HotelCard';
import img1 from '../../icons/h_photo1.jpeg';
import img2 from '../../icons/h_photo2.jpeg';
import img3 from '../../icons/h_photo3.jpeg';


function Cardscontainer() {
    return (
        <div className='cards_container'>
            <div className='cards_block'>
                <HotelCard
                    image= {img1}
                    title="Badrutt’s Palace"
                    description="Badrutt’s Palace Hotel is a historic luxury hotel 
                                located in St. Moritz, Switzerland. The hotel opened 
                                in 1896 and has 155 rooms, of which 43 are suites. 
                                The hotel is a member of Leading Hotels of the World, 
                                Swiss Deluxe Hotels, and Swiss Historic Hotels."/>
                <HotelCard
                    image= {img2}
                    title="Grand Hotel Tremezzo"
                    description="Grand Hotel Tremezzo is a luxurious hotel located on
                                the shores of Lake Como in Italy. 
                                The hotel has 90 rooms. The hotel also has a spa, 
                                an outdoor pool, and a private beach."/>
                <HotelCard
                    image= {img3}
                    title="The Ritz-Carlton"
                    description="The Ritz-Carlton Bali is a luxurious resort located on 
                                the southern coast of Bali. The resort features 313 rooms. 
                                The resort is located on a cliff overlooking the 
                                Indian Ocean, providing stunning views of the ocean and 
                                the surrounding landscape."/>
            </div>
            <div className='view_all'><button className='view_all_hotels'>View all</button></div>
        </div>
    
    );
}

export default Cardscontainer;