import React from 'react';
import './Signup.css';

import Logo from '../../../assets/logos/FullNoColor.png';

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="signup__container">
        <img src={Logo} alt="#" />
        <form>
          <h1>Sign Up</h1>

          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button type="submit">Signup</button>
        </form>
      </div>
    );
  }
}

export default Signup;
