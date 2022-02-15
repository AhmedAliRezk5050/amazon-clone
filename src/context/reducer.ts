import { Action, ActionTypes, Product, State, BasketItem } from './types';
import produce from 'immer';

export const initialState: State = {
  basket: [],
  user: null,
};

export const getTotalPrice = (basket: BasketItem[]) => {
  return basket.reduce(
    (amount, item) => amount + item.product.price * item.quantity,
    0,
  );
};
export const getBasketProductsCount = (basket: BasketItem[]) => {
  return basket.reduce((amount, item) => amount + item.quantity, 0);
};

const reducer = produce((state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.ADD_TO_BASKET: {
      const pendingAddProduct = action.payload;

      const { basket } = state;

      const basketProduct = basket.find(
        (basketItem) => basketItem.product.id === pendingAddProduct.id,
      );

      if (basketProduct) {
        state.basket = basket.map((basketItem) => {
          if (basketItem.product.id === basketProduct.product.id) {
            basketItem.quantity++;
          }
          return basketItem;
        });
      } else {
        state.basket.push({ product: pendingAddProduct, quantity: 1 });
      }
      return state;
    }
    case ActionTypes.REMOVE_FROM_BASKET: {
      const pendingRemoveProductId = action.payload;

      const { basket } = state;

      const basketProduct = basket.find(
        (basketItem) => basketItem.product.id === pendingRemoveProductId,
      );

      if (basketProduct) {
        state.basket = basket
          .map((basketItem) => {
            if (
              basketItem.product.id === basketProduct.product.id &&
              basketItem.quantity > 0
            ) {
              basketItem.quantity--;
            }
            return basketItem;
          })
          .filter((basketItem) => basketItem.quantity > 0);
      } else {
      }
      return state;
    }
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
