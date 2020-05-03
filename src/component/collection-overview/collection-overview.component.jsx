import React from 'react';
import {selectcollectionForPreview} from '../../redux/shop_Page/shopPage.selector';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collectionPreview.component';

import './collection-overview.styles.scss';

const CollectionOverview = ({collections}) =>(
<div className= 'Collection-overview'> 
            {
             collections.map(({id, ...otherCollectionsProps}) => 
                <CollectionPreview key={id} {...otherCollectionsProps}/>
                )   
            }
        </div>
)

const mapStateToProps = createStructuredSelector ({
    collections:selectcollectionForPreview
})


export default connect(mapStateToProps)(CollectionOverview);