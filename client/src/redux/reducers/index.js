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

  GET_CURRENT_USER,
  RESET_CURRENT_USER,

  UPDATE_USER_INFO,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_FAILURE,
  RESET_UPDATE_USER_INFO,

  POST_COMMENT,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAILURE,
  RESET_POST_COMMENT,
} from '../ActionTypes'

const defaultState = {
  name: '123',
  login: false,

  userInfo: [],
  userInfoLoading: null,
  userInfoError: null,

  postItems: [],
  postItemsLoading: null,
  postItemsError: null,

  currentUser: '',

  postComment: [],
  postCommentLoading: null,
  postCommentError: null,
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
        userInfoError: action.error,
        userInfoLoading: false,
      }
    case RESET_USER_INFO:
      return {
        ...state,
        userInfo: [],
        userInfoLoading: null,
        userInfoError: null,
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

    case GET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    case RESET_CURRENT_USER:
      return {
        ...state,
        currentUser: '',
      }

    case UPDATE_USER_INFO:
      return {
        ...state,
        updateUserInfo: [],
        updateUserInfoLoading: true,
      }
    case UPDATE_USER_INFO_SUCCESS:
      return {
        updateUserInfo: action.payload,
        updateUserInfoLoading: false,
      }
    case UPDATE_USER_INFO_FAILURE:
      return {
        ...state,
        updateUserInfoLoading: false,
        updateUserInfoError: action.error,
      }
    case RESET_UPDATE_USER_INFO:
      return {
        ...state,
        updateUserInfo: [],
        updateUserInfoLoading: null,
        updateUserInfoError: null,
      }

    case POST_COMMENT:
      return {
        ...state,
        postCommentLoading: true,
      }
    case POST_COMMENT_SUCCESS:
      return {
        ...state,
        postCommentLoading: false,
      }
    case POST_COMMENT_FAILURE:
      return {
        ...state,
        postCommentLoading: false,
      }
    case RESET_POST_COMMENT:
      return {
        ...state,
        postCommentLoading: null,
      }
    default:
      return state
  }
}

export default reducer
