import React, { useState, useEffect } from 'react';
import '../../styles.css';
import './Item.styles.css';
import Header from '../../containers/Header/Header';
import { Link, useParams } from 'react-router-dom';
import { getAllHotels } from '../api/api';
import Loader from '../Loader/Loader';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/actions";


const CartPage = () => {
  const [catalog, setCatalog] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

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

  const handleAddToCart = () => {
    if (selectedItem && quantity > 0) {
      dispatch(addToCart(selectedItem, quantity));
    } else {
      console.error("Selected item is undefined, null, or quantity is invalid");
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (!selectedItem) {
    return (
      <div>
        <Header />
        <div className="main-page">
          <p>Hotel not found.</p>
          <Link to="/catalog">Go back to models</Link>
        </div>
      </div>
    );
  }

  console.log(selectedItem)
  console.log(quantity)

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
            <h2 className="hotel-card-price">{`${selectedItem.price}$`}</h2>
            <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
            <div className='buttons'>
            <Link to="/catalog" className="go_back">
              Go back
            </Link>
            <Link to="/cart" className="add_to_cart" onClick={handleAddToCart}>
                  Add to cart
            </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
