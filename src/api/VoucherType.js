import Axios from 'axios';

export const getVoucherType = async (params) => {
  const response = await Axios.get('/TipoComprobantes/consulta');
  return response.data;
}