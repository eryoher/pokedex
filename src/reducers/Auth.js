import {
  SIGNIN_USER_SUCCESS,
  GET_USER_SUCCESS,
  GET_PERMISSIONS_SUCCESS,
  SIGNOUT_USER_SUCCESS,
} from 'constants/ActionsTypes'

const initialState = {}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_USER_SUCCESS:
      return { ...state, authUser: action.payload }
    case SIGNOUT_USER_SUCCESS:
      return { ...initialState }
    case GET_USER_SUCCESS:
      return { ...state, user: action.payload }
    case GET_PERMISSIONS_SUCCESS:
      return { ...state, permissions: action.payload }
    default:
      return state
  }
}

export default rootReducer