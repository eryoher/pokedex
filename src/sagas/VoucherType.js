import { all, call, fork, put, takeEvery } from 'redux-saga/effects';


import {
    getVoucherType
} from '../api/VoucherType'

import { 
    GET_VOUCHER_TYPE 
} from '../constants/ActionsTypes';

import { 
    getVoucherTypeSuccess 
} from '../actions/VoucherType';



function* getVoucherTypeRequest({payload}) {
  try {
    const type = yield call(getVoucherType, payload);
    yield put(getVoucherTypeSuccess(type));
  } catch (error) {
  }
}


export function* getVoucherTypeSaga() {
  yield takeEvery(GET_VOUCHER_TYPE, getVoucherTypeRequest);
}

export default function* rootSaga() {
  yield all([
    fork(getVoucherTypeSaga),    
  ]);
}