import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';

const App = () => (
  <section>
    <div className="navbar">
      <div>
        Placeholder div
      </div>
      <div>
        <Link to="/">
          <h2 id="title">CLICKSTARTER</h2>
        </Link>
      </div>
      <div>
        <GreetingContainer />
      </div>
    </div>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </section>
);

export default App;
