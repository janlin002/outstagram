import {
  TEST,
  TEST2,
} from '../ActionTypes'

const defaultState = {
  name: '123',
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TEST:
      return { ...state, name: '123' }
    default:
      return state
  }
}

export default reducer
