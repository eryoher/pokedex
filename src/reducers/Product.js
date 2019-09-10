import {
    SEARCH_PRODUCTS,
    SEARCH_PRODUCTS_SUCCESS,
    GET_PRICE_BY_PRODUCT,
    GET_PRICE_BY_PRODUCT_SUCCESS,
    CHECK_ITEM_BY_PRODUCT,
    CHECK_ITEM_BY_PRODUCT_SUCCESS,
    SET_TABLE_DATA_PRODUCTS
} from 'constants/ActionsTypes'

const initialState = {
    search: [],
    price: null,
    productsUpdate: null,
    paramsPrice: null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_PRODUCTS:
            return { ...state, search: [], productsUpdate: null }
        case SEARCH_PRODUCTS_SUCCESS:
            return { ...state, search: action.payload.data }
        case GET_PRICE_BY_PRODUCT:
            return { ...state, price: null, paramsPrice: action.payload }
        case GET_PRICE_BY_PRODUCT_SUCCESS:
            const price = action.payload.data;
            const { paramsPrice } = state;
            let updateState = {
                ...state,
                productsUpdate: [
                    ...state.search.Productos,
                ],
                price
            }

            if (updateState.productsUpdate) {
                updateState.productsUpdate.forEach(prd => {
                    if (prd.niprod === paramsPrice.Idproducto) {
                        prd.precio_unit = price.prod_pcio_vta
                        prd.neto = (parseFloat(price.prod_pcio_vta) * parseInt(paramsPrice.cantidad)).toString();
                        prd.cantidad = parseInt(paramsPrice.cantidad);
                    }
                });
            }

            return updateState;
        case CHECK_ITEM_BY_PRODUCT:
            return { ...state, itemTable: null }
        case CHECK_ITEM_BY_PRODUCT_SUCCESS:
            return { ...state, itemTable: action.payload.data }
        case SET_TABLE_DATA_PRODUCTS:
            const params = action.payload;
            let createState = {
                ...state,
                productsUpdate: [
                    ...state.search.Productos,
                ]
            }
            if (createState.productsUpdate) {
                createState.productsUpdate.forEach(prd => {
                    if (prd.niprod === params.niprod) {
                        prd[params.idcampo] = params.value
                    }
                });
            }

            return createState;
        default:
            return state
    }
}

export default rootReducer