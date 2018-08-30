import { SearchActionTypes } from '../actions/search.actions';

export const searchReducer = (state = [], action) => {
  switch (action.type) {
    case SearchActionTypes.SEARCH:
      console.log('reducer', action.payload);
      return action.payload;
    default:
      return state;
  }
};


