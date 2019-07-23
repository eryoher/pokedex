import Axios from 'axios';

export const getConfigVoucher = async (params) => {
    const response = await Axios.get('/Comprobantes/config', params);
    return response.data;
}