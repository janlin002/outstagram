import React from 'react'
import { useDispatch } from 'react-redux'

import { BiUser } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

import loginImage from '../assets/image/20944201.jpg'
import {
  changeLoginStatus,
  getPostItems,
} from '../redux/actions'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLoginClick = () => {
    dispatch(changeLoginStatus(true))
    dispatch(getPostItems())
    navigate('/home')
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
              onClick={() => handleLoginClick()}
            >
              <BiUser />
              USER-A
            </button>
            <button
              className="btn btn-outline-primary m-2"
              type="button"
              onClick={() => handleLoginClick()}
            >
              <BiUser />
              USER-B
            </button>
            <button
              className="btn btn-outline-primary m-2"
              type="button"
              onClick={() => handleLoginClick()}
            >
              <BiUser />
              USER-C
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
