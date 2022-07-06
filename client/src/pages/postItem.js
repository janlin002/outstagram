import React from 'react'
import PostCard from 'Components/postCard'

import postData from '../util/postCardFakedata.json'

function PostItem() {
  return (
    <PostCard
      postData={postData}
    />
  )
}

export default PostItem
