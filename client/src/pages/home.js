import React from 'react'
import { useSelector } from 'react-redux'

import PostCard from '../components/postCard'
import postData from '../util/postCardFakedata.json'

import {
  loginStatus,
} from '../redux/selectors'

function Home() {
  const userLoginStatus = useSelector(loginStatus)

  console.log(userLoginStatus, 'userLoginStatus')

  return (
    <PostCard
      postData={postData}
    />
  )
}

export default Home
