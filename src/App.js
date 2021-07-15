import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Alert from './Components/layout/Alert';
import Navbar from './Components/layout/Navbar';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Page404 from './Components/Pages/Page404';
import User from './Components/users/User';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="GitHub Profile Finder" icon="fab fa-github" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={Page404} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
