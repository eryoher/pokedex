import { GET_CONFIG_VOUCHER, GET_CONFIG_VOUCHER_SUCCESS, GET_VOUCHER_HEAD, GET_VOUCHER_HEAD_SUCCESS } from '../constants/ActionsTypes'

const initialState = {
    config: null,
    headSale: null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_VOUCHER_HEAD:
            return { ...state, headSale: null }
        case GET_VOUCHER_HEAD_SUCCESS:
            return { ...state, headSale: action.payload.data }
        case GET_CONFIG_VOUCHER:
            return { ...state, config: null }
        case GET_CONFIG_VOUCHER_SUCCESS:
            return { ...state, config: action.payload.data }
        default:
            return state
    }
}

export default rootReducer