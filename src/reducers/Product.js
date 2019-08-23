import {
    SEARCH_PRODUCTS,
    SEARCH_PRODUCTS_SUCCESS,
    GET_PRICE_BY_PRODUCT,
    GET_PRICE_BY_PRODUCT_SUCCESS,
    CHECK_ITEM_BY_PRODUCT,
    CHECK_ITEM_BY_PRODUCT_SUCCESS
} from 'constants/ActionsTypes'

const initialState = {
    search: [],
    price: null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_PRODUCTS:
            return { ...state, search: [] }
        case SEARCH_PRODUCTS_SUCCESS:
            console.log(action.payload)
            return { ...state, search: action.payload.data }
        case GET_PRICE_BY_PRODUCT:
            return { ...state, price: null }
        case GET_PRICE_BY_PRODUCT_SUCCESS:
            return { ...state, price: action.payload.data }
        case CHECK_ITEM_BY_PRODUCT:
            return { ...state, itemTable: null }
        case CHECK_ITEM_BY_PRODUCT_SUCCESS:
            return { ...state, itemTable: action.payload.data }
        default:
            return state
    }
}

export default rootReducer