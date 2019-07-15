import { all } from 'redux-saga/effects';
import authSagas from './Auth';
import clientSagas from './Client';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    clientSagas()
  ]);
}
