import {
    GET_CONFIG_VOUCHER,
    GET_CONFIG_VOUCHER_SUCCESS,
    GET_VOUCHER_HEAD,
    GET_VOUCHER_HEAD_SUCCESS
} from '../constants/ActionsTypes';


export const getConfigVoucher = (params) => {
    return {
        type: GET_CONFIG_VOUCHER,
        payload: params
    }
};

export const getConfigVoucherSuccess = (response) => {
    return {
        type: GET_CONFIG_VOUCHER_SUCCESS,
        payload: response
    }
};


export const getVoucherHead = (params) => {
    return {
        type: GET_VOUCHER_HEAD,
        payload: params
    }
};

export const getVoucherHeadSuccess = (response) => {
    return {
        type: GET_VOUCHER_HEAD_SUCCESS,
        payload: response
    }
};