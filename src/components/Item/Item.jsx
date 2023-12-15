import React, { useState, useEffect } from 'react';
import '../../styles.css';
import './Item.styles.css';
import Header from '../../containers/Header/Header';
import { Link, useParams } from 'react-router-dom';
import { getAllHotels } from '../api/api';
import Loader from '../Loader/Loader';

const CartPage = () => {
  const [catalog, setCatalog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const allHotels = await getAllHotels();
      setCatalog(allHotels);
      setLoading(false);
    };

    fetchData();
  }, []);

  const { id: idFromParams } = useParams();
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    const item = catalog.find((item) => item.id === parseInt(idFromParams));
    setSelectedItem(item || {});
  }, [catalog, idFromParams]);

  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <div className="hotel-card">
          <img src={selectedItem.image} alt={selectedItem.title} className="hotel-card-image" />
          <div className="hotel-card-content">
          <h2 className="hotel-card-title">{`${selectedItem.title}`}</h2>
          <p className="hotel-card-description">{selectedItem.description}</p>
          <Link to="/catalog" className="go_back">
            Go back
          </Link>
          <button className="add_to_cart">Add to cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
