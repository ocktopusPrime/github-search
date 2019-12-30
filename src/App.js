// Import components
import React from 'react';
import About from './components/Pages/About';
import Alert from './components/layout/Alert';
import Home from './components/Pages/Home';
import NavBar from './components/layout/Navbar';
import NotFound from './components/Pages/NotFound';
import User from './components/users/User';

// Import utilities
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

// Import styling
import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <NavBar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
