import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CheckoutForm.css';
const CheckoutForm = () => {
  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    lastName: '',
    deliveryAddress: ''
  });
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (event) => {
    setBillingDetails({ ...billingDetails, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }        
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: `${billingDetails.firstName} ${billingDetails.lastName}`,
        address: {
          line1: billingDetails.deliveryAddress,
          // Ajoutez d'autres détails d'adresse si nécessaire
        },
      },
    });

    if (error) {
      console.log('[error]', error);
      // Gérez les erreurs ici (par exemple, affichez-les à l'utilisateur)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Envoyez paymentMethod.id et d'autres détails à votre serveur pour traiter le paiement
    }
  };
  const CartForm = ({ cartItem }) => {
    const [totalPrice, setTotalPrice] = useState(0);
  
    useEffect(() => {
      // Calcule le prix total chaque fois que les articles du panier changent
      const price = cartItem.reduce((acc, item) => acc + item.price, 0);
      setTotalPrice(price);
    }, [cartItem]);
  
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ margin: '0 auto' }}> {/* Déplacer vers la gauche et en bas */}
          <input type="text" placeholder="Prénom" />
          {/* ...autres champs... */}
          <button>Payer</button>
        </div>
        <div>
          {/* Ici, vous pouvez styliser comme vous le souhaitez */}
          <p>Total du panier: {totalPrice.toFixed(2)} €</p>
        </div>
      </div>
    );
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={billingDetails.firstName}
        onChange={handleChange}
        placeholder="Prénom"
        required
      />
      <input
        type="text"
        name="lastName"
        value={billingDetails.lastName}
        onChange={handleChange}
        placeholder="Nom"
        required
      />
      <input
        type="text"
        name="deliveryAddress"
        value={billingDetails.deliveryAddress}
        onChange={handleChange}
        placeholder="Adresse de livraison"
        required
      />
      <CardElement />
      <button2 type="submit" disabled={!stripe}>
        Payer
      </button2>
    </form>
  );
};

export default CheckoutForm;
