import React from 'react';

import CartItem from '../cart-Items/cart-Items.component';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {selectCartItem} from '../../redux/cart/cart.selector'
import {withRouter} from 'react-router-dom'
import ToggleHiddenCart from '../../redux/cart/cart.action';
import './cart-drop-down.styles.scss';

const CartDrop = ({CartItems ,history , dispatch}) => (
    <div className="cart-dropdown">
        <div  className="cart-item">
    {
      CartItems.length ?  
    ( CartItems.map(cartitem => (<CartItem key={cartitem.id} item={cartitem}/>))
   )
     :
    (<span className ="CartItems-text"> Your cart items is empty</span>
)
    }
        </div>
<CustomButton className='btn' onClick={()=>{ 
    history.push('/CheckoutPage')
    dispatch(ToggleHiddenCart())
}}>GO TO CHECK OUT</CustomButton>
    </div>
);


const mapDispatchToProps = (state) =>({
    CartItems:selectCartItem(state)
})
 

export default withRouter(connect(mapDispatchToProps)(CartDrop));