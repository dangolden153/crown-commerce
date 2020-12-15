import React from 'react';
import { withRouter } from 'react-router-dom';
import img from '../../assets/section2.jpg'
import './menu-item.styles.scss';

const MenuItem = ({title, history, linkUrl,imageurl, match,size})=>(
    <div 
    
    className={`${size} menu-items`} onClick={()=>history.push
    (`${match.url}${linkUrl}`)}>
            <img src={img} alt="" className='background-image' />
       
    <div className="content">
<h1 className="title">{title}</h1>
        <span className="subtitle">shop now</span>
    </div>
</div>
);

export default withRouter(MenuItem);

