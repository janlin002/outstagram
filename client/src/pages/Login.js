import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BiUser } from 'react-icons/bi'
import { useNavigate, useLocation } from 'react-router-dom'

import loginImage from '../assets/image/20944201.jpg'
import {
  getUserInfo,
  changeLoginStatus,
  getPostItems,
  getCurrentUser,
} from '../redux/actions'

import {
  currentUser,
  loginStatus,
  postItems,
  userInfo,
} from '../redux/selectors'

import {
  SwalUnKnowUser,
} from '../util/swal'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const [cusUser, seCustUser] = useState('')

  const currentUsers = useSelector(currentUser)
  const userLoginStatus = useSelector(loginStatus)
  const postItem = useSelector(postItems)
  const userInfoData = useSelector(userInfo)

  useEffect(() => {
    dispatch(getUserInfo())
  }, [])

  useEffect(() => {
    if (currentUsers !== '' && userLoginStatus === true) {
      navigate('/home')
    }
  }, [currentUsers, userLoginStatus])

  const handleLoginClick = (user) => {
    dispatch(changeLoginStatus(true))
    dispatch(getCurrentUser(user))
    dispatch(getPostItems(user))
  }

  const handleCreateUser = () => {
    navigate('/create-user')
    dispatch(changeLoginStatus(true))
  }

  const handleCusUserLogin = (value) => {
    seCustUser(value)
  }

  const handleUserCheck = () => {
    const userCheck = userInfoData.find((item) => item.name === cusUser)

    if (userCheck !== undefined) {
      dispatch(getCurrentUser(cusUser))
      dispatch(changeLoginStatus(true))
      dispatch(getPostItems(cusUser))
    }
    if (userCheck === undefined) {
      SwalUnKnowUser(() => seCustUser(''))
    }
  }
  return (
    <div className="card-deck mt-5">
      <div className="card col-6 m-auto">
        <div className="card-body text-center">
          <img
            src={loginImage}
            alt=""
            style={{ width: '60%' }}
          />
          <div>請選擇一個使用者</div>
          <div>
            <button
              className="btn btn-outline-primary m-2"
              type="button"
              onClick={() => handleLoginClick('user1')}
            >
              <BiUser />
              USER-1
            </button>
            <button
              className="btn btn-outline-primary m-2"
              type="button"
              onClick={() => handleLoginClick('user2')}
            >
              <BiUser />
              USER-2
            </button>
            <button
              className="btn btn-outline-primary m-2"
              type="button"
              onClick={() => handleLoginClick('user3')}
            >
              <BiUser />
              USER-3
            </button>
            <button
              className="btn btn-outline-primary m-2"
              type="button"
              onClick={() => handleCreateUser()}
            >
              新增使用者
            </button>
            <div>
              <input
                type="text"
                onChange={(e) => handleCusUserLogin(e.target.value)}
                value={cusUser}
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUserCheck}
              >
                確定進入
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

// 使用名稱登入，或是新增使用者
// 新增非使用者，擋掉邏輯
