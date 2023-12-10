import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from './actions';

const initialCartState = {
  cartItems: [],
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const index = state.cartItems.findIndex(item => item.hotel.id === action.payload.hotel.id);
      if (index !== -1) {
        return {
          ...state,
          cartItems: state.cartItems.map((item, i) =>
            i === index ? { ...item, quantity: item.quantity + action.payload.quantity } : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.hotel.id !== action.payload
        ),
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.hotel.id === action.payload.hotelId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
