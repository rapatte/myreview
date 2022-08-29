import axios from 'axios';
import { Http } from './Http';

const headers = {
  'Content-Type': 'application/json',
};

axios.defaults.baseURL = `http://localhost:8080`;
// axios.defaults.withCredentials = true;

export const HttpAxios: Http = {
  get: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await axios.get(path, {
      ...config,
      params: params,
      headers,
      withCredentials: true,
    });
    return response.data as T;
  },
  post: async <T>(path: string, params?: Record<string, any>, config?: any) => {
    const response = await axios.post(
      path,
      { ...params },
      { ...config, headers, withCredentials: true },
    );
    return response.data as T;
  },
  patch: async <T>(
    path: string,
    params?: Record<string, any>,
    config?: any,
  ) => {
    const response = await axios.patch(
      path,
      { ...params },
      { ...config, headers },
    );
    return response.data as T;
  },
  delete: async <T>(path: string, params?: any, config?: any) => {
    const response = await axios.delete(path, {
      ...config,
      params: params,
      headers,
    });
    return response.data as T;
  },
  request: async options => await axios.request(options),
};
export const setAuthToken = () => {
  // const requestHandler = (request: any) => {
  //   request.headers.Authorization = `Bearer ${cookies.jwtToken}`;
  //   return request;
  // };
  // if (token) {
  // console.log(axios.interceptors.response.use(response => response));
  // axios.interceptors.request.use(request => {
  //   console.log(request.headers);
  // });
  //   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  // } else {
  //   delete axios.defaults.headers.common['Authorization'];
  //   localStorage.removeItem('token');
  // }
};
