import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import PrivateRoute from '../PrivateRoute';
import Login from '../Login';
import Search from '../Search';
import Nav from '../Nav';
import Planet from '../Planet';

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <PrivateRoute exact path="/" component={Search} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={() => <Search />} />
          <Route path="/planet" component={Planet} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
