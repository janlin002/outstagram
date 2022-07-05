import React, { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BiMessageRounded } from 'react-icons/bi'

import '../assets/css/postCard.scss'
import postData from '../util/postCardFakedata.json'

function PostCard() {
  const [hitHeart, setHitHeart] = useState(false)

  const handleHeartIcon = () => {
    setHitHeart(!hitHeart)
  }

  return (
    postData.length === 0 ? 'no Data' : (
      postData.map((item) => (
        <div className="post-card-style">
          <div className="card-deck d-block justify-content-center mt-3">
            <div className="card col-5 m-auto">
              <div className="card-body">
                <div className="d-flex mb-3">
                  <img className="card-img-top card-image" src={item.avatar} alt="CardImage" />
                  <div className="d-flex justify-content-center" style={{ marginLeft: '10px' }}>
                    <div className="d-flex justify-content-center card-name">{item.userName}</div>
                  </div>
                </div>
                <img className="card-img-top" src={item.postImage} alt="CardImage" />
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
                    {(item.like.replace(/\B(?=(\d{3})+(?!\d))/g, ','))}個讚
                  </h5>
                </div>

                <p className="card-text">
                  <div>
                    <b>
                      {item.userName}
                    </b>
                  </div>
                  {item.postContent}
                </p>
              </div>
            </div>
          </div>
        </div>

      ))
    )
  )
}

export default PostCard

// TODO 按讚需要做分辨，不然全部都會勾起來
// DONE like數加千分號
