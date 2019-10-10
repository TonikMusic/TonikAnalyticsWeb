import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './shared/components/Navbar/Navbar';
import Landing from './modules/Landing/Landing';
import Signup from './modules/auth/SignUp/Signup';
import Login from './modules/auth/LogIn/Login';
import Home from './modules/Home/Home';

import ComingSoon from './shared/components/CommingSoon';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route exact path="/user/home" component={Home} />
          <Route exact path="/soon" component={ComingSoon} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
