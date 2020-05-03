import React from 'react';
import FormInput from '../form-input/form-input.component';
import './signIn.styles.scss';
import CustomButton from '../../component/custom-button/custom-button.component';
import fire  from '../../firebase/firebase.utils'
import {signInWithGoogle} from '../../firebase/firebase.utils'





class SignIn extends React.Component{
    constructor(){
        super();
this.login = this.login.bind(this);
this.handleChange = this.handleChange.bind(this);


        this.state={
            email:'',
            password:''
        }
    }
login = async event =>{
    event.preventDefault();

   try{
  await fire.auth().signInWithEmailAndPassword
   (this.state.email,this.state.password);


   }catch(error){
       console.error(error)
   }

}




handleChange = event =>{
    const {name,value} = event.target;

    this.setState({[name]: value})
}


    render(){
        return(
            <div className='sign-in'>
                <h2>I ALREADY HAVE AN ACCOUNT</h2>
                <span>Sign in with your email and password</span>
                <form >
                    <FormInput 
                    name='email'
                    type="email" 
                    label='email'
                    handleChange={this.handleChange} 
                    value={this.state.email}
                    required />

                    <FormInput 
                    name='password' 
                    type="password" 
                    label='password'
                    handleChange={this.handleChange} 
                    value={this.state.password}
                    required />
            <div className="btn-container">
<CustomButton type='submit' onClick={this.login}> SIGN IN </CustomButton>
<CustomButton type='submit' onClick = {signInWithGoogle} signWithGoogle> sign in with google </CustomButton>
   
       </div>
        
        
                </form>
            </div>
        )
    }
} 

export default SignIn;