import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="signup__container">
        <form>
          <h1>Sign Up</h1>

          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Username" />
          <input type="date" placeholder="Date of Birth" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
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
