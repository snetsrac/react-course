import axios from 'axios';

export const streamApi = axios.create({
  baseURL: 'http://localhost:3001'
});
