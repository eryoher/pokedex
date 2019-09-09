import {
    GET_LOAD_ITEMS,
    GET_LOAD_ITEMS_SUCCESS
} from '../constants/ActionsTypes';

export const getLoadItems = (params) => {
    return {
        type: GET_LOAD_ITEMS,
        payload: params
    }
};

export const getLoadItemsSuccess = (response) => {
    return {
        type: GET_LOAD_ITEMS_SUCCESS,
        payload: response
    }
};