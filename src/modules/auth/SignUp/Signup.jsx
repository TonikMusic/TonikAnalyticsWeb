import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

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
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    console.log(e.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
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

          <button type="submit">Get Started</button>
        </form>
      </div>
    );
  }
}

export default Signup;
