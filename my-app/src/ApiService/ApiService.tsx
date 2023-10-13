import axios from 'axios';
import { baseUrl, getGameUrl, getGanresUrl, getNewsUrl } from './connectionString';

export const getGanres = () => {
    return axios.get(baseUrl + getGanresUrl)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };

  export const getNews = () => {
    return axios.get(baseUrl + getNewsUrl)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };

  export const getGames = () => {
    return axios.get(baseUrl + getGameUrl)
      .then(response => response.data)
      .catch(error => {
        throw error;
      });
  };