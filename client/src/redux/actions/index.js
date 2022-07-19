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

export const test = ({ payload }) => ({
  type: TEST,
  payload,
})

export const changeLoginStatus = (payload) => ({
  type: CHANGE_LOGIN_STATUS,
  payload,
})

export const getUserInfo = (payload) => ({
  type: GET_USER_INFO,
  payload,
})
export const getUserInfoSuccess = (payload) => ({
  type: GET_USER_INFO_SUCCESS,
  payload,
})
export const getUserInfoFailure = (payload) => ({
  type: GET_USER_INFO_FAILURE,
  payload,
})
export const resetUserInfo = (payload) => ({
  type: RESET_USER_INFO,
  payload,
})

export const getPostItems = (payload) => ({
  type: GET_POST_ITEMS,
  payload,
})
export const getPostItemsSuccess = (payload) => ({
  type: GET_POST_ITEMS_SUCCESS,
  payload,
})
export const getPostItemsFailure = (payload) => ({
  type: GET_POST_ITEMS_FAILURE,
  payload,
})
export const resetPostItems = (payload) => ({
  type: RESET_POST_ITEMS,
  payload,
})

export const getCurrentUser = (payload) => ({
  type: GET_CURRENT_USER,
  payload,
})
export const resetCurrentUser = (payload) => ({
  type: RESET_CURRENT_USER,
  payload,
})

export const updateUserInfo = (payload) => ({
  type: UPDATE_USER_INFO,
  payload,
})
export const updateUserInfoSuccess = (payload) => ({
  type: UPDATE_USER_INFO_SUCCESS,
  payload,
})
export const updateUserInfoFailure = (payload) => ({
  type: UPDATE_USER_INFO_FAILURE,
  payload,
})
export const resetUpdateUserInfo = (payload) => ({
  type: RESET_UPDATE_USER_INFO,
  payload,
})

export const postComment = (payload) => ({
  type: POST_COMMENT,
  payload,
})
export const postCommentSuccess = (payload) => ({
  type: POST_COMMENT_SUCCESS,
  payload,
})
export const postCommentFailure = (payload) => ({
  type: POST_COMMENT_FAILURE,
  payload,
})
export const resetPostComment = (payload) => ({
  type: RESET_POST_COMMENT,
  payload,
})

export const deleteComment = (payload) => ({
  type: DELETE_COMMENT,
  payload,
})
export const deleteCommentSuccess = (payload) => ({
  type: DELETE_COMMENT_SUCCESS,
  payload,
})
export const deleteCommentFailure = (payload) => ({
  type: DELETE_COMMENT_FAILURE,
  payload,
})
export const resetDeleteComment = (payload) => ({
  type: RESET_DELETE_COMMENT,
  payload,
})

export const postUploadFile = (payload) => ({
  type: POST_UPLOAD_FILE,
  payload,
})
export const postUploadFileSuccess = (payload) => ({
  type: POST_UPLOAD_FILE_SUCCESS,
  payload,
})
export const postUploadFileFailure = (payload) => ({
  type: POST_UPLOAD_FILE_FAILURE,
  payload,
})
export const resetUploadFile = (payload) => ({
  type: RESET_UPLOAD_FILE,
  payload,
})

export const deletePostItem = (payload) => ({
  type: DELETE_POST_ITEM,
  payload,
})
export const deletePostItemSuccess = (payload) => ({
  type: DELETE_POST_ITEM_SUCCESS,
  payload,
})
export const deletePostItemFailure = (payload) => ({
  type: DELETE_POST_ITEM_FAILURE,
  payload,
})
export const resetDeletePostItem = (payload) => ({
  type: RESET_DELETE_POST_ITEM,
  payload,
})

export const postNewUser = (payload) => ({
  type: POST_NEW_USER,
  payload,
})
export const postNewUserSuccess = (payload) => ({
  type: POST_NEW_USER_SUCCESS,
  payload,
})
export const postNewUserFailure = (payload) => ({
  type: POST_NEW_USER_FAILURE,
  payload,
})
export const resetPostNewUser = (payload) => ({
  type: RESET_POST_NEW_USER,
  payload,
})
