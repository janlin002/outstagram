import {
  TEST,
  TEST2,
} from '../ActionTypes'

export const test = ({ payload }) => ({
  type: TEST,
  payload,
})

export const test2 = ({ payload }) => ({
  type: TEST2,
  payload,
})
