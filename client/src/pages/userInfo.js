import React, { useState } from 'react'
import { TiTick } from 'react-icons/ti'

import userData from '../util/userInfoFakedata.json'
import CustomModal from '../components/customModal/basic'
import UserInfoPostItem from '../components/userInfoPostItem'

function UserInfo() {
  const [modalOpen, setModalOpen] = useState(false)
  const [detailData, setDetailData] = useState({})

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handlePostDetail = ({ postItem }) => {
    setDetailData(postItem)
    setModalOpen(true)
  }

  return (
    userData.map((item) => (
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
                item.post.map((postItem) => (
                  <div
                    role="button"
                    className="col-4"
                    key={postItem.image}
                    onClick={() => handlePostDetail({ postItem })}
                    onKeyDown={() => handlePostDetail({ postItem })}
                    tabIndex={0}
                    id={postItem.id}
                  >
                    <img
                      src={postItem.image[0].image}
                      className="post-card-style"
                      alt=""
                    />
                  </div>
                ))
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
    ))

  )
}

export default UserInfo

// image改成按紐，點擊觸發Modal打開，並且把相對應的資料傳到component中
