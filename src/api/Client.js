import Axios from 'axios';

export const getClient = async (params) => {
  const response = await Axios.get('/Clientes/cliente');
  return response.data;
}


export const searchClients = async (params) => {     
  const response = await Axios.get('/Clientes/consulta',{ params: { idOperacion: params.idOperacion }});
  
  return response.data;
}


export const confirmationClient = async (params) => {     
  const response = await Axios.get('/Clientes/Selección/Confirmar',{ params });  
  return response.data;
}