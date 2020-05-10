const baseURL = 'http://localhost:3000/api/users/';

export default {
  getUsers() {
    return fetch(baseURL)
    .then(res => res.json())
  },

  getUser(id) {
    return fetch(baseURL + id)
    .then(res => res.json())
  },

  updateUser(id, payload) {
    return fetch(baseURL + id, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
  },

  postUser(payload) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
  }
}
