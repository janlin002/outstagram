import {
  call, put, takeLatest,
} from 'redux-saga/effects'

import {
  GET_USER_INFO,
  GET_POST_ITEMS,
  UPDATE_USER_INFO,
  POST_COMMENT,
} from '../ActionTypes'

import {
  getUserInfoSuccess,
  getUserInfoFailure,

  getPostItemsSuccess,
  getPostItemsFailure,

  updateUserInfoSuccess,
  updateUserInfoFailure,

  postCommentSuccess,
} from '../actions'

import {
  fetchUser,
  fetchPosts,
  updateUserInfo,
  postComments,
} from '../../../api'

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

function* updateUserInfos({ payload }) {
  try {
    const updateItem = yield call(updateUserInfo, payload)
  } catch (error) {
    console.error(error)

    yield put(
      updateUserInfoFailure(error.message),
    )
  }
}

function* postComment({ payload }) {
  try {
    const postComment = yield call(postComments, payload)

    yield put(postCommentSuccess())
  } catch (error) {
    console.error(error)
  }
}

function* mySaga() {
  yield takeLatest(GET_USER_INFO, getUserInfo)
  yield takeLatest(GET_POST_ITEMS, getPostItems)
  yield takeLatest(UPDATE_USER_INFO, updateUserInfos)
  yield takeLatest(POST_COMMENT, postComment)
}

export default mySaga
