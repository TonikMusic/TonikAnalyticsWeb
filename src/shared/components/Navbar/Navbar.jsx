import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/logos/SingleColor.png';

import FakeAuth from '../../../services/fakeAuth';

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: true,
    };

    this.Auth = new FakeAuth();
  }

  componentDidMount() {
    this.setState({ loggedIn: this.Auth.loggedIn() });
  }

  checkAuth() {
    const { loggedIn } = this.state;
    if (loggedIn === true) {
      return (
        <div className="navbar__container">
          <div className="navbar__logo">
            <Link to="/"><img src={Logo} alt="#" /></Link>
          </div>

          <ul className="navbar__left">
            <li className="navbar__item">
              <a href="#about">Home</a>
            </li>
            <li className="navbar__item">
              Social
            </li>
            <li className="navbar__item">
              Music
            </li>
          </ul>

          <ul className="navbar__right">
            <li className="navbar__item">Profile</li>
          </ul>
        </div>
      );
    }
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

  render() {
    return (
      <div>
        {this.checkAuth()}
      </div>
    );
  }
}

export default Navbar;
