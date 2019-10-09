import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Signup from './components/auth/SignUp/Signup';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
