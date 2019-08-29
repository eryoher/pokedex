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
    productsUpdate: null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_PRODUCTS:
            return { ...state, search: [], productsUpdate: null }
        case SEARCH_PRODUCTS_SUCCESS:
            return { ...state, search: action.payload.data }
        case GET_PRICE_BY_PRODUCT:
            return { ...state, price: null }
        case GET_PRICE_BY_PRODUCT_SUCCESS:
            return { ...state, price: action.payload.data }
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