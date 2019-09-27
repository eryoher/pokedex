import { all, call, fork, put, takeEvery, throttle } from 'redux-saga/effects';

import {
    getProducts,
    searchProducts,
    getPriceByProduct,
    checkItemByProduct,
    getProductsCart,
    getProductsInvolvement
} from '../api/Product'

import {
    GET_PRODUCTS, SEARCH_PRODUCTS, GET_PRICE_BY_PRODUCT, CHECK_ITEM_BY_PRODUCT, GET_PRODUCTS_CART, SET_INPUT_FOCUS, GET_PRODUCTS_INVOLVEMENT
} from '../constants/ActionsTypes';

import {
    getProductsSuccess,
    searchProductsSuccess,
    getPriceByProductSuccess,
    checkItemByProductSuccess,
    getProductsCartSuccess,
    setInputFocusSuccess,
    getProductsInvolvementSuccess
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

function* getProductsCartRequest({ payload }) {
    try {
        const products = yield call(getProductsCart, payload);
        yield put(getProductsCartSuccess(products));
    } catch (error) {
    }
}


function* setInputFocusRequest({ payload }) {
    try {
        yield put(setInputFocusSuccess(payload));
    } catch (error) {
    }
}


function* getProductsInvolvementRequest({ payload }) {
    try {
        const products = yield call(getProductsInvolvement, payload);
        yield put(getProductsInvolvementSuccess(products));
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

export function* getProductsCartSaga() {
    yield takeEvery(GET_PRODUCTS_CART, getProductsCartRequest);
}

export function* setFocusInputSaga() {
    yield throttle(10000, SET_INPUT_FOCUS, setInputFocusRequest);
}

export function* getProductsInvolvementSaga() {
    yield takeEvery(GET_PRODUCTS_INVOLVEMENT, getProductsInvolvementRequest);
}

export default function* rootSaga() {
    yield all([
        fork(getProductsSaga),
        fork(searchProductsSaga),
        fork(getPriceByProductSaga),
        fork(checkItemByProductSaga),
        fork(getProductsCartSaga),
        fork(setFocusInputSaga),
        fork(getProductsInvolvementSaga)
    ]);
}