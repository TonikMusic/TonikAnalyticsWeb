/* eslint-disable quote-props */
/* eslint-disable no-undef */
// eslint-disable-next-line consistent-return
function authHeader() {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
    return {
      'Authorization': `Bearer ${user.token}`,
    };
  }
}

export default authHeader;
