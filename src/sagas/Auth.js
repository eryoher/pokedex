import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { BrowserRouter as Router } from "react-router-dom"; // TODO jfarina: perhaps we should retrieve the router from AppConfiguration
import Axios from 'axios';

import {
  SIGNIN_USER,
  SIGNOUT_USER,
  GET_USER,
  GET_PERMISSIONS,
} from '../constants/ActionsTypes';

import {
  signInUser,
  getUser,
  getPermissions,
} from '../api/Auth'

import { 
  userSignInSuccess,
  userSignOutSuccess,
  getUserSuccess,
  getPermissionsSuccess,
} from '../actions/Auth';

import {
  showError,
} from '../actions/Common';

function* signInUserRequest({ payload }) {
  const { user, password} = payload;
  try {
    const token = yield call(signInUser, user, password);
    localStorage.setItem('token', token);
    Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    yield put(userSignInSuccess());
    Router.push('/main');//TODO jfarina replace with logic to refer to route by ID
  } catch (error) {
    if(error.response && error.response.status === 401) {
      yield put(showError('Invalid username or password'));
    } else if (!error.response && error.request && error.request.status === 0) {
      yield put(showError('Network error'));
    } else {
      yield put(showError('Error communicating with server'));
    }
  }
}

function* signOutUserRequest() {
  localStorage.removeItem('token');
  delete Axios.defaults.headers.common['Authorization'];
  yield put(userSignOutSuccess());
  Router.push('/')//TODO jfarina replace with logic to refer to route by ID
}

function* getUserRequest() {
  try {
    const user = yield call(getUser);
    yield put(getUserSuccess(user));
  } catch (error) {
  }
}

function* getPermissionsRequest() {
  try {
    const permissions = yield call(getPermissions);
    yield put(getPermissionsSuccess(permissions));
  } catch (error) {
  }
}

export function* signInUserSaga() {
  yield takeEvery(SIGNIN_USER, signInUserRequest);
}

export function* signOutUserSaga() {
  yield takeEvery(SIGNOUT_USER, signOutUserRequest);
}

export function* getUserSaga() {
  yield takeEvery(GET_USER, getUserRequest);
}

export function* getPermissionsSaga() {
  yield takeEvery(GET_PERMISSIONS, getPermissionsRequest);
}

export default function* rootSaga() {
  yield all([
    fork(signInUserSaga),
    fork(signOutUserSaga),
    fork(getUserSaga),
    fork(getPermissionsSaga),
  ]);
}