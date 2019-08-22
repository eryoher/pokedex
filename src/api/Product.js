import Axios from 'axios';

export const getProducts = async (params) => {
    const response = await Axios.get('/Productos/consulta', { params: params });
    return response.data;
}

export const searchProducts = async (params) => {
    const response = await Axios.get('/Productos/busqueda', { params: params });
    return response.data;
}


export const getPriceByProduct = async (params) => {
    const response = await Axios.get('/Productos/precio', { params: params });
    return response.data;
}

export const checkItemByProduct = async (params) => {
    const response = await Axios.post('/Productos/checkItem', { params: params });
    return response.data;
}
