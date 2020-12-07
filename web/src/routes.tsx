import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Search from './pages/Search';
import Result from './pages/Result';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/result" component={Result} />
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;
