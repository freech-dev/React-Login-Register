import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from './Login';
import SignUp from './SignUp';
import App from './App';
import Dashboard from './Dashboard';

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
    };
  }

  componentDidMount() {
    this.authVerify()
      .then((res) => {
        if (res.status === 200) {
          console.log(this.state);
          this.setState({
            authenticated: true,
          });
          console.log(this.state);
        }
      })
      .catch(err => console.log(err));
  }

  authVerify = () => axios.get('/login')

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" authenticated={this.state.authenticated} component={App} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/dashboard" authenticated={this.state.authenticated} component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
