import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../containers/Header/Header';
import Footer from '../containers/Footer/Footer';
import { removeFromCart, updateQuantity } from '../redux/actions';
import HotelCardCart from '../components/HotelCardCart/HotelCardCart';
import './CartPage.styles.css'

const FinalCartPage = ({itemId}) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (hotelId, newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(updateQuantity(hotelId, newQuantity));
    }
  };

  const totalPrice = cartItems.reduce((total, item) => {
    if (item.hotel && typeof item.hotel.price === 'number') {
      return total + item.quantity * item.hotel.price;
    }
    return total;
  }, 0);

  return (
      <div>
          <Header />
          <div className="cart-page">
              <h1>Shopping Cart</h1>
              <a href='/catalog'>	&#8592; Back to catalogue</a>
              <ul className="cart-items-list">
              {cartItems.map((item, id) => (
              
              <li key={id} className="cart-item">
              
                {item.hotel && item.hotel.id && (
                  <HotelCardCart
                    id={item.hotel.id}
                    image={item.hotel.image}
                    title={item.hotel.title}
                    price={`${item.hotel.price}$`}
                  />
                )}
                <div className='action-panel'>
                  <div className='cart-quantity'>
                    <button onClick={() => handleQuantityChange(item.hotel.id, item.quantity - 1)}>-</button>
                    <input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(item.hotel.id, parseInt(e.target.value))} />
                    <button onClick={() => handleQuantityChange(item.hotel.id, item.quantity + 1)}>+</button>
                  </div>
                  {item.hotel && typeof item.hotel.price === 'number' && (
                    <p>Price: {item.hotel.price * item.quantity}$</p>
                  )}
                  <button onClick={() => handleRemoveFromCart(item.hotel.id)}>
                    Remove from cart
                  </button>
                </div>
               </li>
                ))}
              </ul>
              <div className='total_amount'>
                <p>Total price: {totalPrice}$</p>
              </div>
          </div>
          <Footer />
      </div>
  );
};

export default FinalCartPage;
