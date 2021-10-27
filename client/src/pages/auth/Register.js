import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { register } from '../../actions/authAction'
import { clearErrors } from '../../actions/errorAction';
import './Register.css';

function Register({error, clearErrors, isAuthenticated}) {
 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);


  const dispatch = useDispatch();



  const onSubmit = e => {
    e.preventDefault();
   
      const newUser = {
        firstName, 
        lastName, 
        email,
        password
      }
  
      console.log(newUser);
      dispatch(register(newUser));
   
      // history.push('/')
    
  
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setMsg(null)
    
        e.target.reset();
      
    };

    useEffect(() => {
      // Check for register error
      if (error.id === 'REGISTER_FAIL') {
        setMsg(error.msg.msg);
      } else {
        setMsg(null);
      } 
    
      if(isAuthenticated) {
        clearErrors();
      }

    }, [error, clearErrors, isAuthenticated])

  
  
    return (
        <div>
           <div className="register-container">
           <form className="register-form" onSubmit={onSubmit}>
           <div className="regi-title">
           <h1>Register</h1>
           </div>
           {msg ? <div className="alert">{msg}</div> : null}
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
                 <button className="regi-btn" type="submit" >Sign Up</button>
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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error

})

export default connect(mapStateToProps, {register, clearErrors})(Register);
