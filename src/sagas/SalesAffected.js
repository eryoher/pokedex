import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    salesAffectedValidate,
    salesAffectedCant,
    salesAffectedSubCalculation,
    salesAffectedConfirm
} from '../api/SalesAffected'

import {
    SALES_AFFECTED_VALIDATE, SALES_AFFECTED_QUANTITY, SALES_AFFECTED_SUB_CALCULATION, SALES_AFFECTED_CONFIRM
} from '../constants/ActionsTypes';


import { salesAffectedValidateSuccess, salesAffectedCantSuccess, salesAffectedSubCalculationSuccess, salesAffectedConfirmSuccess } from 'actions';


function* salesAffectedValidateRequest({ payload }) {
    try {
        const items = yield call(salesAffectedValidate, payload);
        yield put(salesAffectedValidateSuccess(items));
    } catch (error) {
    }
}

function* salesAffectedCantRequest({ payload }) {
    try {
        const products = yield call(salesAffectedCant, payload);
        yield put(salesAffectedCantSuccess(products));
    } catch (error) {
    }
}


function* salesAffectedSubCalculationRequest({ payload }) {
    try {
        const subCalculations = yield call(salesAffectedSubCalculation, payload);
        yield put(salesAffectedSubCalculationSuccess(subCalculations));
    } catch (error) {
    }
}

function* salesAffectedConfirmRequest({ payload }) {
    try {
        const salesconfirm = yield call(salesAffectedConfirm, payload);
        yield put(salesAffectedConfirmSuccess(salesconfirm));
    } catch (error) {
    }
}


export function* salesAffectedValidateSaga() {
    yield takeEvery(SALES_AFFECTED_VALIDATE, salesAffectedValidateRequest);
}

export function* salesAffectedCantSaga() {
    yield takeEvery(SALES_AFFECTED_QUANTITY, salesAffectedCantRequest);
}

export function* salesAffectedSubCalculationSaga() {
    yield takeEvery(SALES_AFFECTED_SUB_CALCULATION, salesAffectedSubCalculationRequest);
}

export function* salesAffectedConfirmSaga() {
    yield takeEvery(SALES_AFFECTED_CONFIRM, salesAffectedConfirmRequest);
}

export default function* rootSaga() {
    yield all([
        fork(salesAffectedValidateSaga),
        fork(salesAffectedCantSaga),
        fork(salesAffectedSubCalculationSaga),
        fork(salesAffectedConfirmSaga),
    ]);
}