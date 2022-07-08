import {
  TEST,
  CHANGE_LOGIN_STATUS,
} from '../ActionTypes'

export const test = ({ payload }) => ({
  type: TEST,
  payload,
})

export const changeLoginStatus = (payload) => ({
  type: CHANGE_LOGIN_STATUS,
  payload,
})
