import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CheckoutForm.css';
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      console.log('First name:', event.target.firstName.value);
      console.log('Last name:', event.target.lastName.value);
      console.log('Delivery address:', event.target.deliveryAddress.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Prénom :
        <input type="text" name="firstName" required />
      </label>
      <label>
        Nom :
        <input type="text" name="lastName" required />
      </label>
      <label>
        Adresse de livraison :
        <input type="text" name="deliveryAddress" required />
      </label>
      <CardElement />
      <button2 type="submit" disabled={!stripe}>
        Payer
      </button2>
    </form>
  );
};

export default CheckoutForm;