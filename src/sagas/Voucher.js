import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    getConfigVoucher,
    getVoucherHead
} from '../api/Voucher'

import {
    GET_CONFIG_VOUCHER, GET_VOUCHER_HEAD
} from '../constants/ActionsTypes';


import { getConfigVoucherSuccess, getVoucherHeadSuccess } from '../actions/Voucher';


function* getConfigVoucherRequest({ payload }) {
    try {
        const config = yield call(getConfigVoucher, payload);
        yield put(getConfigVoucherSuccess(config));
    } catch (error) {
    }
}

function* getVoucherHeadRequest({ payload }) {
    try {
        const headData = yield call(getVoucherHead, payload);
        yield put(getVoucherHeadSuccess(headData));
    } catch (error) {
    }
}


export function* getConfigVoucherSaga() {
    yield takeEvery(GET_CONFIG_VOUCHER, getConfigVoucherRequest);
}

export function* getVoucherHeadSaga() {
    yield takeEvery(GET_VOUCHER_HEAD, getVoucherHeadRequest);
}


export default function* rootSaga() {
    yield all([
        fork(getConfigVoucherSaga),
        fork(getVoucherHeadSaga),
    ]);
}