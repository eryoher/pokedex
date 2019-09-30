import {
    SALES_AFFECTED_VALIDATE,
    SALES_AFFECTED_VALIDATE_SUCCESS,
    SALES_AFFECTED_QUANTITY,
    SALES_AFFECTED_QUANTITY_SUCCESS,
    SALES_AFFECTED_SUB_CALCULATION,
    SALES_AFFECTED_SUB_CALCULATION_SUCCESS,
    SALES_AFFECTED_CONFIRM,
    SALES_AFFECTED_CONFIRM_SUCCESS
} from 'constants/ActionsTypes'

const initialState = {
    cantValidate: null,
    productsInvol: null,
    subCalculations: null
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SALES_AFFECTED_VALIDATE:
            return { ...state, cantValidate: null }
        case SALES_AFFECTED_VALIDATE_SUCCESS:
            return { ...state, cantValidate: action.payload.data }
        case SALES_AFFECTED_QUANTITY:
            return { ...state, productsInvol: null }
        case SALES_AFFECTED_QUANTITY_SUCCESS:
            return { ...state, productsInvol: action.payload.data }
        case SALES_AFFECTED_SUB_CALCULATION:
            return { ...state, subCalculations: null }
        case SALES_AFFECTED_SUB_CALCULATION_SUCCESS:
            return { ...state, subCalculations: action.payload.data }
        case SALES_AFFECTED_CONFIRM:
            return { ...state, salesconfirm: null }
        case SALES_AFFECTED_CONFIRM_SUCCESS:
            return { ...state, salesconfirm: action.payload.data }
        default:
            return state
    }
}

export default rootReducer