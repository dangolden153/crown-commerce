import React from 'react';

import './cart-Items.styles.scss';

const CartItem = ({item :{name,price,imageUrl, quantity}}) =>(
    <div className="cart-items">
          <img src={imageUrl} alt="item"/>

          <div className="items-details">
        <div className="name">{name}</div>
<div className="price">{quantity} * ${price}</div>
          </div>
    </div>
)

export default CartItem; 