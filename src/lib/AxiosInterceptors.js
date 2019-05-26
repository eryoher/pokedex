import Axios from 'axios';
import NProgress from 'nprogress'
import getAppConfiguration from '@lib/AppConfiguration'
import { showLoader, hideLoader, userSignOut, showMessage } from '../actions';
import { readFile } from './Utils';

export default function configureAxios(store) {
  const config = getAppConfiguration();

  Axios.defaults.baseURL = config.apiURL;
  Axios.defaults.timeout = 30000;

  Axios.interceptors.request.use((config) => {
    //Before request is sent

    NProgress.start();

    store.dispatch(showLoader())

    return config;
  }, function (error) {
    //Request error

    return Promise.reject(error);
  });

  // Add a response interceptor
  Axios.interceptors.response.use((response) => {
    //Response

    store.dispatch(hideLoader());

    setTimeout(() => {
      NProgress.done();
    }, 1000);

    return response;
  }, function (error) {
    //Response error

    store.dispatch(hideLoader());

    setTimeout(() => {
      NProgress.done();
    }, 1000);

    if (error.response && error.response.status === 401) {
      store.dispatch(userSignOut());
    } else if (!error.response && error.request && error.request.status === 0) {
      store.dispatch(showMessage({
        type: 'error',
        message: 'Error',
        description: "Network error",
      }));
    } else if (error && error.code && error.code === 'ECONNABORTED') {
      store.dispatch(showMessage({
        type: 'error',
        message: 'Error',
        description: "Timeout error",
      }));
    } else {      
      if( error.response.data.type && error.response.data.type !== undefined ){ //Only works when the request and the error response are type blob
        const filData = readFile(error.response.data)        
        filData.then(function (message) {
            store.dispatch(showMessage({
              type: 'error',
              message: 'Error',
              description: message,
            }));
        });            
      }else{
        const data = (error.response) ? error.response.data : error.data;
        const message = data || "Error communicating with server";        
        store.dispatch(showMessage({
          type: 'error',
          message: 'Error',
          description: message,
        }));
      }     
    }

    return Promise.reject(error);
  });

  //Set initial token
  if (typeof window !== 'undefined') {
    const token = window.localStorage.getItem('token');
    if (token) {
      Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }

}