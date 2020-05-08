import React from 'react';
import {
  useHistory,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import AppWrapper from './App.style';

const PageOne = () => <h3>Page One</h3>;
const PageTwo = () => <h3>Page Two</h3>;

export default function App() {
  const history = useHistory();
  const loggedIn = localStorage.getItem('loggedIn');

  if (!loggedIn) return <></>

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    history.push('/login');
  };

  return (
    <AppWrapper>
      <nav>
        <h1>App</h1>
        <button onClick={handleLogout}>
          Log out
        </button>
      </nav>

      <ul>
        <li><Link to="/page-one">Page One</Link></li>
        <li><Link to="/page-two">Page Two</Link></li>
      </ul>
      <Switch>
        <Route exact path="/">
          <h1>Parcel is cool :)</h1>
        </Route>
        <Route path="/page-one">
          <PageOne />
        </Route>
        <Route path="/page-two">
          <PageTwo/>
        </Route>
      </Switch>
    </AppWrapper>
  );
}
