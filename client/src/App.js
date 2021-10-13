import React, { Component } from 'react'; 
import Routes from './routes.js'

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import AddDiary from './pages/AddDiary';
import Diaries from './pages/Diaries';

import './App.css';

import { Provider } from 'react-redux';
import configureStore  from './store.js'

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store} >
       {/* <Home />
       <AddDiary /> */}
       <Routes />
       {/* <Diaries />    */}
      </Provider>
    
      )
  }
  
}

  


export default App;
