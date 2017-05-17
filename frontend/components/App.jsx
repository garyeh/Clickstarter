import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import MainIndexContainer from './main_index/main_index_container';
import MainIndex from './main_index/main_index';

const App = () => (
  <div>
    <section>
      <nav className="navbar">
        <div>
          Placeholder div
        </div>
        <div>
          <Link to="/">
            <h2 id="title"><span>CLICK</span><span>STARTER</span></h2>
          </Link>
        </div>
        <div>
          <GreetingContainer />
        </div>
      </nav>
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </Switch>
      <Route exact path="/" component={MainIndex} />
    </section>

    <footer>
      <div>Clickstarter © 2017 (Add footer links)</div>
    </footer>
  </div>
);

export default App;
