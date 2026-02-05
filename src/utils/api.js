// src/utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://yourapi.com',
});

export default api;
