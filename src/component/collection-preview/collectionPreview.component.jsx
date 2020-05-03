import React from 'react';
import CollectionItem from '../collecrion-item/collection-item.component';

import './collectionPreview.styles.scss';

const CollectionPreview = ({title,items}) =>(
    <div className = 'Collection-Preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
{
    items
    .filter((item, idx ) => idx < 4)

    .map(item =>
    (<CollectionItem key={item.id}  item={item} />
    ))
}
        </div>
    </div>
)

export default CollectionPreview; 