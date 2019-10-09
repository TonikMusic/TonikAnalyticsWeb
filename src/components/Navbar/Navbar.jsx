import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logos/SingleColor.png';

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="navbar__container">
        <div className="navbar__logo">
          <Link to="/"><img src={Logo} alt="#" /></Link>
        </div>

        <ul className="navbar__left">
          <li className="navbar__item">
            <a href="#about">About</a>
          </li>
          <li className="navbar__item">
            News
          </li>
          <li className="navbar__item">
            Get Started
          </li>
        </ul>

        <ul className="navbar__right">
          <li className="navbar__item">
            <Link to="login">Log In</Link>
          </li>
          <li className="navbar__item">
            <Link to="signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
