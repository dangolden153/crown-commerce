import React from 'react';
import SignIn from '../../component/signIn/signIn.component';
import SignUp from '../../component/signUp/signUp.component';
import './signin-out.styles.scss';

const SignInUp = ()=>(
    <div className= 'signin-out'>
<SignIn />
<SignUp/>
    </div>
)

export default SignInUp;