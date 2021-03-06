import {
  call, put, takeLatest,
} from 'redux-saga/effects'

import {
  GET_USER_INFO,
  GET_POST_ITEMS,
  UPDATE_USER_INFO,
  POST_COMMENT,
  DELETE_COMMENT,
  POST_UPLOAD_FILE,
  DELETE_POST_ITEM,
  POST_NEW_USER,
  DELETE_USER,
} from '../ActionTypes'

import {
  getUserInfoSuccess,
  getUserInfoFailure,

  getPostItemsSuccess,
  getPostItemsFailure,

  updateUserInfoSuccess,
  updateUserInfoFailure,

  postCommentSuccess,

  deleteCommentSuccess,
  deleteCommentFailure,

  deletePostItemSuccess,
  deletePostItemFailure,

  postUploadFileSuccess,

  postNewUserSuccess,
  postNewUserFailure,

  deleteUserSuccess,
  deleteUserFailure,
} from '../actions'

import {
  fetchUser,
  fetchPosts,
  updateUserInfo,
  postComments,
  deleteComment,
  postFile,
  deletePost,
  createNewUser,
  deleteUser,
  deleteUserPost,
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

function* deleteCommentSaga({ payload }) {
  try {
    yield call(deleteComment, payload)

    yield put(deleteCommentSuccess())
  } catch (error) {
    console.error(error)
  }
}

function* postUploadFileSaga({ payload }) {
  const postValue = {
    avatar: payload.avatar,
    userName: payload.name,
    postImage: [
      {
        image: payload.file,
      },
    ],
    postContent: [],
    postId: '',
    info: payload.content,
  }
  try {
    yield call(postFile, postValue)

    yield put(postUploadFileSuccess())
  } catch (error) {
    console.error(error)
  }
}

function* deletePostItemSaga({ payload }) {
  const postValue = {
    id: payload,
  }

  try {
    yield call(deletePost, postValue)

    yield put(deletePostItemSuccess())
  } catch (error) {
    console.error(error)

    yield put(deletePostItemFailure({
      message: error.message,
    }))
  }
}

function* postNewUserSaga({ payload }) {
  try {
    yield call(createNewUser, payload)

    yield put(postNewUserSuccess())
  } catch (error) {
    console.error(error)

    yield put(postNewUserFailure({
      message: error.message,
    }))
  }
}

function* deleteUserSaga({ payload }) {
  const postValue = {
    name: payload,
  }
  try {
    yield call(deleteUser, postValue)

    yield call(deleteUserPost, postValue)

    yield put(deleteUserSuccess())
  } catch (error) {
    console.error(error)

    yield put(deleteUserFailure({
      message: error.message,
    }))
  }
}

function* mySaga() {
  yield takeLatest(GET_USER_INFO, getUserInfo)
  yield takeLatest(GET_POST_ITEMS, getPostItems)
  yield takeLatest(UPDATE_USER_INFO, updateUserInfos)
  yield takeLatest(POST_COMMENT, postComment)
  yield takeLatest(DELETE_COMMENT, deleteCommentSaga)
  yield takeLatest(POST_UPLOAD_FILE, postUploadFileSaga)
  yield takeLatest(DELETE_POST_ITEM, deletePostItemSaga)
  yield takeLatest(POST_NEW_USER, postNewUserSaga)
  yield takeLatest(DELETE_USER, deleteUserSaga)
}

export default mySaga
