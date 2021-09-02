import React from 'react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import AddDiary from './pages/AddDiary';
import DiaryApp from './pages/DiaryApp';

export default function routes() {
    return (
       <BrowserRouter>
           <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/diaries/new" component={AddDiary} />
               <Route path="/diaries" component={DiaryApp} />
           </Switch>
       </BrowserRouter>
    )
}
