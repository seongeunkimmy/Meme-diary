import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../actions/authAction';
import { clearErrors } from '../../actions/errorAction';

import './Login.css';

function Login({ error, isAuthenticated, clearErrors}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState(null);


  const dispatch = useDispatch();
  const history = useHistory();
    
   const handleSubmit = e => {
    e.preventDefault();
       
    const user = {email, password};

    dispatch(login(user));
     
        setEmail('')
        setPassword('')
        

    }

    useEffect(() => {
        if(error.id === 'LOGIN_FAIL') {
            setMsg(error.msg.msg)
        } else {
            setMsg(null)
        }

        if(isAuthenticated) {
            history.push('/home')
            clearErrors();
        }
    }, [error, isAuthenticated, clearErrors, history])

  

    return (
        
            <div className="login-container">
            <div className="part">
             <h1 className="title">forMe.</h1> 
            </div>
            
           <div className="part login">
         
             <form onSubmit={handleSubmit} className="sign-in-form">
                 <div>
                 <h1>Log-in</h1>
                 </div>
                 {msg ? <div className="alert-login">{msg}</div> : null}
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
                 <button  className="login-item" type="submit">Log In</button>
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

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
  
  })
  
  export default connect(mapStateToProps, { login, clearErrors })(Login);