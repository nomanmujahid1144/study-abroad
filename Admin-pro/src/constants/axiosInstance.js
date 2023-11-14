import axios from 'axios';
export const axiosInstance = axios.create({
  // baseURL: 'http://localhost:1212',
  baseURL: 'https://server.overseasstudypros.com',
});

const addTokenToRequest = (config) => {
  const token = localStorage.getItem('token');
  if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    config.headers.Authorization = `${token}`;
  }
  return config;
};

axiosInstance.interceptors.request.use(addTokenToRequest);

export default axiosInstance;
