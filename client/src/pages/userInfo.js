import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { TiTick } from 'react-icons/ti'
import { BsTrashFill } from 'react-icons/bs'

import { SwalDeletePost } from '../util/swal'

// import userData from '../util/userInfoFakedata.json'
// import CustomModal from '../components/customModal/basic'
// import UserInfoPostItem from '../components/userInfoPostItem'

import {
  getUserInfo,

  getPostItems,

  deletePostItem,
  resetDeletePostItem,
} from '../redux/actions'

import {
  // loginStatus,
  userInfo,
  // userInfoLoading,
  currentUser,
  postItems,
  deletePostLoading,
} from '../redux/selectors'

function UserInfo() {
  const dispatch = useDispatch()

  const userInfoData = useSelector(userInfo)
  const postItem = useSelector(postItems)
  const user = useSelector(currentUser)
  const deletePostLoaing = useSelector(deletePostLoading)

  useEffect(() => {
    dispatch(getUserInfo())
  }, [])

  useEffect(() => {
    if (deletePostLoaing === false) {
      dispatch(getUserInfo())
      dispatch(getPostItems(user))
      dispatch(resetDeletePostItem())
    }
  }, [deletePostLoaing])

  // const userInfoDataLoading = useSelector(userInfoLoading)

  // const [modalOpen, setModalOpen] = useState(false)
  // const [detailData, setDetailData] = useState({})

  // const handleModalClose = () => {
  //   setModalOpen(false)
  // }

  // const handlePostDetail = ({ post }) => {
  //   setDetailData(post)
  //   setModalOpen(true)
  // }

  const handleDeletePostItem = ({ post }) => {
    SwalDeletePost(() => dispatch(deletePostItem(post._id)))
  }

  return (
    userInfoData.map((item) => (
      item.name === user ? (
        <div className="card-deck d-block justify-content-center mt-3" key={item.name}>
          <div className="card col-lg-8 col-sm-10 m-auto">
            <div className="card-body post-background-color">
              <div className="d-flex align-items-center m-5">
                <div className="col-6 text-center">
                  <img
                    src={item.avatar}
                    className="user-info-avatar"
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <h3>
                    {item.name}
                    {
                      item.popular === true && <TiTick style={{ color: '#3897f0' }} />
                  }
                  </h3>
                  <p>{item.info}</p>
                </div>
              </div>
              <div className="row">
                {
                postItem.map((post) => {
                  if (post.userName === item.name) {
                    return (
                      <div className="col-lg-4 col-md- col-sm-12 post-container">
                        <div
                          role="button"
                          className="image-container"
                          key={post._id}
                          onClick={() => handleDeletePostItem({ post })}
                          onKeyDown=""
                          tabIndex={0}
                          id={post._id}
                        >
                          <img
                            src={post.postImage[0]?.image}
                            className="post-card-style image"
                            alt=""
                          />
                          <div className="middle">
                            <div className="text">
                              <BsTrashFill
                                size={50}
                                color="black"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                    )
                  }
                  return null
                })
              }
              </div>
              {/* <CustomModal
                modalOpen={modalOpen}
                onRequestClose={handleModalClose}
              >
                <UserInfoPostItem
                  detailData={detailData}
                  userData={userData}
                />
              </CustomModal> */}
            </div>
          </div>
        </div>
      ) : ''
    ))

  )
}

export default UserInfo
