import Axios from 'axios';

export const getConfigVoucher = async (params) => {
    const response = await Axios.get('/Comprobantes/config', { params: params });
    return response.data;
}

export const getVoucherHead = async (params) => {
    const response = await Axios.get('/Comprobantes/ventaCabecera', { params: params });
    return response.data;
}