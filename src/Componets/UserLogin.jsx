import React, { useState } from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { googleLogout } from '@react-oauth/google';


function UserLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(true);
    const [googleData, setGoogledata] = useState('')



    // In a real-world scenario, you would perform authentication logic here.
    // For simplicity, I'm checking against the data stored in local storage.
    const storedName = localStorage.getItem('fullName')
    const storedUsername = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('password');


    const handleUsernameChanges = (e) => {
        setUsername(e.target.value)
    }
    const handlepasswordChanges = (e) => {
        setPassword(e.target.value)
    }
    const handleLogin = () => {
        if (username === storedUsername && password === storedPassword) {
            // Set the user as logged in
            setLoggedIn(false);
            alert('Login successful!');
        } else {
            alert('Invalid credentials. Please try again.');
        }
    }

    const handleLogout = () => {
        // Clear the local storage and set the user as logged out
        localStorage.removeItem('fullName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('password')
        setLoggedIn(true);
        googleLogout();
    }
    return (
        <div>
            {isLoggedIn ? <div className='signUp_box'>
                <div className='Inpt_box'>
                    <form action="">
                        <input type='text' placeholder='Enter Your Username or email' onChange={handleUsernameChanges} /><br />
                        <input type='password' placeholder='Enter your password' onChange={handlepasswordChanges} autoComplete='current-pass' />
                    </form>
                </div>
                <div className='btn-box'>
                    <button onClick={handleLogin}>Login</button>
                </div>
                <div className='auth'>
                    <GoogleOAuthProvider clientId="114499166143-f4e6ui6mbvc1f2q7saqt3hc041mt23f3.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                let decoded = jwtDecode(credentialResponse.credential);
                                setGoogledata(decoded)
                                setLoggedIn(false)
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </GoogleOAuthProvider>
                </div>
            </div> : <div className='parent-box'>
                <h2>Thanku for the Login</h2>
                <p>User name: {storedName || googleData.name}</p>
                <p>User Email: {storedUsername || googleData.email}</p>
                <button onClick={() => { handleLogout() }}>Logout</button>

            </div>
            }
        </div>
    )
}

export default UserLogin
