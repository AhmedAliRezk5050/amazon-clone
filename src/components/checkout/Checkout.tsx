import './checkout.css';
import React from 'react';
import { useStateValue } from '../../context/StateProvider';
import { ActionTypes } from '../../context/types';
import CheckoutProduct from '../checkout-product/CheckoutProduct';
import Subtotal from '../subtotal/Subtotal';

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      {basket.length === 0 ? (
        <div className=''>
          <h2>Your Shopping Basket is empty</h2>
          <p>
            You have no items in your basket. To buy one or more items, click
            "Add to basket" next to the item.
          </p>
        </div>
      ) : (
        <>
          <div className='checkout__leftSide'>
            <img
              src='https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2021/img/Events/XCM_Manual_1399236_4403323_Egypt_EOYS_EG_ILM_Desktop_ArabBank_en_2x_650x45_1X._CB649085097_.jpg'
              alt=''
              className='checkout__ad'
            />
            <h2 className='checkout__title'>Your Shopping Basket</h2>

            {basket.map((item) => (
              <CheckoutProduct
                {...item.product}
                quantity={item.quantity}
                key={item.product.id}
              />
            ))}
          </div>
          <div className='checkout__rightSide'>
            <Subtotal />
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
