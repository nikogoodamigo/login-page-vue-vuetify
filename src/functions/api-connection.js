import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api' // replace with your backend API's base URL
});

export default instance;