const AddItemToCart = (CartItems, CartItemToAdd) =>{
 const   existingCartItem = CartItems.find(
        cartitem => cartitem.id === CartItemToAdd.id
    )

    if (existingCartItem){
return CartItems.map(cartitem => cartitem.id ===  CartItemToAdd.id ?
        {...cartitem, quantity: cartitem.quantity + 1}
        : cartitem )

    }
    return [...CartItems , {...CartItemToAdd, quantity:1}]
} 


export const removeFromCartItem = (CartItems , RemoveCartItem) => {
   const existingcartItem = CartItems.find(cartItem => cartItem.id === RemoveCartItem.id 
        )

        if (existingcartItem.quantity === 1){
         return   CartItems.filter(cartItem => cartItem.id !== RemoveCartItem.id)
         }


        return CartItems.map(cartItem => 
            cartItem.id === RemoveCartItem.id ?
        { ...cartItem , quantity: cartItem.quantity - 1}
        :cartItem 
         )
      

}




export default AddItemToCart;