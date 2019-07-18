import { GET_VOUCHER_TYPE, GET_VOUCHER_TYPE_SUCCESS } from 'constants/ActionsTypes'
  
  const initialState = {
    voucherType:null,    
  }
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GET_VOUCHER_TYPE:
        return { ...state, voucherType: null }
      case GET_VOUCHER_TYPE_SUCCESS:
        return { ...state, voucherType: action.payload }          
      default:
        return state
    }
  }
  
  export default rootReducer