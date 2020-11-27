import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase'
import "./Login.css"

function Login() {
    const signIn = () =>{
            // google login
            auth.signInWithPopup(provider)
            .catch((error)=> alert(error.message));
    }

    return (
        <div className="login">
            
            <div className="login__logo">
                <img src="data:image/png;base64,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" alt="discord logo" />

            </div>

            <Button onClick={signIn}>Sign In</Button>

        </div>
    )
}

export default Login
