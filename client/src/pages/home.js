import React from 'react'
import { useSelector } from 'react-redux'

import PostCard from '../components/postCard'
import postData from '../util/postCardFakedata.json'

import {
  loginStatus,
  userInfo,
  userInfoLoading,
} from '../redux/selectors'

function Home() {
  // const userLoginStatus = useSelector(loginStatus)
  const userInfoData = useSelector(userInfo)
  const userInfoDataLoading = useSelector(userInfoLoading)

  console.log(userInfoData, postData, 'userInfoData')

  return (
    <PostCard
      postData={postData}
    />
  )
}

export default Home
