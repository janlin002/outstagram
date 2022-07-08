import {
  TEST,
  CHANGE_LOGIN_STATUS,
} from '../ActionTypes'

const defaultState = {
  name: '123',
  login: false,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TEST:
      return { ...state, name: '123' }
    case CHANGE_LOGIN_STATUS:
      return {
        ...state, login: action.payload,
      }
    default:
      return state
  }
}

export default reducer
