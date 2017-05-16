import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <Link to="/">
        <h1>Clickstarter</h1>
      </Link>
    </header>
    <Switch>
      <Route path="/login" />
      <Route path="/signup" />
    </Switch>
  </div>
);

export default App;
