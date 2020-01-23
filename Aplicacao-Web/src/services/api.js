import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3329'
});

export default api;