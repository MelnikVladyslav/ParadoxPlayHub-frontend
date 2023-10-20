import React from 'react';
import './SignIn.css';
import Header from '../../Components/Headers/Header';
import Fotter from '../../Components/Fotter/Fotter';
import SignInComp from '../../Components/SignIn/SignInComp';

function SignIn() {

    return (
        <div>
            <Header/>
            <SignInComp/>
            <Fotter/>
        </div>
    );
}

export default SignIn;