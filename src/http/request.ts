import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
export const requestFile = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export default request;