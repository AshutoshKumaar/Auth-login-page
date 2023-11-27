import React, { useState } from 'react'


function UserSignup() {
    const [fullName, SetfullName] = useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handlefullName = (e) => {
        SetfullName(e.target.value)
    }
    const handleUserName = (e) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleconfirmPass = (e) => {
        setConfirmPassword(e.target.value)
    }
    const handleSignup = () => {
        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.")
        } else {
            localStorage.setItem('fullName', fullName)
            localStorage.setItem('userEmail', username)
            localStorage.setItem('password', password)
            alert('Signup successful! You can now log in.')
        }

        // In a real-world scenario, you would perform user registration logic here.
        // For simplicity, I'm storing the username and password in local storage.



    }


    return (
        <div>
            <div className='signUp_box'>
                <div className='Inpt_box'>
                    <form action="">
                        <input type='text' placeholder='Enter Your Name' onChange={(e) => { handlefullName(e) }} value={fullName} /><br />
                        <input type='email' placeholder='Enter Your Username or email' onChange={(e) => { handleUserName(e) }} value={username} autoComplete='user-email' /><br />
                        <input type='password' placeholder='Enter your password' onChange={(e) => { handlePassword(e) }} autoComplete="new-password" value={password} /><br />
                        <input type='password' placeholder='Enter your confirm password' onChange={(e) => { handleconfirmPass(e) }} autoComplete="new-password" value={confirmPassword} />
                    </form>
                </div>
                <div className='btn-box'>
                    <button onClick={handleSignup}>Sign-up</button>
                </div>

            </div>
        </div>
    )
}

export default UserSignup
