import {
    SEARCH_PRODUCTS,
    SEARCH_PRODUCTS_SUCCESS,
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRICE_BY_PRODUCT,
    GET_PRICE_BY_PRODUCT_SUCCESS,
    CHECK_ITEM_BY_PRODUCT,
    CHECK_ITEM_BY_PRODUCT_SUCCESS
} from '../constants/ActionsTypes';


export const getProducts = (params) => {
    return {
        type: GET_PRODUCTS,
        payload: params
    }
};

export const getProductsSuccess = (response) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: response
    }
};


export const searchProducts = (params) => {
    return {
        type: SEARCH_PRODUCTS,
        payload: params
    }
};

export const searchProductsSuccess = (response) => {
    return {
        type: SEARCH_PRODUCTS_SUCCESS,
        payload: response
    }
};

export const getPriceByProduct = (params) => {
    return {
        type: GET_PRICE_BY_PRODUCT,
        payload: params
    }
};

export const getPriceByProductSuccess = (response) => {
    return {
        type: GET_PRICE_BY_PRODUCT_SUCCESS,
        payload: response
    }
};

export const checkItemByProduct = (params) => {
    return {
        type: CHECK_ITEM_BY_PRODUCT,
        payload: params
    }
};

export const checkItemByProductSuccess = (response) => {
    return {
        type: CHECK_ITEM_BY_PRODUCT_SUCCESS,
        payload: response
    }
};
