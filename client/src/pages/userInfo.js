import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TiTick } from 'react-icons/ti'

import userData from '../util/userInfoFakedata.json'
import CustomModal from '../components/customModal/basic'
import UserInfoPostItem from '../components/userInfoPostItem'

// import {
//   getUserInfo,
// } from '../redux/actions'

import {
  // loginStatus,
  userInfo,
  // userInfoLoading,
  currentUser,
  postItems,
} from '../redux/selectors'

function UserInfo() {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getUserInfo())
  // }, [])
  const userInfoData = useSelector(userInfo)
  const postItem = useSelector(postItems)
  const user = useSelector(currentUser)
  // const userInfoDataLoading = useSelector(userInfoLoading)

  const [modalOpen, setModalOpen] = useState(false)
  const [detailData, setDetailData] = useState({})

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handlePostDetail = ({ post }) => {
    setDetailData(post)
    setModalOpen(true)
  }

  return (
    userInfoData.map((item) => (
      item.name === user ? (
        <div className="card-deck d-block justify-content-center mt-3" key={item.name}>
          <div className="card col-9 m-auto">
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
                      <div
                        role="button"
                        className="col-4"
                        key={post._id}
                        onClick={() => handlePostDetail({ post })}
                        onKeyDown=""
                        tabIndex={0}
                        id={post._id}
                      >
                        <img
                          src={post.postImage[0]?.image}
                          className="post-card-style"
                          alt=""
                        />
                      </div>
                    )
                  }
                  return null
                })
              }
            </div>
            <CustomModal
              modalOpen={modalOpen}
              onRequestClose={handleModalClose}
            >
              <UserInfoPostItem
                detailData={detailData}
                userData={userData}
              />
            </CustomModal>
          </div>
        </div>
      ) : ''
    ))

  )
}

export default UserInfo

// 新增一個所有使用者的頁面 - 並且有刪除按鈕
