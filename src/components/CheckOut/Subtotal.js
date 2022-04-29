import React from 'react'
import { useStateValue } from '../../StateProvider';
import './Subtotal.css'
import NumberFormat from 'react-number-format';
import { getBasketTotal } from '../../reducer';
import { useNavigate   } from 'react-router-dom'

const Subtotal = () => {
    const navigate = useNavigate();
    const [{basket}, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
        <NumberFormat
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            decimalScale={2}
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className='subtotal_gift'>
                        <input type='checkbox' /> This order contains a gift
                    </small>
                </>
               
            )}
        />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal