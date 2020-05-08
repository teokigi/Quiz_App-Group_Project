const baseURL = 'http://localhost:3000/api/questions/';

export default {
  getTopics() {
    return fetch(baseURL)
    .then(res => res.json())
  }
}
