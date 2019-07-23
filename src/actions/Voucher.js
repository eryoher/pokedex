import {
    GET_CONFIG_VOUCHER,
    GET_CONFIG_VOUCHER_SUCCESS,
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
