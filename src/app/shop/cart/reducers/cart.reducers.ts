import { CartActionTypes } from '../actions/cart.actions';

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case CartActionTypes.ADD:
      return [...state, action.payload];
    case CartActionTypes.REMOVE:
      return state.filter(cart => cart.id !== action.payload.id);
    default:
      return state;
  }
};


