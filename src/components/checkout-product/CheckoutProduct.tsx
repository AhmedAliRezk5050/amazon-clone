import './checkout-product.css';
import React, { FC } from 'react';
import { useStateValue } from '../../context/StateProvider';
import { ActionTypes } from '../../context/types';
import StarIcon from '@mui/icons-material/Star';

interface CheckoutProductProps {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
  quantity: number;
}

const CheckoutProduct: FC<CheckoutProductProps> = ({
  id,
  title,
  price,
  rating,
  image,
  quantity,
}) => {
  const [_, dispatch] = useStateValue();
  return (
    <div className='checkoutProduct' key={id}>
      <img src={image} alt='' className='checkoutProduct__image' />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          {Array(rating)
            .fill(0)
            .map((_, index) => (
              <StarIcon key={index} />
            ))}
        </div>
        <div>quantity: {quantity}</div>
        <button
          className='checkoutProduct__button'
          onClick={() =>
            dispatch({
              type: ActionTypes.REMOVE_FROM_BASKET,
              payload: id,
            })
          }
        >
          remove from basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
