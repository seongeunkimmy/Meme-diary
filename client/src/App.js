import React, { Component } from 'react'; 
import Routes from './routes.js'

import './App.css';

import { Provider } from 'react-redux';
import configureStore  from './store.js'

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store} >
       <Routes />
      </Provider>
    
      )
  }
  
}

  


export default App;
