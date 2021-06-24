import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_51J5ysxAMgPAgwpLZkn4Oj2hW6mcD2ghxXAnm28nG6qJgvQfT9bvm4giLnHi8kUPu8riltntHidt4zNyTIW6XMJ8C00BkpSOjok';

    const onToken = token => {
        console.log(token);
        alert("Payment Succesful");
    }

    return(
        <StripeCheckout
            label="Pay Now"
            name="ShopMock"
            billingAddress
            shippingAddress
            image="https://stripe.com/img/documentation/checkout/marketplace.png"
            description={`Your Total Is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;