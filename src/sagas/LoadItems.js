import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    getLoadItems
} from '../api/LoadItems'

import {
    GET_LOAD_ITEMS
} from '../constants/ActionsTypes';

import {
    getLoadItemsSuccess
} from '../actions/LoadItems';


function* getLoadItemsRequest({ payload }) {
    try {
        const loadItems = yield call(getLoadItems, payload);
        yield put(getLoadItemsSuccess(loadItems));
    } catch (error) {
    }
}

export function* getLoadItemsSaga() {
    yield takeEvery(GET_LOAD_ITEMS, getLoadItemsRequest);
}

export default function* rootSaga() {
    yield all([
        fork(getLoadItemsSaga),

    ]);
}