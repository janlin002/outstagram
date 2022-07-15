import {
  call, put, takeLatest,
} from 'redux-saga/effects'

import {
  GET_USER_INFO,
  GET_POST_ITEMS,
} from '../ActionTypes'

import {
  getUserInfoSuccess,
  getUserInfoFailure,

  getPostItemsSuccess,
  getPostItemsFailure,
} from '../actions'

import { fetchUser, fetchPosts } from '../../../api'

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

function* getPostItems({ payload }) {
  try {
    const postItem = yield call(fetchPosts, payload)

    const postItems = postItem.data

    console.table(postItems)

    yield put(getPostItemsSuccess(postItems))
  } catch (error) {
    console.error(error)
    yield put(
      getPostItemsFailure(error.message),
    )
  }
}

function* mySaga() {
  yield takeLatest(GET_USER_INFO, getUserInfo)
  yield takeLatest(GET_POST_ITEMS, getPostItems)
}

export default mySaga
