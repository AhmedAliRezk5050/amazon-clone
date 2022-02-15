import { FC, useReducer } from 'react';
import './product.css';
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from '../../context/StateProvider';
import { ActionTypes, Product as ProductProps } from '../../context/types';

const Product: FC<ProductProps> = ({ id, title, price, rating, image }) => {
  const [state, dispatch] = useStateValue();
  return (
    <div className='product'>
      <div className='product__info'>
        <h4 className='product__title'>
          {title.length > 3 ? title.slice(0, 30) + ' ...' : title}
        </h4>
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
      {state.user && (
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
      )}
    </div>
  );
};

export default Product;
