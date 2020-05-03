import CartActionTypes from './cart.type';

const ToggleHiddenCart = ()=>({
    type:CartActionTypes.TOGGLE_HIDDEN_CART
})

export const AddItem = item=>({
    type:CartActionTypes.CART_ADD_ITEMS,
    payload:item
})


export const clearCartItem = item =>({
    type:CartActionTypes.CLEAR_CART_ITEM,
    payload: item
})

export const removeCartItem = item =>({
    type:CartActionTypes.REMOVE_CART_ITEM,
    payload:item
})

export default ToggleHiddenCart  ;