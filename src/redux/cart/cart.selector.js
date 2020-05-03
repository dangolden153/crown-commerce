import {createSelector} from 'reselect';


const selectCart = state => state.cart

export const selectCartItem = createSelector(
    [selectCart],
    cart => cart.CartItems
)

export const selectCartHiddden = createSelector (
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemCounts = createSelector(
    [selectCartItem],
    CartItems =>  CartItems.reduce((accunulatedQuantity, CartItem )=>
    accunulatedQuantity + CartItem.quantity , 0) 
)

export const selectCartTotal = createSelector (
    [selectCartItem],
    CartItems => CartItems.reduce((accunulatedQuantity, CartItem) =>
     accunulatedQuantity + CartItem.quantity * CartItem.price,0)
)