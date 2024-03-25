import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import store from '../store';
import { message } from 'antd';
import { clearToken } from '../store/modules/users';
import router from '../router';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000
});

instance.interceptors.request.use(function (config) {
  if(config.headers){
    config.headers.authorization = store.getState().users.token;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
  if(response.data.errmsg === 'token error'){
    message.error('token error')
    store.dispatch(clearToken())
    setTimeout(()=>{
      window.location.replace('/login')
    }, 1000)
  }
  else if(response.data.errmsg === 'error'){
    router.navigate('/500');
  }
  return response;
}, function (error) {
  return Promise.reject(error);
});

interface Data {
  [index: string]: unknown
}

interface Http {
  get: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  post: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  put: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  patch: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
  delete: (url: string, data?: Data, config?: AxiosRequestConfig) => Promise<AxiosResponse>
}

const http: Http = {
  get(url, data, config){
    return instance.get(url, {
      params: data,
      ...config
    })
  },
  post(url, data, config){
    return instance.post(url, data, config)
  },
  put(url, data, config){
    return instance.put(url, data, config)
  },
  patch(url, data, config){
    return instance.patch(url, data, config)
  },
  delete(url, data, config){
    return instance.delete(url, {
      data,
      ...config
    })
  }
}

export default http;
