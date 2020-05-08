import React, { useEffect } from 'react';
import {
  useHistory,
  useLocation,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Login from './components/auth/Login';
import App from './components/App';

const HISTORY = createBrowserHistory();

const AuthGuardedRoute = ({ children, ...restProps }) => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const notLoggedIn = localStorage.getItem('loggedIn') === null;

    if (notLoggedIn) {
      return history.push('/login');
    }
  }, [history, location]);

  return <Route {...{ restProps }}>{children}</Route>;
};

export default function Routes() {
  return (
    <Router history={HISTORY}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <AuthGuardedRoute path="/">
          <App />
        </AuthGuardedRoute>
      </Switch>
    </Router>
  );
}