import {
  authHeader
} from '../helpers/auth-header';

// Logs a registered user in
function login(email, password) {
  // Create request options
  const requestOptions = {
    method: 'POST ',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
    }),
  };

  // Get the user via the backend route
  return fetch(`${process.env.local.API_URL}/login`, requestOptions)
    .then((user) => {
      localStorage.setItem('user', JSON.stringify(user));

      return user;
    });
}

function logout() {
  // Remove user-token from local storage
  localStorage.removeItem('user');
}

function signup() {}

export default {
  login,
  logout,
  signup,
};
