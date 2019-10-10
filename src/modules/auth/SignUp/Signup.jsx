import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

import FakeAuth from '../../../services/fakeAuth';

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      fullName: '',
      username: '',
      dateOfBirth: '',
      email: '',
      password: '',
    };
    this.Auth = new FakeAuth();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    console.log(e.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      fullName, username, dateOfBirth, email, password,
    } = this.state;

    this.Auth.signup(fullName, username, dateOfBirth, email, password)
      .then((res) => {
        if (this.Auth.loggedIn()) {
          window.location = '/user/dashboard';
        }
      });
  }

  render() {
    const {
      fullName, username, dateOfBirth, email, password,
    } = this.state;

    return (
      <div className="signup__container">
        <form>
          <h1>Sign Up</h1>

          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={this.handleChange}
          />
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            name="dateOfBirth"
            type="date"
            placeholder="Date of Birth"
            value={dateOfBirth}
            onChange={this.handleChange}
          />
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
              <Link to="/login"> Log In</Link>
            </span>
          </p>

          <button type="submit" value="submit">Get Started</button>
        </form>
      </div>
    );
  }
}

export default Signup;
