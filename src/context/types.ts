import { User } from 'firebase/auth';

export interface State {
  basket: BasketItem[];
  user: User | null;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
}

export interface BasketItem {
  product: Product;
  quantity: number;
}

export enum ActionTypes {
  ADD_TO_BASKET = 'ADD_TO_BASKET',
  REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET',
  SET_USER = 'SET_USER',
  REMOVE_USER = 'REMOVE_USER',
}

interface AddToCartAction {
  type: ActionTypes.ADD_TO_BASKET;
  payload: Product;
}
interface RemoveFromCartAction {
  type: ActionTypes.REMOVE_FROM_BASKET;
  payload: string;
}

interface SetUser {
  type: ActionTypes.SET_USER;
  payload: User;
}

interface RemoveUser {
  type: ActionTypes.REMOVE_USER;
}

export type Action =
  | AddToCartAction
  | RemoveFromCartAction
  | SetUser
  | RemoveUser;

export const setUser = (user: User): SetUser => ({
  type: ActionTypes.SET_USER,
  payload: user,
});
export const removeUser = (): RemoveUser => ({
  type: ActionTypes.REMOVE_USER,
});
