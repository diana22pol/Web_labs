import React, {useState, useEffect} from 'react';
import Header from '../containers/Header/Header';
import Footer from '../containers/Footer/Footer';
import HotelCard from '../components/HotelCard/HotelCard';
import img1 from '../icons/h_photo1.jpeg';
import img2 from '../icons/h_photo2.jpeg';
import img3 from '../icons/h_photo3.jpeg';
import './Catalog.styles.css'
import {getAllHotels, getFilteredAndSortedHotels, searchHotelByTitle} from '../components/api/api.js'
import Filter from '../components/Filter/Filter';
import Loader from '../components/Loader/Loader'

function Catalog() {
  const [catalog, setCatalog] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  let [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = async (searchInput) => {
      try {
          const result = await searchHotelByTitle(searchInput);
          console.log(result);
          setSearchResults(result); 
          setCatalog(result)
      } catch (error) {
          console.error('Error handling search:', error);
          // Handle the error, e.g., show an error message to the user
      }
      setSearch(searchInput);
      
  };

  useEffect(()=>{
    const fetchData = async () => {
      setLoading(true);
      const allHotels = await getAllHotels();
      setCatalog(allHotels);
      setLoading(false);
    }
    fetchData();
  },[]);

  const applyFilter = async (selectedOptions) => {
    try {
        const title = selectedOptions[0] === 'A_to_Z' || selectedOptions[0] === 'Z_to_A' ? selectedOptions[0] : '';
        const sortBy = selectedOptions[1] === 'old_to_new' || selectedOptions[1] === 'new_to_old' ? selectedOptions[1] : '';

        const response = await getFilteredAndSortedHotels(
            title,
            sortBy
        );
        console.log(response)
        setCatalog(response.data);
    } catch (error) {
        console.error('Error fetching filtered and sorted helicopters:', error);
    }
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
        {loading ? <Loader/>:catalog.map((hotel) => (
          <HotelCard
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
