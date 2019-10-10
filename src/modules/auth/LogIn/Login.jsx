import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

import FakeAuth from '../../../services/fakeAuth';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.Auth = new FakeAuth();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    let token = 'alsjndaljbs123yg1y2i3g1';

    // eslint-disable-next-line no-bitwise
    if (email === 'JimmyC@gmail.com' & password === 'Jimmypass') {
      localStorage.setItem('tonik_token', token);
      window.location = '/';
    } else {
      alert('Incorrect Username/Password');
    }
  };


  render() {
    const { email, password } = this.state;
    return (
      <div className="login__container">
        <form onSubmit={this.handleSubmit}>
          <h1>Member Log In</h1>

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
          />
          <p>
            Already a member?
            <span>
              <Link to="/signup"> Sign Up</Link>
            </span>
          </p>

          <button type="submit" value="submit">Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
