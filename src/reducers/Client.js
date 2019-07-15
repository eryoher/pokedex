import { 
    GET_CLIENT, 
    GET_CLIENT_SUCCESS, 
    SEARCH_CLIENTS,
    SEARCH_CLIENTS_SUCCESS
} from 'constants/ActionsTypes'
  
  const initialState = {
    client:null,
    search:[]
  }
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GET_CLIENT:
        return { ...state, client: null }
      case GET_CLIENT_SUCCESS:
        return { ...state, client: action.payload }    
      case SEARCH_CLIENTS:
        return { ...state, search: [] }
      case SEARCH_CLIENTS_SUCCESS:
        return { ...state, search: action.payload }     
      default:
        return state
    }
  }
  
  export default rootReducer