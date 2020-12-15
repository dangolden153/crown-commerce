import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, signWithGoogle, inverted, ...otherProps})=>(
    <button className= { `
    ${inverted? 'inverted' : ''}
    ${signWithGoogle? 'signWithGoogle' : ''}  btn`} 
    {...otherProps}> {children} </button>
)

export default CustomButton;





