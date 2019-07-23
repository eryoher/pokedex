import {
  GET_VOUCHER_TYPE,
  GET_VOUCHER_TYPE_SUCCESS,

} from '../constants/ActionsTypes';


export const getVoucherType = (params) => {
  return {
    type: GET_VOUCHER_TYPE,
    payload: params
  }
};

export const getVoucherTypeSuccess = (response) => {
  return {
    type: GET_VOUCHER_TYPE_SUCCESS,
    payload: response
  }
};
