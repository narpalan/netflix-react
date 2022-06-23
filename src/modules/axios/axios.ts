import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3031',
});

export default axiosInstance;
