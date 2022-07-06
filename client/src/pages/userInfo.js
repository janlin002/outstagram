import React from 'react'
import { TiTick } from 'react-icons/ti'

import userData from '../util/userInfoFakedata.json'

function UserInfo() {
  return (
    userData.map((item) => (
      <div className="card-deck d-block justify-content-center mt-3">
        <div className="card col-9 m-auto">
          <div className="d-flex align-items-center m-3">
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
                  <div className="col-lg-4">
                    <img
                      src={postItem.image}
                      className="post-card-style"
                      alt=""
                    />
                  </div>
                ))
            }
          </div>
        </div>
      </div>
    ))

  )
}

export default UserInfo
