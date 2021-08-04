import React from 'react';
import ReactDOM from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from './Components/Login';
import Profile from './Components/Profile';
import Register from './Components/Register';


function App() {
  return (
    <Router>

      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/register">
          <Register></Register>
        </Route>

        <Route path="/profile">
          <Profile></Profile>
        </Route>

        <Redirect from="/" to="/login" exact />
      </Switch>
    </Router>
  );
}

export default App;
