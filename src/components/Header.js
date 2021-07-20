import React from 'react'

const Header = ({onAdd}) => {
    return (
        <div className='header'>
           <div className='title'>
           <h1>forMe DIARY</h1> 
           </div>
           <div className="main-btn">
           <button onClick={onAdd} className="btn">Write Your Diary!</button>
           </div>
        </div>
    )
}

export default Header;
