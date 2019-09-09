import { GET_LOAD_ITEMS, GET_LOAD_ITEMS_SUCCESS } from 'constants/ActionsTypes'

const initialState = {
    itemsCart: null,
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LOAD_ITEMS:
            return { ...state }
        case GET_LOAD_ITEMS_SUCCESS:
            return { ...state, itemsCart: action.payload.data }
        default:
            return state
    }
}

export default rootReducer