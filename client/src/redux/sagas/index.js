import {
  call, put, takeLatest,
} from 'redux-saga/effects'

import {
  GET_USER_INFO,
} from '../ActionTypes'

import {
  getUserInfoSuccess,
  getUserInfoFailure,
} from '../actions'

import { fetchUser } from '../../../api'

function* getUserInfo() {
  try {
    const user = yield call(fetchUser)

    console.table(user.data)

    const { data } = user

    yield put(
      getUserInfoSuccess(data),
    )
  } catch (error) {
    console.error(error)
    yield put(
      getUserInfoFailure(error.message),
    )
  }
}

function* mySaga() {
  yield takeLatest(GET_USER_INFO, getUserInfo)
}

export default mySaga
