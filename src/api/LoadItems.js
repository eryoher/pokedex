import Axios from 'axios';

export const getLoadItems = async (params) => {
    const response = await Axios.get('/Items/carga_item_vta', { params: params });
    return response.data;
}