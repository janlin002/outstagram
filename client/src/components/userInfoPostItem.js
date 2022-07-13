import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BiMessageRounded } from 'react-icons/bi'

import PostCard from './postCard'
import PostImage from './postImage'

function UserInfoPostItem({ detailData, userData }) {
  const [hitHeart, setHitHeart] = useState(false)

  const navigate = useNavigate()

  const handleHeartIcon = () => {
    setHitHeart(!hitHeart)
  }
  return (
    <div className="post-card-style">
      <div className="card-deck d-block justify-content-center mt-3">
        <div className="card col-6 m-auto">
          <div className="card-body">
            <div className="d-flex mb-3">
              <img className="card-img-top card-image" src={userData[0].avatar} alt="CardImage" />
              <div className="d-flex justify-content-center" style={{ marginLeft: '10px' }}>
                <div>
                  {userData[0].name}
                </div>
              </div>
            </div>
            <PostImage imageData={detailData.image} />
            {/* <img className="card-img-top" src={item.postImage} alt="CardImage" /> */}
            <div className="d-flex">
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
                {(detailData.like.replace(/\B(?=(\d{3})+(?!\d))/g, ','))}個讚
              </h5>
            </div>

            <p className="card-text">
              <div>
                <b>
                  {detailData.userName}
                </b>
              </div>
              {detailData.postContent}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfoPostItem

UserInfoPostItem.propTypes = {
  detailData: PropTypes.instanceOf(Object).isRequired,
  userData: PropTypes.instanceOf(Object).isRequired,
}

// 顧客資訊要去抓一開始近來打得資量
