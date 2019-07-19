import Axios from 'axios';

export const getVoucherType = async (params) => {
  const response = await Axios.get('/TipoComprobantes/consulta', { params: { idComprobante:"C.NVCR" }});
  return response.data;  
}