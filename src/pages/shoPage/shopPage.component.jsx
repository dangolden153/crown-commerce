import React from 'react';
import CollectionPage from '../collection-page/collectionPage.component';
import CollectionOverview from '../../component/collection-overview/collection-overview.component';
import {Route} from 'react-router-dom';
import './shopPage.styles.scss';


const ShopPage =({match}) =>(
<div>
<Route exact path={`${match.path}`} component= {CollectionOverview}/> 
<Route  path={`${match.path}/:CollectionId`} component= {CollectionPage}/> 

</div>
)
  
  

export default ShopPage;