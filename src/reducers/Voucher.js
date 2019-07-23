import { GET_CONFIG_VOUCHER, GET_CONFIG_VOUCHER_SUCCESS } from 'constants/ActionsTypes'

const initialState = {
    config: null,
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CONFIG_VOUCHER:
            return { ...state, config: null }
        case GET_CONFIG_VOUCHER_SUCCESS:
            return { ...state, config: action.payload.data }
        default:
            return state
    }
}

export default rootReducer