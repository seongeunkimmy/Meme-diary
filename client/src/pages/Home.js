import React, { Component } from 'react'
import { connect } from 'react-redux';
import { store } from '../App.js'
import { loadUser } from '../actions/authAction';
import { Link, Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar'
import './Home.css'

class Home extends Component {

 componentDidMount() {
  store.dispatch(loadUser());
     }

 render() {
     if (!this.props.isAuthenticated) {
         return <Redirect to="/" />
     }


    return (
        <div>
       <Navbar />
        <div className="home-container">
           <h1 className="title">forMe.</h1> 
           <div className="main-btn wrapper">
           <Link className="btn" to="/diaries/new">Write Your Story!</Link>
          
         </div>
         </div>
        </div>
    )
}
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    diaries: state.diaries.diaries
})

export default connect(mapStateToProps)(Home);