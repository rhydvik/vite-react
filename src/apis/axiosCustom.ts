import axios, { AxiosError, AxiosResponse } from 'axios';
import { get } from 'lodash';

const config = {
  env: {
    API_BASE_URL: 'https://tgdemo.pjsgroup.com/public/api', //process.env.REACT_APP_REPAIR_SEARCH_URL,
  },
};

// for api that don't use any authentication
export const authApi = axios.create({
  baseURL: config.env.API_BASE_URL,
  timeout: 60 * 1000,
});

const handleResponse = (response: AxiosResponse) => {
  if (response.data.error === undefined) {
    return get(response, 'data');
  } else {
    throw response;
  }
};

const handleResponseError = (error: AxiosError) => {
  throw error;
};

authApi.interceptors.response.use(handleResponse, handleResponseError);
