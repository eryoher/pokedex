import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    getConfigVoucher
} from '../api/Voucher'

import {
    GET_CONFIG_VOUCHER
} from '../constants/ActionsTypes';


import { getConfigVoucherSuccess } from '../actions/Voucher';


function* getConfigVoucherRequest({ payload }) {
    try {
        const config = yield call(getConfigVoucher, payload);
        yield put(getConfigVoucherSuccess(config));
    } catch (error) {
    }
}


export function* getConfigVoucherSaga() {
    yield takeEvery(GET_CONFIG_VOUCHER, getConfigVoucherRequest);
}

export default function* rootSaga() {
    yield all([
        fork(getConfigVoucherSaga),
    ]);
}