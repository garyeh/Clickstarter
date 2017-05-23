import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import ProjectIndexContainer from './projects/project_index_container';
import ProjectDetailContainer from './projects/detail/project_detail_container';
import ExploreCreateContainer from './explore_create/explore_create_container';
import ProjectFormContainer from './project_form/project_form_container';

const App = () => (
  <div>
    <section>
      <nav className="navbar">
        <div>
          <ExploreCreateContainer />
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
        <ProtectedRoute path="/projects/new" component={ProjectFormContainer} />
        <ProtectedRoute path="/projects/:projectId/edit" component={ProjectFormContainer} />
        <Route path="/projects/:projectId" component={ProjectDetailContainer} />
      </Switch>
      <Route exact path="/" component={ProjectIndexContainer} />
    </section>

    <footer>
      <div>Copyright © 2017 Clickstarter. All rights reserved.</div>
    </footer>
  </div>
);

export default App;
