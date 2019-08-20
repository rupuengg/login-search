import { API_URL } from '../config/constants';

// Login
export async function login(username, password) {
  return fetch(API_URL + "people/?search=" + username)
    .then(res => res.json())
    .then(res => {
      if (res.count > 0) {
        localStorage.setItem('user', JSON.stringify(res.results[0]));
        return res.results[0];
      } else {
        return null;
      }
    })
    .catch(err => {
      console.log(err);
    })
}

// Login
export async function logout() {
  localStorage.removeItem('user');
  return true;
}