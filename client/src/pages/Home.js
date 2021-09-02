import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import './Home.css'

export default function Home() {
    return (
        <div>
        <Navbar />
        <div className="home-container">
           <h1 className="title">forMe.</h1> 
           <div className="main-btn">
            <Link className="btn" to="/diaries/new">Write Your Story!</Link>
         </div>
         </div>
        </div>
    )
}
