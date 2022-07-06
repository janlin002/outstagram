import React from 'react'
import { useDispatch } from 'react-redux'

import PostCard from '../components/postCard'
import postData from '../util/postCardFakedata.json'

import {
  test,
} from '../redux/actions'

function Home() {
  const dispatch = useDispatch()

  return (
    <PostCard
      postData={postData}
    />
  )
}

export default Home
