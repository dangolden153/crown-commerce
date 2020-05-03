import React from 'react';
import { connect } from 'react-redux';
import ToggleHiddenCart from '../../redux/cart/cart.action';
import {selectCartItemCounts} from '../../redux/cart/cart.selector';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag-svgrepo-com.svg';
import './cart.styles.scss';

const CartIcon = ({ToggleHiddenCart,ItemCounts})=>(
    <div className="cart-icon" onClick={ToggleHiddenCart}>
        <ShoppingIcon className='shopping-icon' />
        <span className="icon-counts">{ItemCounts}</span>
    </div>
);

const mapStateToProps = (state) => ({
    ItemCounts: selectCartItemCounts(state)
     })
const mapToDispatchProps = Dispatch=>({
    ToggleHiddenCart:()=> Dispatch(ToggleHiddenCart())
})

export default connect(
    mapStateToProps,
    mapToDispatchProps)(CartIcon);





 