import '../../assets/css/form.css'
import React, { useState } from 'react';
import { FaUser, FaLock, FaGoogle, FaFacebook } from "react-icons/fa";

export function Form({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        onLogin({ email, password });
    }

    return (
        <div className="main-form">
            <h1>LOGIN</h1>
            <p>How to i get started lorem ipsum dolor at?</p>
            <form>
                <div className="input-group">
                    <FaUser className="icon"/>
                    <input 
                        type="email" 
                        placeholder='Email'
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <FaLock className="icon"/>
                    <input 
                        type="password" 
                        placeholder='Password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <input type="button" value="Login now" className="buttonLogin" onClick={handleLogin}/>
            </form>

            <div className="separator">
                <hr />
                <p><span>Login</span> with Others</p>
            </div>

            <div className="othersLogins">
                <div className="logins-groups"><FaGoogle className="iconLogin" style={{ color: 'red', fontSize: 40 }} />Login with <span>google</span></div>
                <div className="logins-groups"><FaFacebook className="iconLogin" style={{ color: 'blue', fontSize: 40 }} />login with <span>facebook</span></div>
            </div>
        </div>
    )
}