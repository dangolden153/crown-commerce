import CartActionTypes from './cart.type';
import AddItemToCart from './cart.utils'
import{ removeFromCartItem } from './cart.utils'

const INITIAL_STATE ={
    hidden : true,
    CartItems: []
}

const CartReducer = (state = INITIAL_STATE , action) =>{
    switch(action.type){
    case CartActionTypes.TOGGLE_HIDDEN_CART: 
        return{
            ...state,
            hidden: !state.hidden
        };

    case CartActionTypes.CLEAR_CART_ITEM:
        return{
            ...state,
            CartItems: state.CartItems.filter(
                cartItem => cartItem.id !== action.payload.id)
        };    
          
    case CartActionTypes.REMOVE_CART_ITEM:
        return{
            ...state,
            CartItems:removeFromCartItem(state.CartItems, action.payload)
        };

    case CartActionTypes.CART_ADD_ITEMS:
         return{
            ...state,
            CartItems:AddItemToCart(state.CartItems, action.payload)
         };
         default:
         return state;
        }
}

export default CartReducer;