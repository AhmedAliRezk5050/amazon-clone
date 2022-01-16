import './subtotal.css';
import React from 'react';
import * as CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../context/StateProvider';
import {getTotalPrice} from "../../context/reducer";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat.default
        className='subtotal__price'
        value={getTotalPrice(basket)}
        renderText={(formattedValue) => (
          <div>
            <span>Subtotals({basket.length} items):</span>{' '}
            <strong>{formattedValue}</strong>
          </div>
        )}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <div className='subtotal__input'>
        <input type='checkbox' name='gift' id='gift' />
        <label htmlFor='gift'>This order contains a gift</label>
      </div>
      <button className='subtotal__button'>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
