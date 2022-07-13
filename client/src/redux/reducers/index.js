import {
  TEST,
  CHANGE_LOGIN_STATUS,

  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE,
  RESET_USER_INFO,
} from '../ActionTypes'

const defaultState = {
  name: '123',
  login: false,

  userInfo: [],
  userInfoLoading: null,
  userInfoErro: null,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        name: '123',
      }
    case CHANGE_LOGIN_STATUS:
      return {
        ...state,
        login: action.payload,
      }

    case GET_USER_INFO:
      return {
        ...state,
        userInfo: [],
        userInfoLoading: true,
      }
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        userInfoLoading: false,
      }
    case GET_USER_INFO_FAILURE:
      return {
        ...state,
        userInfoErro: action.error,
        userInfoLoading: false,
      }
    // case RESET_USER_INFO:
    //   return {
    //     ...state,
    //     userInfo: [],
    //     userInfoLoading: null,
    //     userInfoErro: null,
    //   }
    default:
      return state
  }
}

export default reducer
