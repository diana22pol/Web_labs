export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

export const addToCart = (hotel, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: { hotel, quantity },
  };
};

export const removeFromCart = (hotelId) => ({
  type: REMOVE_FROM_CART,
  payload: hotelId,
});

export const updateQuantity = (hotelId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { hotelId, quantity },
});