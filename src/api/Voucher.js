import Axios from 'axios';

export const getConfigVoucher = async (params) => {
    //Carga la metada del formulario de voucher    
    const response = await Axios.get('/Comprobantes/config', { params: params });
    return response.data;
}

export const getVoucherHead = async (params) => {
    const response = await Axios.get('/Comprobantes/ventaCabecera', { params: params });
    return response.data;
}

export const voucherHeadAuto = async (params) => {
    const response = await Axios.get('/vta_cab_compr/atrib_autocompl', params);
    return response.data;
}

export const voucherHeadValidatekey = async (params) => {
    const response = await Axios.get('/vta_cab_compr/clave_valid', { params: params });
    return response.data;
}

export const voucherHeadCheckDate = async (params) => {
    const response = await Axios.get('/vta_cab_compr/fecha_valid', { params: params });
    return response.data;
}