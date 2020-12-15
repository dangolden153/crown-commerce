import React from 'react'
import {selectCartTotal, selectCartItem} from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import CheckoutItems from '../../component/checkout_Items/checkout_Items.component';
import StripeCheckoutButton from '../../component/strpe/stripe-button.component';
import './checkoutPage.styles.scss';

const CheckoutPage = ({CartItems,Total}) =>(
    <div className="checkoutPage">
        <div className="checkoutHeader">
            <div className="HeaderBlock">
                <span>Product</span>
            </div>
            <div className="HeaderBlock Description">
                <span>Description</span>
            </div>
            <div className="HeaderBlock">
                <span>Quantity</span>
            </div>
            <div className="HeaderBlock">
                <span>Price</span>
            </div>
            <div className="HeaderBlock">
                <span>Remove</span>
            </div>
        </div>
{
    CartItems.map(CartItem=>
    (<CheckoutItems CartItem={CartItem}/>
    ))
}

<div className="total">
<span>Total: ${Total}</span>
</div>
<div className="test_warning">
    *please use the folling test credit card for payment*
    <br/>
    4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
</div>
<StripeCheckoutButton price={Total}/>

    </div>
)

const mapStateToProps = createStructuredSelector({
    CartItems:selectCartItem,
    Total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);