import React from 'react';
import { auth } from '../../firebase/firebase.utils'
import {connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartHiddden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.select';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDrop from '../cart-drop-down/cart-drop-down.component';


import {HeaderContainer, HomeContainer,OptionsContainer,OptionLink, OptionDiv } from './Header.styles';
const Header = ({CurrentUser,hidden}) => (
    <HeaderContainer>
            <HomeContainer to='/'>
           HOME
            </HomeContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
          

            {
    CurrentUser ?
    (
        <OptionDiv onClick = {()=>auth.signOut() }
        >SIGN OUT</OptionDiv>)
        :
     (<OptionLink to='/signin'>SIGN <span>IN</span> </OptionLink>
)
}
<CartIcon/>
        </OptionsContainer>
{
    hidden ? null :

      (<CartDrop/>  )  
    }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    CurrentUser:selectCurrentUser,
    hidden:selectCartHiddden
})

export default connect(mapStateToProps)(Header);