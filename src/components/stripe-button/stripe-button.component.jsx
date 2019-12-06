import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    /**
     * Default Test Credit Card that Stripe gives us to test our App:
     * 4242 4242 4242 4242
     * Exp: 01/20
     * CW: 123
     */
    const priceForStripe = price * 100; // Stripe wants the price in cents
    const publishableKey = 'pk_test_1pFoHKC1VtSTSzB8t06pbZZs00blJhpCCq';

    /**
     * function that takes a token and logs it out. Will pass token to the backend to process payment
     * but won't do that here
     */
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name={`Kessri's Oven`}
            billingAddress
            shippingAddress
            image='https://i.ibb.co/5T8ZsR3/main-Logo-svg.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey} />
    )
};

export default StripeCheckoutButton;
