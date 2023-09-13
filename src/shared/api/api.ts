import axios from 'axios';

export const api = axios.create({
  baseURL: __API__,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('user');
    if (token) {
      config.headers.authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);