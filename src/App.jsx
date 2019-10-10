import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './shared/components/Navbar/Navbar';
import Landing from './modules/Landing/Landing';
import Signup from './modules/auth/SignUp/Signup';
import Login from './modules/auth/LogIn/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
