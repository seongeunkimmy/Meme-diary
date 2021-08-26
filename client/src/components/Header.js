import React, {useState, useEffect} from 'react';
import './Header.css';

const Header = ({addToggle}) => {
    const [data, setData] = useState({});
    useEffect(()=> {
        fetch("/")
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    console.log(data);
    

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
