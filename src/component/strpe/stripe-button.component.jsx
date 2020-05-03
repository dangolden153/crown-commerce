import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = 100 * price;
    const publishableKey = 'pk_test_UJCLMXYBslRt5BcXCMZDdQGA00UKkDcXOi';

const onToken = token =>{
    console.log(token)
    alert ('your payment is successful')
}
    return (
        <StripeCheckout
        label ='Pay Now'
        name = 'Dangolden Clothing Ltd'
        billingAddress
        shippingAddress
        image='http://svgshare.com/i/CUz.svg'
        description = {`your is $${price}`}
        amount = {priceForStripe}
        panelLabel ='Pay Now'
        token={onToken}
        stripeKey ={publishableKey}
        />
    )

}

export default StripeCheckoutButton