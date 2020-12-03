import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Search from './pages/Search';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Search} />
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;