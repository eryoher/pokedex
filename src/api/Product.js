import Axios from 'axios';

export const getProducts = async (params) => {
    const response = await Axios.get('/Productos/consulta', { params: params });
    return response.data;
}

export const searchProducts = async (params) => {
    let customParams = null;

    if (params.cod_prod) {
        customParams = { cod_prod: params.cod_prod }
    } else {
        customParams = { desc_prod: params.desc_prod }
    }
    const response = await Axios.get('/Productos/busqueda', { params: customParams });
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
