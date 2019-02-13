import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import urls from './routeUrls';
import AliveContainer from '../containers/AliveContainer/AliveContainer';
import UntilContainer from '../containers/UntilContainer/UntilContainer';

const routes = () => {
  return (
    <Switch>
      <Route exact path={urls.ALIVE} component={AliveContainer} />
      <Route exact path={urls.UNTIL} component={UntilContainer} />
      <Redirect exact path="/" to={urls.ALIVE} />
    </Switch>
  );
};

export default withRouter(routes);
