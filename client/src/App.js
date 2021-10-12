import React, { Component } from 'react'; 


import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import AddDiary from './pages/AddDiary';
import Diaries from './pages/Diaries';

import './App.css';

import { Provider } from 'react-redux';
import store  from './store.js'

class App extends Component {
  render() {
    return (
      <Provider store={store} >
       <Home />
       <AddDiary />
       <Diaries />
               
      </Provider>
    
      )
  }
  
}

  


export default App;
