import { login, logout } from '../services/user-service';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { isLoggedIn: true, user } : {};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        user: action.user
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export async function userLogin(username, password) {
  return dispatch => {
    login(username, password)
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export function userLogout() {
  return dispatch => {
    logout()
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const searchPlanent = (state = {
  results: []
}, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        results: action.results,
      };
    default:
      return state;
  }
};