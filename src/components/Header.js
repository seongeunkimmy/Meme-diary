import React from 'react';
import './Header.css';

const Header = ({addToggle}) => {

    return (
        <div>
           <div className="title">
            <h1>forMe</h1> 
           </div>
           <div className="main-btn">
            <button onClick={addToggle} className="btn">Write Your Story!</button>
           </div>
        </div>
    )
}

export default Header;
