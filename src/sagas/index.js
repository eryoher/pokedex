import { all } from 'redux-saga/effects';
import authSagas from './Auth';
import clientSagas from './Client';
import voucherTypeSaga from './VoucherType';
import voucherSaga from './Voucher';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    clientSagas(),
    voucherTypeSaga(),
    voucherSaga()
  ]);
}
