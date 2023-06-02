import axios from 'axios';

axios.defaults.baseURL = 'https://myshopecommerce.pythonanywhere.com/api/v1/'
const instance = axios.create({
  baseURL: process.env.BACK_URL,
});

export const token = localStorage.getItem('token')

export default instance;