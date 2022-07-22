import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
// import { BiMessageRounded } from 'react-icons/bi'
import { ImCross } from 'react-icons/im'
import { AiOutlineDelete } from 'react-icons/ai'

import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import { currentUser, userInfo } from '../redux/selectors'
import '../assets/css/postCard.scss'
import PostNoData from './postCardNoData'
import PostImage from './postImage'

import {
  postComment,
  deleteComment,
  deletePostItem,
} from '../redux/actions'

import {
  SwalDeleteComment,
  SwalDeletePost,
} from '../util/swal'

function PostCard({ postData }) {
  const dispatch = useDispatch()
  // const [hitHeart, setHitHeart] = useState(false)
  const [commentText, setCommentText] = useState('')
  const currentUsers = useSelector(currentUser)
  const navigate = useNavigate()
  const userInfoData = useSelector(userInfo)

  console.log(currentUsers, userInfoData, 'currentUsers')

  const normalData = userInfoData.find((item) => item.name === currentUsers)

  console.log(normalData, postData, 'normalData')

  // const handleHeartIcon = () => {
  //   setHitHeart(!hitHeart)
  // }

  const handleSubmit = () => {
    const value = {
      name: currentUsers,
      content: commentText,
      id: postData[0]._id,
    }
    setCommentText('')
    dispatch(postComment(value))
  }

  const deleteComments = (value) => {
    dispatch(deleteComment(value))
  }

  const handleDeleteComment = (deleteItem) => {
    SwalDeleteComment(() => deleteComments(deleteItem))
  }

  const deletePost = (value) => {
    dispatch(deletePostItem(value))
  }

  // 刪除貼文
  const handleDeletePost = (value) => {
    SwalDeletePost(() => deletePost(value))
  }

  return (
    postData.length === 0 ? <PostNoData /> : (
      postData.map((item) => (
        <div className="post-card-style">
          <div className="card-deck d-block justify-content-center mt-3">
            <div className="card col-lg-8 col-sm-10 m-auto ">
              <div className="card-body post-background-color">
                <div className="d-flex justify-content-between mb-3">
                  <div className="d-flex">
                    <img
                      className="card-img-top card-image"
                      src={userInfoData.find((postItem) => postItem.name === item.userName)?.avatar}
                      alt="CardImage"
                    />
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

                  <div
                    role="button"
                    onClick={() => handleDeletePost(item._id)}
                    tabIndex={0}
                    onKeyDown=""
                  >
                    <AiOutlineDelete
                      size={20}
                    />
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

                <div>
                  <div className="d-flex mt-3">
                    <b style={{ paddingRight: '10px' }}>
                      {item.userName}
                    </b>
                    <p>{item.info}</p>
                  </div>
                </div>

                <h3 className="text-center">留言板</h3>

                {
                  item.postContent.length === 0 ? (
                    <div className="mt-3 mb-3">目前沒有留言...</div>
                  ) : (
                    item.postContent.map((contentItem) => (
                      <div className="d-block" style={{ borderBottom: '1px solid #e5e5e5' }}>
                        <p className="card-text">
                          <b style={{ marginRight: '10px' }}>
                            {contentItem.name}
                          </b>
                          <div className="d-flex justify-content-between">
                            <div>
                              {contentItem.content}
                            </div>
                            <div
                              role="button"
                              onClick={() => handleDeleteComment(contentItem)}
                              tabIndex={0}
                              onKeyDown=""
                            >
                              <ImCross />
                            </div>
                          </div>
                        </p>
                      </div>
                    ))
                  )
                }
                <div>
                  <p>目前使用者: {currentUsers}</p>
                  <div className="d-flex">
                    <input
                      type="text"
                      style={{ width: '50%' }}
                      placeholder="請輸入..."
                      onChange={(e) => setCommentText(e.target.value)}
                      value={commentText}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={handleSubmit}
                      style={{ marginLeft: '10px' }}
                    >
                      送出
                    </button>
                  </div>
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
