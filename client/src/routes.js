import React from 'react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import AddDiary from './pages/AddDiary';
import Diaries from './pages/Diaries';

export default function routes() {
    return (
       <BrowserRouter>
           <Switch>
               <Route path="/" exact component={Login} />
               <Route path="/register" component={Register} />
               <Route path="/home" component={Home} />
               <Route path="/diaries/new" component={AddDiary} />
               <Route path="/diaries" component={Diaries} />
           </Switch>
       </BrowserRouter>
    )
}
