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
