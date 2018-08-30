import { ProductsActionTypes } from '../actions/products.actions';

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case ProductsActionTypes.ADDPRODUCT:
    return state;
    default:
      return state;
  }
};


