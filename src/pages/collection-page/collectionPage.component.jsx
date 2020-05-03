import React from 'react';

import {selectcollection} from '../../redux/shop_Page/shopPage.selector';
import {connect} from 'react-redux';
import CollectionItem from '../../component/collecrion-item/collection-item.component';
import './collectionPage.styles.scss'


const CollectionPage = ({collection })=>{
    const { items,title} = collection

   return (
    <div className='collection-page'> 
<h1 className='title'> {title } </h1>
<div className="items">
    {
        items.map(item => 
(    <CollectionItem key={item.id} item={item}/>)        )
    }
</div>
    </div>    
)}

const mapStateToProps = (state,ownProps) =>({
    collection:selectcollection(ownProps.match.params.CollectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);