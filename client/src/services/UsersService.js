const baseURL = 'http://localhost:3000/api/questions/';

export default {
  getUsers() {
    return fetch(baseURL)
    .then(res => res.json())
  },
  getUser() {

  }

  // TODO: Make a get single user function and link it to the TestPage
}
