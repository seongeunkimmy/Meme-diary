import React from 'react'; 
import Routes from './routes';

import './App.css';

import { Provider } from 'react-redux';
import store  from './store.js'

function App() {
return (
  <Provider store={store}>
 <Routes />
  </Provider>

  )
  
}

export default App;
