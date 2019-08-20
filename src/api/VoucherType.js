import Axios from 'axios';

export const getVoucherType = async (params) => {
  const response = await Axios.get('/TipoComprobantes/consulta', { params: params });
  return response.data;
}

export const getVoucherTypeByUser = async (params) => {
  const response = await Axios.get('/TipoComprobantes/user', { params: params });
  return response.data;
}