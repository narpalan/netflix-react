import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.0.11:3031',
});

export default axiosInstance;
