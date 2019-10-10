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

  handleLogout = () => {
    this.Auth.logout();
    if (!this.Auth.loggedIn()) {
      window.location = '/';
    }
  };

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
              <Link to="/user/home">Home</Link>
            </li>
            <li className="navbar__item">
              <Link to="/soon">Social</Link>
            </li>
            <li className="navbar__item">
              <Link to="/soon">Music</Link>
            </li>
          </ul>

          <ul className="navbar__right">
            <li className="navbar__item"><Link to="/soon">Profile</Link></li>
            <li className="navbar__item"><Link to="/" onClick={this.handleLogout}>Logout</Link></li>
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
            <Link to="/soon">News</Link>
          </li>
          <li className="navbar__item">
            <Link to="/soon">Get Started</Link>
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
