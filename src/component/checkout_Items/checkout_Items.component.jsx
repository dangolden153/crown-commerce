import React from 'react';
import {clearCartItem} from '../../redux/cart/cart.action';
import './checkout_Items.styles.scss'
import {connect} from 'react-redux';
import {removeCartItem} from '../../redux/cart/cart.action'
import { AddItem} from '../../redux/cart/cart.action'

const CheckoutItems  =({CartItem,clearItems,removeItem, addItem }) =>{
    const {name,price,imageUrl,quantity} = CartItem
    return (
<div className="checkout_Items">
    <div className="img_container">
        <img src={imageUrl} alt="img"/>
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
    <div className="arrow" onClick={() => removeItem(CartItem)}>&#10094;</div>
    <span className="value">{quantity}</span>
    <div className="arrow" onClick={() => addItem(CartItem)}>&#10095;</div>
    </span>
     <span className="price">${price}</span>
    <span className="remove_button" 
    onClick={() => clearItems(CartItem)} >&#10005;</span>

</div>
)};

const mapDispatchToProps = Dispatch =>({
    clearItems: item => Dispatch(clearCartItem(item)),
    removeItem: item=> Dispatch(removeCartItem(item)),
    addItem: item => Dispatch(AddItem(item))
})

export default connect(
    null,
    mapDispatchToProps )(CheckoutItems);