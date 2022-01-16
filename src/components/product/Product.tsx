import { FC, useReducer } from 'react';
import './product.css';
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from '../../context/StateProvider';
import { ActionTypes } from '../../context/types';

interface ProductProps {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
}

const Product: FC<ProductProps> = ({ id, title, price, rating, image }) => {
  const [state, dispatch] = useStateValue();
  return (
    <div className='product'>
      <div className='product__info'>
        <p className='product__title'>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill(0)
            .map((_, index) => (
              <StarIcon key={index} />
            ))}
        </div>
      </div>
      <img src={image} alt='' className='product__image' />
      <button
        className='product__button'
        onClick={() => {
          dispatch({
            type: ActionTypes.ADD_TO_BASKET,
            payload: { id, title, price, rating, image },
          });
        }}
      >
        Add To Basket
      </button>
    </div>
  );
};

export default Product;
