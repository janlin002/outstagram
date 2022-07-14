import {
  TEST,
  CHANGE_LOGIN_STATUS,

  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE,
  RESET_USER_INFO,

  GET_POST_ITEMS,
  GET_POST_ITEMS_SUCCESS,
  GET_POST_ITEMS_FAILURE,
  RESET_POST_ITEMS,
} from '../ActionTypes'

const defaultState = {
  name: '123',
  login: false,

  userInfo: [],
  userInfoLoading: null,
  userInfoErro: null,

  postItems: [],
  postItemsLoading: null,
  postItemsError: null,
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
    case RESET_USER_INFO:
      return {
        ...state,
        userInfo: [],
        userInfoLoading: null,
        userInfoErro: null,
      }

    case GET_POST_ITEMS:
      return {
        ...state,
        postItems: [],
        postItemsLoading: true,
      }
    case GET_POST_ITEMS_SUCCESS:
      return {
        ...state,
        postItems: action.payload,
        postItemsLoading: false,
      }
    case GET_POST_ITEMS_FAILURE:
      return {
        ...state,
        postItemsLoading: false,
        postItemsError: action.error,
      }
    case RESET_POST_ITEMS:
      return {
        ...state,
        postItems: [],
        postItemsLoading: null,
        postItemsError: null,
      }
    default:
      return state
  }
}

export default reducer
