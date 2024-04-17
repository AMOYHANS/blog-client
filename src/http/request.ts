import axios from 'axios';

const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL + 'api',
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
});
export const requestFile = axios.create({
  baseURL: import.meta.env.VITE_API_URL + 'api',
  timeout: 50000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export default request;