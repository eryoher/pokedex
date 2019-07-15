import Axios from 'axios';

export const getClient = async (params) => {
  const response = await Axios.get('/Clientes/consulta');
  return response.data;
}


export const searchClients = async (params) => {
  const response = await Axios.post('/Clientes/consulta', params);
  return response.data;
}
