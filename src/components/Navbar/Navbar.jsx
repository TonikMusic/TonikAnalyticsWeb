import React from 'react';
import './Navbar.css';

import Logo from '../../assets/logos/SingleColor.png';

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="navbar__container">
        <div>
          <img src={Logo} alt="#" />
        </div>

        <ul>
          <li className="navbar__item">
            News
          </li>
          <li className="navbar__item">
            Get Started
          </li>
        </ul>

        <ul>
          <li className="navbar__item">
            Log In
          </li>
          <li className="navbar__item">
            Sign Up
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
