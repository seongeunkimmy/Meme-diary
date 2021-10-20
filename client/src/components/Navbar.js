import React from 'react'
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/authAction';
import { connect } from 'react-redux';

import './Navbar.css';


function Navbar({logout}) {
    return (
        <div className="nav-container">
           
            <section className="main-section">
            <NavLink className="nav-main" to="/home">
                    forMe.
                </NavLink>
                </section>
                <section className="item-section">
               
                    <div>
                        <NavLink className="nav-item" to="/diaries/new">
                            NEW
                        </NavLink>
                    </div>
                    <div>
                        <NavLink className="nav-item" to="/diaries">
                             YOUR STORY
                        </NavLink>
                    </div>
                    <div>
                        <NavLink onClick={logout} className="nav-item" to="/">
                            LOG OUT
                        </NavLink>
                    </div>
                    </section>
            
         
          
                     
                </div>
            
    
    )
}

export default connect(null, { logout })(Navbar);