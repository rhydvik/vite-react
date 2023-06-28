/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios, { AxiosError, AxiosResponse } from 'axios';
import { get } from 'lodash';

const config = {
  env: {
    // eslint-disable-next-line no-undef
    API_BASE_URL: 'https://tgdemo.pjsgroup.com/public/api', //process.env.REACT_APP_REPAIR_SEARCH_URL,
  },
};

// for api that don't use any authentication
export const authApi = axios.create({
  baseURL: config.env.API_BASE_URL,
  timeout: 60 * 1000,
});

const handleResponse = (response: AxiosResponse) => {
  // logRequest(config);
    console.log('API', 'Response', response); // eslint-disable-line
  if (response.data.error === undefined) {
    return get(response, 'data');
  } else {
    throw response;
  }
};

const handleResponseError = (error: AxiosError) => {
    console.log('ERROR RESPONSE', error); // eslint-disable-line
  throw error;
};

authApi.interceptors.response.use(handleResponse, handleResponseError);
