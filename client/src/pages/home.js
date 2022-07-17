import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import PostCard from '../components/postCard'
// import postData from '../util/postCardFakedata.json'

import {
  postItems,
  postCommentLoading,
  currentUser,
} from '../redux/selectors'

import {
  getPostItems,
  resetPostComment,
} from '../redux/actions'

function Home() {
  const dispatch = useDispatch()

  const postItem = useSelector(postItems)
  const submitLoadinbg = useSelector(postCommentLoading)
  const user = useSelector(currentUser)

  useEffect(() => {
    if (submitLoadinbg === false && postItem) {
      dispatch(getPostItems(user))
      dispatch(resetPostComment())
    }
  }, [submitLoadinbg, postItem])

  return (
    <PostCard
      postData={postItem}
    />
  )
}

export default Home
