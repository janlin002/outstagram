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

  DELETE_COMMENT,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
  RESET_DELETE_COMMENT,

  POST_UPLOAD_FILE,
  POST_UPLOAD_FILE_SUCCESS,
  POST_UPLOAD_FILE_FAILURE,
  RESET_UPLOAD_FILE,

  DELETE_POST_ITEM,
  DELETE_POST_ITEM_SUCCESS,
  DELETE_POST_ITEM_FAILURE,
  RESET_DELETE_POST_ITEM,

  POST_NEW_USER,
  POST_NEW_USER_SUCCESS,
  POST_NEW_USER_FAILURE,
  RESET_POST_NEW_USER,
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

  deleteCommentLoading: null,
  deleteCommentError: null,

  uploadFileLoading: null,
  uploadFileError: null,

  deletePostLoading: null,
  deletePostError: null,

  postNewUserLoading: null,
  postNewUserError: null,
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
        // postItems: [],
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

    case DELETE_COMMENT:
      return {
        ...state,
        deleteCommentLoading: true,
        deleteCommentError: null,
      }
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        deleteCommentLoading: false,
        deleteCommentError: null,
      }
    case DELETE_COMMENT_FAILURE:
      return {
        ...state,
        deleteCommentLoading: false,
        deleteCommentError: action.error,
      }
    case RESET_DELETE_COMMENT:
      return {
        ...state,
        deleteCommentLoading: null,
        deleteCommentError: null,
      }

    case POST_UPLOAD_FILE:
      return {
        ...state,
        uploadFileLoading: true,
        uploadFileError: null,
      }
    case POST_UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        uploadFileLoading: false,
        uploadFileError: null,
      }
    case POST_UPLOAD_FILE_FAILURE:
      return {
        ...state,
        uploadFileLoading: false,
        uploadFileError: action.error,
      }
    case RESET_UPLOAD_FILE:
      return {
        ...state,
        uploadFileLoading: null,
        uploadFileError: null,
      }

    case DELETE_POST_ITEM:
      return {
        ...state,
        deletePostLoading: true,
        deletePostError: null,
      }
    case DELETE_POST_ITEM_SUCCESS:
      return {
        ...state,
        deletePostLoading: false,
        deletePostError: null,
      }
    case DELETE_POST_ITEM_FAILURE:
      return {
        ...state,
        deletePostLoading: false,
        deletePostError: action.error,
      }
    case RESET_DELETE_POST_ITEM:
      return {
        ...state,
        deletePostLoading: null,
        deletePostError: null,
      }

    case POST_NEW_USER:
      return {
        ...state,
        postNewUserLoading: true,
        postNewUserError: null,
      }
    case POST_NEW_USER_SUCCESS:
      return {
        ...state,
        postNewUserLoading: false,
        postNewUserError: null,
      }
    case POST_NEW_USER_FAILURE:
      return {
        ...state,
        postNewUserLoading: false,
        postNewUserError: action.error,
      }
    case RESET_POST_NEW_USER:
      return {
        ...state,
        postNewUserLoading: null,
        postNewUserError: null,
      }
    default:
      return state
  }
}

export default reducer
