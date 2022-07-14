import React from 'react'
import { useSelector } from 'react-redux'

import PostCard from '../components/postCard'
import postData from '../util/postCardFakedata.json'

import {
  postItems,
} from '../redux/selectors'

function Home() {
  const postItem = useSelector(postItems)

  console.log(postItem, postData, 'userInfoData')

  return (
    <PostCard
      postData={postItem}
    />
  )
}

export default Home
