import axios from 'axios';
import { baseUrl, getGanresUrl } from './connectionString';

export const getGanres = () => {
    return axios.get(baseUrl + getGanresUrl)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };