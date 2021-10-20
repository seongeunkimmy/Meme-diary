import React from 'react'
import { NavLink } from 'react-router-dom';

import './Navbar.css';


export default function Navbar() {
    return (
        <div className="nav-container">
           
            <section className="main-section">
            <NavLink className="nav-main" to="/">
                    forMe.
                </NavLink>
                </section>
                <section className="item-section">
                <div>
                        <NavLink className="nav-item" to="/register">
                            SIGN-UP
                        </NavLink>
                    </div>
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
                    </section>
            
         
          
                     
                </div>
            
    
    )
}
