import React, { useState } from 'react';
import './SignInComp.css';
import { register } from '../../ApiService/ApiService';
import { Link } from 'react-router-dom';

function SignInComp() {
    const [firstName, setfirstName] = useState('');
    const [password, setPassword] = useState('');  
    const [email, setEmail] = useState('');  
    const [user, setUser] = useState('');

    const handleFirstChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setfirstName(e.target.value);
    };

    const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
    };

    const signIn = (fn: string, email: string, password: string) => {
        const sendUser: UserDTO = {
            firstName: fn,
            email: email,
            password: password
        }

        register(sendUser)
        .then(
            data => {
                setUser(data);
            })
        .catch(error => {
            // Обробка помилки
            console.error(error);
          });

          localStorage.setItem('user', JSON.stringify(user));
    };

    return (
        <div className='signIn'>
            <h1>Sign in</h1>

            <div className='input'>
                <p>Enter the first name</p>

                <input
                    type="text"
                    value={firstName}
                    onChange={handleFirstChange}
                />
            </div>
            <div className='input'>
                <p>Enter the password</p>

                <input
                    type="text"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <div className='input'>
                <p>Enter the email</p>

                <input
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>

            <button onClick={() => signIn(firstName, email, password)}>
                <Link to="/">Enter</Link>
            </button>
            <button>Sign in Google</button>
        </div>
    );
}

export default SignInComp;