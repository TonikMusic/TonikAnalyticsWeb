import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="login__container">
        <form>
          <h1>Member Log In</h1>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <p>
            Already a member?
            <span>
              <Link to="/signup"> Sign Up</Link>
            </span>
          </p>

          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
