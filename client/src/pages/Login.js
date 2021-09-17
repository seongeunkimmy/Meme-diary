import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        
            <div className="login-container">
            <div className="part">
             <h1 className="title">forMe.</h1> 
            </div>
            
           <div className="part login">
             <form>
                 <h1>Log-in</h1>
                 <div className="login-form"> 
                 <input
                 className="login-item"
                 type="email"
                 placeholder="Your E-mail"
                 value={email}
                 onChange={event => setEmail(event.target.value)}
                 />
                <input
                 className="login-item"
                 type="password"
                 placeholder="Password"
                 value={password}
                 onChange={event => setPassword(event.target.value)}
                />
                 <button className="login-item" type="submit">Log In</button>
                 <div className="sign-up">
                 <span>Don't have an account?</span>
                 <Link to="/register">
                 <button>Sign Up!</button>
                 </Link>
                 
                </div>
                 
                 </div>
                 
          
          </form>
                 
           
           </div>
           </div>
      
    )
}
