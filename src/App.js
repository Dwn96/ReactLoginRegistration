import React from 'react';
import ReactDOM from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './Components/Login';
import Register from './Components/Register';


function App() {
  return (
    <Router>

      <Route path="/login">
        <Login></Login>
      </Route>

      <Route path="/register">
        <Register></Register>
      </Route>

    </Router>
  );
}

export default App;
