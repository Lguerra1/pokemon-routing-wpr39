import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Pokemon from './components/Pokemon';
import Search from './components/Search';

const router = (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Search}/>
      <Route path="/pokemon/:id" component={Pokemon}/>
    </Switch>
  </HashRouter>
)

export default router;
