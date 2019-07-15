import { all, call, fork, put, takeEvery } from 'redux-saga/effects';


import {
    getClient, searchClients
} from '../api/Client'

import { 
    GET_CLIENT, SEARCH_CLIENTS 
} from '../constants/ActionsTypes';

import { 
    getClientSuccess, searchClientsSuccess 
} from '../actions/Client';


function* getClientRequest() {
  try {
    const client = yield call(getClient);
    yield put(getClientSuccess(client));
  } catch (error) {
  }
}

function* searchClientsRequest() {
  try {
    const clients = yield call(searchClients);
    yield put(searchClientsSuccess(clients));
  } catch (error) {
  }
}

export function* getClientSaga() {
  yield takeEvery(GET_CLIENT, getClientRequest);
}

export function* searchClientsSaga() {
  yield takeEvery(SEARCH_CLIENTS, searchClientsRequest);
}

export default function* rootSaga() {
  yield all([
    fork(getClientSaga),
    fork(searchClientsSaga),

  ]);
}