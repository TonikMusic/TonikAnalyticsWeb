/* eslint-disable no-undef */
// import {
//   authHeader
// } from '../helpers/auth-header';

// Remove user-token from local storage
function logout() {
  localStorage.removeItem('user');
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // eslint-disable-next-line no-restricted-globals
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

// Logs a registered user in
function login(email, password) {
  // Create request options
  const requestOptions = {
    method: 'POST ',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  };

  // Get the user via the backend route
  return fetch(`${process.env.local.API_URL}/login`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      localStorage.setItem('user', JSON.stringify(user));

      return user;
    });
}

// Registers user based on Form Data
function signup(user) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user),
  };

  // Get the user via the backend route
  return fetch(`${process.env.local.API_URL}/signup`, requestOptions)
    .then(handleResponse);
}

export default authService = {
  login,
  logout,
  signup,
};
