import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import PostCard from '../components/postCard'
// import postData from '../util/postCardFakedata.json'

import {
  postItems,
  postCommentLoading,
  currentUser,
  deleteCommentLoading,
  uploadFileLoading,
  deletePostLoading,
} from '../redux/selectors'

import {
  getPostItems,
  resetPostComment,
  resetDeleteComment,
  getUserInfo,
} from '../redux/actions'

function Home() {
  const dispatch = useDispatch()

  const postItem = useSelector(postItems)
  const submitLoadinbg = useSelector(postCommentLoading)
  const deletLoading = useSelector(deleteCommentLoading)
  const uploadLoading = useSelector(uploadFileLoading)
  const deletePostItemLoading = useSelector(deletePostLoading)
  const user = useSelector(currentUser)

  useEffect(() => {
    dispatch(getUserInfo())
  }, [])

  useEffect(() => {
    if (uploadLoading === false) {
      dispatch(getPostItems(user))
    }
  }, [uploadLoading])
  useEffect(() => {
    if (
      (submitLoadinbg === false && postItem)
    ) {
      dispatch(getPostItems(user))
      dispatch(resetPostComment())
    }
  }, [submitLoadinbg, postItem, deletLoading])

  useEffect(() => {
    if (deletLoading === false) {
      dispatch(getPostItems(user))
      dispatch(resetDeleteComment())
    }
  }, [deletLoading])

  useEffect(() => {
    if (deletePostItemLoading === false) {
      dispatch(getPostItems(user))
      dispatch(resetDeleteComment())
    }
  }, [deletePostItemLoading])

  return (
    <PostCard
      postData={postItem}
    />
  )
}

export default Home
