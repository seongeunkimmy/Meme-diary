import React from 'react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';



import PrivateRoute from './pages/auth/PrivateRoute';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import AddDiary from './pages/AddDiary';
import Diaries from './pages/Diaries';

export const history = createBrowserHistory({forceRefresh: true})

export default function Routes() {
    return (
       <BrowserRouter history={history} >
           <Switch>
               <Route path="/" exact component={Login} />
               <Route path="/register" component={Register} />
               <PrivateRoute path="/home" exact component={Home} />
               <PrivateRoute path="/diaries/new" component={AddDiary} />
               <PrivateRoute path="/diaries" exact component={Diaries} />
           </Switch>
       </BrowserRouter>
    )
}
