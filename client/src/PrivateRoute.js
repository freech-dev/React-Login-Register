import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (authenticated === true ? <Component {...props} /> : <Redirect to="/pages/login" />)}
  />
);

export default withRouter(PrivateRoute);