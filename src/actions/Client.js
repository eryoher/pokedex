import {
    GET_CLIENT,
    GET_CLIENT_SUCCESS,
    SEARCH_CLIENTS,
    SEARCH_CLIENTS_SUCCESS
} from '../constants/ActionsTypes';


export const getClient = (params) => {
    return {
      type: GET_CLIENT,
      payload: params
    }
};

export const getClientSuccess = (response) => {
    return {
      type: GET_CLIENT_SUCCESS,
      payload: response
    }
};

export const searchClients = (params) => {
  return {
    type: SEARCH_CLIENTS,
    payload: params
  }
};

export const searchClientsSuccess = (response) => {
  return {
    type: SEARCH_CLIENTS_SUCCESS,
    payload: response
  }
};