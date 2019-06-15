import {
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNOUT_USER,
  SIGNOUT_USER_SUCCESS,
  GET_USER,
  GET_USER_SUCCESS,
  GET_PERMISSIONS,
  GET_PERMISSIONS_SUCCESS,
} from '../constants/ActionsTypes';

export const userSignIn = (credentials) => {
  return {
    type: SIGNIN_USER,
    payload: credentials
  };
};

export const userSignInSuccess = (authUser) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: authUser
  }
};

export const userSignOut = () => {
  return {
    type: SIGNOUT_USER,
  };
};

export const userSignOutSuccess = () => {
  return {
    type: SIGNOUT_USER_SUCCESS,
  }
};

export const getUser = () => {
  return {
    type: GET_USER,
  };
};

export const getUserSuccess = (user) => {
  return {
    type: GET_USER_SUCCESS,
    payload: user
  }
};

export const getPermissions = () => {
  return {
    type: GET_PERMISSIONS,
  };
};

export const getPermissionsSuccess = (permissions) => {
  return {
    type: GET_PERMISSIONS_SUCCESS,
    payload: permissions
  }
};