import React, { useState } from 'react'
import CheckOutProduct from '../CheckOut/CheckOutProduct';
import { useStateValue } from '../../StateProvider';
  import "react-square-payment-form/lib/default.css";
import './Payment.css'
import SquarePaymentForm, 
{ CreditCardCVVInput, CreditCardExpirationDateInput, CreditCardNumberInput, CreditCardPostalCodeInput, CreditCardSubmitButton } from 'react-square-payment-form';
import { Link } from 'react-router-dom';

const Payment = () => {
    const [{basket, user}, dispatch] = useStateValue();
    const [state, setState] = useState({
        error: null,
        disabled: false,
        postData: {
            name: '',
            email: '',
            deliveryMethod: 'fastest',
        },
    });

    const cardNonceResponseReceived =(
        errors,
        nonce,
        cardData,
        buyerVerificationToken
      ) => {
        if (errors) {
          setState({ errorMessages: errors.map(error => error.message) });
          return;
        }
    
        setState({ errorMessages: [] });
        alert(
          "nonce created: " +
            nonce +
            ", buyerVerificationToken: " +
            buyerVerificationToken
        );
      };
      const createVerificationDetails =() => {
        return {
          amount: "100",
          currencyCode: "USD",
          intent: "CHARGE",
          billingContact: {
            familyName: "Smith",
            givenName: "John",
            email:  "jsmith@example.com"} ,
            country: "GB",
            city: "London",
            addressLines: ["1235 Emperor's Gate"],
            postalCode: "SW7 4JA",
            phone: "020 7946 0532"
          }
        };
  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>
                Checkout (<Link to="/checkout">{basket.length} items</Link>)
            </h1>

            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment_items'>
                    {basket.map((item) => (
                        <CheckOutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment Method</h3>
                </div>
                <SquarePaymentForm
                sandbox={true}
                applicationId="sandbox-sq0idb-O7JFjK7iEtBT9dhwy2-tMw"
                locationId="L2BDXTK6KRN2Z"
                cardNonceResponseReceived={cardNonceResponseReceived}
                createVerificationDetails={createVerificationDetails}
                >
                <fieldset className="sq-fieldset">
                <CreditCardNumberInput />

                <div className="sq-form-third">
                <CreditCardExpirationDateInput />
                </div>

                <div className="sq-form-third">
                <CreditCardPostalCodeInput />
                </div>

                <div className="sq-form-third">
                <CreditCardCVVInput />
                </div>
                </fieldset>

                <CreditCardSubmitButton>Pay</CreditCardSubmitButton>
                </SquarePaymentForm>
            </div>
        </div>
    </div>
  )
}

export default Payment