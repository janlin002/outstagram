import React, { useState } from 'react'
// import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
// import { BiMessageRounded } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import '../assets/css/postCard.scss'
import PostNoData from './postCardNoData'
import PostImage from './postImage'

function PostCard({ postData }) {
  // const [hitHeart, setHitHeart] = useState(false)
  const [commentText, setCommentText] = useState('')
  const navigate = useNavigate()

  // const handleHeartIcon = () => {
  //   setHitHeart(!hitHeart)
  // }

  const handleSubmit = () => {
    setCommentText('')
  }

  return (
    postData.length === 0 ? <PostNoData /> : (
      postData.map((item) => (
        <div className="post-card-style">
          <div className="card-deck d-block justify-content-center mt-3">
            <div className="card col-6 m-auto">
              <div className="card-body">
                <div className="d-flex mb-3">
                  <img className="card-img-top card-image" src={item.avatar} alt="CardImage" />
                  <div className="d-flex justify-content-center" style={{ marginLeft: '10px' }}>
                    <div
                      role="button"
                      className="d-flex justify-content-center card-name"
                      onClick={() => navigate('/userInfo')}
                      onKeyDown={() => navigate('/userInfo')}
                      tabIndex={0}
                    >
                      {item.userName}
                    </div>
                  </div>
                </div>
                <PostImage imageData={item.postImage} />
                {/* <div className="d-flex">
                  <div
                    role="button"
                    className="card-icon"
                    onClick={() => handleHeartIcon()}
                    tabIndex={0}
                    onKeyDown=""
                  >
                    {
                  hitHeart ? (
                    <AiFillHeart
                      style={{ color: 'red' }}
                      size={30}
                    />
                  ) : (
                    <AiOutlineHeart
                      size={30}
                    />
                  )
                }
                  </div>
                  <div role="button" className="card-icon">
                    <BiMessageRounded size={30} />
                  </div>
                </div>
                <div>
                  <h5>
                    {(item.like.replace(/\B(?=(\d{3})+(?!\d))/g, ','))}個讚
                  </h5>
                </div> */}

                <h3 className="text-center m-3">留言板</h3>

                {
                  item.postContent.length === 0 ? (
                    <div className="mt-3 mb-3">目前沒有留言...</div>
                  ) : (
                    item.postContent.map((contentItem) => (
                      <div className="d-block">
                        <p className="card-text">
                          <b style={{ marginRight: '10px' }}>
                            {contentItem.name}
                          </b>
                          {contentItem.content}
                        </p>
                      </div>
                    ))
                  )
                }
                <div>
                  <input
                    type="text"
                    style={{ width: '100%' }}
                    placeholder="請輸入..."
                    onChange={(e) => setCommentText(e.target.value)}
                    value={commentText}
                  />
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    送出
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    )
  )
}

export default PostCard

PostCard.propTypes = {
  postData: PropTypes.instanceOf(Object).isRequired,
}

// TODO 按讚需要做分辨，不然全部都會勾起來
