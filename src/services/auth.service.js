import decode from 'jwt-decode';
import axios from 'axios';

export default class AuthService {
  constructor(url) {
    this.url = url || process.env.local.API_URL;
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
  }

  getProfile() {
    return decode(this.getToken());
  }

  setToken(token) {
    localStorage.setItem('nl_token', token);
  }

  getToken() {
    return localStorage.getItem('nl_token');
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return err & false;
    }
  }

  loggedIn() {
    const token = this.getToken();
    if (token === null) {
      return false;
    } else if (token) {
      return true;
    }
  }

  logout() {
    localStorage.removeItem('nl_token');
  }

  signup(fullName, dateOfBirth, username, email, password) {
    return axios
      .post('https://tonik-server-test.herokuapp.com/api/v0/auth/user/signup', {
        fullName,
        email,
        dateOfBirth,
        password,
        username,
      })
      .then((res) => {
        console.log(res);
        this.setToken(res.data.token);
        return Promise.resolve(res);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  login(email, password) {
    return axios
      .post('https://nightlyfe-server.herokuapp.com/auth/login', {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        this.setToken(res.data.token);
        return Promise.resolve(res);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
}
