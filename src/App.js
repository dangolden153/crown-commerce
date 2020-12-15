import React from 'react';
import {Switch, Route,Redirect  } from 'react-router-dom';
import { connect } from 'react-redux'
import  {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.select'
import CheckoutPage from './pages/checkoutPage/checkoutPage.component';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoPage/shopPage.component';
import Header from './component/Header/Header.component';
import SignInUp from './pages/sign-in-sign-out/signIn-signOut.component';
import  {fire, AddcollectionDocument} from './firebase/firebase.utils';
import {SetcurrentUser} from './redux/user/user.action';
import {selectcollectionForPreview} from './redux/shop_Page/shopPage.selector';



class App extends React.Component{


componentDidMount(){
this.authListener();
const {collectionsArray} = this.props


AddcollectionDocument('collections', collectionsArray)
}

authListener(){

  fire.auth().onAuthStateChanged((User) =>{
    if (User) {
      this.props.SetcurrentUser({User})
    }else {
      this.props.SetcurrentUser(null);
    }
      })
}



// componentWillUnmount(){
//   this.unsubcribeUser();
// }

render(){
  return (

    
    <div>

  <Header/>
   <Switch>
<Route exact path='/' component = {HomePage} />
<Route path='/shop' component = {ShopPage} />
<Route exact path='/checkoutPage' component= {CheckoutPage} />
<Route exact path='/Signin' render = {()=> this.props.CurrentUser ? (<Redirect to='/' />) : <SignInUp/>}  />
      
   </Switch>    
      
</div>
    )
}
  
}

const mapStateToProps =createStructuredSelector({
  CurrentUser:selectCurrentUser,
  collectionsArray: selectcollectionForPreview

})
 
const mapDispatchToProps = Dispatch =>({
  SetcurrentUser: user =>Dispatch (SetcurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(App); 
