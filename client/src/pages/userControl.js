import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  userInfo,
  deleteUserLoading,
} from '../redux/selectors'

import {
  SwalDeleteUserCheck,
} from '../util/swal'

import {
  getUserInfo,

  deleteUser,
  resetDeleteUser,
} from '../redux/actions'

function UserControl() {
  const dispatch = useDispatch()
  const userInfos = useSelector(userInfo)

  const deleteLoading = useSelector(deleteUserLoading)

  const handleDeleteUser = (userName) => {
    // dispatch(deleteUser(userName))
    SwalDeleteUserCheck(() => dispatch(deleteUser(userName)))
  }

  useEffect(() => {
    if (deleteLoading === false) {
      dispatch(getUserInfo())
      dispatch(resetDeleteUser())
    }
  }, [deleteLoading])
  return (
    <div className="card-deck d-block justify-content-center mt-3">
      <div className="col-lg-7 col-sm-10 m-auto d-block">
        <div>
          {
            userInfos.map((item) => (
              <div
                className="d-flex justify-content-between mb-3 align-items-center"
                style={{ border: '1px solid #c4c4c4', borderRadius: '10px' }}
              >
                <div className="m-3">
                  {item.name}
                </div>
                <div>
                  <button
                    className="btn btn-danger m-3"
                    type="button"
                    onClick={() => handleDeleteUser(item.name)}
                  >
                    刪除
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default UserControl

// 增加 新增使用者不得重複名字
