import axios from 'axios';
import Config from './config';
import Utils from '../utils/utils';

const instance = (contentType) =>
  axios.create({
    baseURL: Config.BASE_URL,
    headers: {
      Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
      'Content-Type': `${contentType}`,
    },
  });

export default instance;
