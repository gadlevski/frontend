import axios from 'axios';
import { USER_LOCALESTORAGE_KEY } from 'shared/const/localestorage';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(USER_LOCALESTORAGE_KEY) || '',
  },
});