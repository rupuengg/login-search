import { API_URL } from '../config/constants';

// Search Planets
export async function search(searchText) {
  return fetch(API_URL + "planets/?search=" + searchText)
    .then(res => res.json())
    .then(res => {
      if (res.count > 0) {
        return res.results;
      } else {
        return [];
      }
    })
    .catch(err => {
      console.log(err);
    })
}

// Login
export async function getPlanet(url) {
  return fetch(url)
    .then(res => res.json())
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
    });
}