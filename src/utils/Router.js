import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AllQuotes from '../Components/AllQuotes';
import App from '../App'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/all-quotes' component={AllQuotes} exact/>
        <Route path='' component={App} exact/>
      </Switch>    
    </BrowserRouter>
  );
};

export default Router;