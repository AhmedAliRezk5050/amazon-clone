import { Action, ActionTypes, Product, State } from './types';
import produce from 'immer';

export const initialState: State = {
  basket: [],
  user: null,
};

export const getTotalPrice = (basket: Product[]) => {
  return basket.reduce((amount, item) => amount + item.price, 0);
};

const reducer = produce((state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.ADD_TO_BASKET:
      state.basket.push(action.payload);
      return state;
    case ActionTypes.REMOVE_FROM_BASKET:
      state.basket = state.basket.filter(
        (product) => product.id !== action.payload,
      );
      return state;
    case ActionTypes.SET_USER:
      state.user = action.payload;
      return state;
    case ActionTypes.REMOVE_USER:
      state.user = null;
      return state;
    default:
      return state;
  }
}, initialState);

export default reducer;
