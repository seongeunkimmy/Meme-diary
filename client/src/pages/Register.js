import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



    return (
        <div>
           <div className="register-container">
           <form className="register-form">
           <div className="regi-title">
           <h1>Register</h1>
           </div>
           <div className="regi-form"> 
                 <input
                 className="regi-item"
                 placeholder="First Name"
                 value={firstName}
                 onChange={event => setFirstName(event.target.value)}
                 />
                 <input
                 className="regi-item"
                 placeholder="Last Name"
                 value={lastName}
                 onChange={event => setLastName(event.target.value)}
                 />
                 <input
                 className="regi-item"
                 type="email"
                 placeholder="Your E-mail"
                 value={email}
                 onChange={event => setEmail(event.target.value)}
                 />
                <input
                 className="regi-item"
                 type="password"
                 placeholder="Password"
                 value={password}
                 onChange={event => setPassword(event.target.value)}
                />
                 <button className="regi-btn" type="submit">Sign Up</button>
                 <div className="log-in">
                 <span>Already registered?</span>
                 <Link to="/">
                 <button>Log-in</button>
                 </Link>
                 
                </div>
                 </div>
            </form>
           </div>

        </div>
    )
}

