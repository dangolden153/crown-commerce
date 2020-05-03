import React from 'react';
import './signUp.styles.scss';
import fire from '../../firebase/firebase.utils';
import FormInput from '../../component/form-input/form-input.component';
import CustomButton from '../../component/custom-button/custom-button.component';

class SignUp extends React.Component{
    constructor(){
        super();
        this.SignUp = this.SignUp.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            DisplayName:'',
            email : '',
            password: '',
            comfirmPassword:''
        }
    }

    SignUp =async event =>{
        event.preventDefault();
const {email, password, comfirmPassword} = this.state;
 if (password !== comfirmPassword){
alert('wrong password');
return;
 }
        try{
     await   fire.auth().createUserWithEmailAndPassword
        (email , password)

        }catch(error){
console.error(error)
        }
    }


    handleChange = event => {
        const {name,value} = event.target;
        this.setState({[name]:value})
    }


    render(){
        return(
<div  className='sign-up'>
    <form>
    <FormInput
    name='DisplayName'
    type='text'
    value = {this.DisplayName}
    label = 'DisplayName'
    handleChange = {this.handleChange}
    required
    />
    <FormInput
    name='email'
    type='email'
    value = {this.email}
    label = 'email'
    handleChange = {this.handleChange}
    required
    />
    <FormInput
    name='password'
    type='password'
    value = {this.password}
    label = 'password'
    handleChange = {this.handleChange}
    required
    />
    <FormInput
    name='comfirmPassword'
    type='password'
    value = {this.comfirmPassword}
    label = 'comfirm Password'
    handleChange = {this.handleChange}
    required
    />

<CustomButton onClick = {this.SignUp}> Sign Up</CustomButton>
    </form>
</div>


        );
    }
}

export default SignUp;