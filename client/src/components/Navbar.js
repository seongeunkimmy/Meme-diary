import React from 'react'
import {withRouter} from 'react-router';
import {compose} from 'redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/authAction';
import { connect } from 'react-redux';


import './Navbar.css';


function Navbar({logout}) {
  
    return (
        <div className="nav-container">
           
            <section className="main-section">
            <Link className="nav-main" to="/home">
                    forMe.
                </Link>
                </section>
             
                <section className="item-section">
                    <div>
                        <Link className="nav-item" to="/diaries/new">
                            NEW
                        </Link>
                    </div>
                    <div>
                        <Link className="nav-item" to="/diaries">
                             YOUR STORY
                        </Link>
                    </div>
                    <div>
                    
                        <Link onClick={logout} className="log-out" to="/">
                            LOG OUT
                        </Link>
                    </div>
                    </section>
                 
         
          
                     
                </div>
            
    
    )
}

export default compose(withRouter, connect(null, { logout }))(Navbar);