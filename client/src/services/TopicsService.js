const baseURL = 'http://localhost:3000/api/questions/';

export default {
  getTopics() {
    return fetch(baseURL)
    .then(res => res.json())
  },

  getTopic(id) {
    return fetch(baseURL + id)
    .then(res => res.json())
  }
}
