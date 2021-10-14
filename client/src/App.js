import React, { Component } from 'react'; 
import Routes from './routes.js'

import './App.css';

import { Provider } from 'react-redux';
import configureStore  from './store.js'
import {loadUser} from './actions/authAction';

const store = configureStore();

class App extends Component {

componentDidMount() {
  store.dispatch(loadUser());
}

  render() {
    return (
      <Provider store={store} >
       <Routes />
      </Provider>
    
      )
  }
  
}

  


export default App;
