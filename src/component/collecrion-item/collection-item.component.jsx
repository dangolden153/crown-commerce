import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';
import { connect } from 'react-redux';
import {AddItem} from '../../redux/cart/cart.action';
import img from '../../assets/section3.jpg'

const CollectionItem = ({item,AddItem}) => {
const  {name,imageUrl,price } = item;
    return (
    <div className='Collection-Item'>
   <div className="image" style={{
       backgroundImage: `url(${img})`
   }}/>
       
  
<div className= 'footer'>  
<div className="name">{name}</div>
<div className="price">{price}</div>

</div>

<CustomButton  onClick={()=>AddItem(item)} inverted>
    ADD TO CART
     </CustomButton>
    </div>
)};


const mapDispatchToProps = Dispatch =>({
    AddItem:item =>Dispatch(AddItem(item))
})

export default connect(
    null,
    mapDispatchToProps) 
    (CollectionItem);