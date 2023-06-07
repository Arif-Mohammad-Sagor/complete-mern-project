import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckOutForm';
import useCart from '../../../hooks/useCart';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';

const Payment = () => {
  const [cart] = useCart();
  const { user,loading } = useContext(AuthContext);
  console.log(user);
  if (loading) {
     return <progress className="progress w-56"></progress>;
}
 
  const total = cart.data?.reduce((sum, item) => item.price + sum, 0);
  const price = parseInt(total.toFixed(2));
  console.log(cart.data, price);



  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHED_KEY);


  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm cart={cart.data} price={price} />
    </Elements>
  );
}

export default Payment