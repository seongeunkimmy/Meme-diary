import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Routes from './routes';

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
            {/* <Routes /> */}
             <Router>
             <div className="App">
                 <Switch>
                   <Route path="/" exact component={Login} />
                   <Route path="/register" component={Register} />
                   <Route path="/home" component={Home} />
                   <Route path="/diaries/new" component={AddDiary} />
                   <Route path="/diaries" component={Diaries} />
               </Switch>
     </div>
               
     </Router>
               
      </Provider>
    
      )
  }
  
}

  


export default App;
