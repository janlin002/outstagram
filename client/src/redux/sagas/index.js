import {
  call, put, takeLatest,
} from 'redux-saga/effects'

import {
  CHANGE_LOGIN_STATUS,
} from '../ActionTypes'

function* changeLoginStatus(action) {
  try {
    const user = yield call(Api.fetchUser, action.payload.userId)
    yield put({ type: 'USER_FETCH_SUCCEEDED', user })
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

function* mySaga() {
  yield takeLatest('CHANGE_LOGIN_STATUS', changeLoginStatus)
}

export default mySaga
