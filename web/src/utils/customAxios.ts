import axios from 'axios';

const accessToken = localStorage.getItem('accessToken');

export const customAxios = axios.create({
  baseURL: '/api',
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
