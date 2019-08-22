import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import {
    getProducts,
    searchProducts,
    getPriceByProduct,
    checkItemByProduct
} from '../api/Product'

import {
    GET_PRODUCTS, SEARCH_PRODUCTS, GET_PRICE_BY_PRODUCT, CHECK_ITEM_BY_PRODUCT
} from '../constants/ActionsTypes';

import {
    getProductsSuccess,
    searchProductsSuccess,
    getPriceByProductSuccess,
    checkItemByProductSuccess
} from 'actions';



function* getProductsRequest({ payload }) {
    try {
        const products = yield call(getProducts, payload);
        yield put(getProductsSuccess(products));
    } catch (error) {
    }
}

function* searchProductsRequest({ payload }) {
    try {
        const search = yield call(searchProducts, payload);
        yield put(searchProductsSuccess(search));
    } catch (error) {
    }
}

function* getPriceByProductRequest({ payload }) {
    try {
        const price = yield call(getPriceByProduct, payload);
        yield put(getPriceByProductSuccess(price));
    } catch (error) {
    }
}

function* checkItemByProductRequest({ payload }) {
    try {
        const itemResponse = yield call(checkItemByProduct, payload);
        yield put(checkItemByProductSuccess(itemResponse));
    } catch (error) {
    }
}

export function* getProductsSaga() {
    yield takeEvery(GET_PRODUCTS, getProductsRequest);
}

export function* searchProductsSaga() {
    yield takeEvery(SEARCH_PRODUCTS, searchProductsRequest);
}

export function* getPriceByProductSaga() {
    yield takeEvery(GET_PRICE_BY_PRODUCT, getPriceByProductRequest);
}

export function* checkItemByProductSaga() {
    yield takeEvery(CHECK_ITEM_BY_PRODUCT, checkItemByProductRequest);
}

export default function* rootSaga() {
    yield all([
        fork(getProductsSaga),
        fork(searchProductsSaga),
        fork(getPriceByProductSaga),
        fork(checkItemByProductSaga),
    ]);
}