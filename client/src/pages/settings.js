import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  getUserInfo,
  updateUserInfo,
} from '../redux/actions'

import {
  userInfo,
  currentUser,
} from '../redux/selectors'

import {
  SwalSubmitSuccess,
} from '../util/swal'

import UploadImage from '../components/uploadImage'

const settings = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [uploadType, setUploadType] = useState('')
  const [avatar, setAvatar] = useState({})
  const [info, setInfo] = useState('')
  const userInfoData = useSelector(userInfo)
  const currentUsers = useSelector(currentUser)

  useEffect(() => {
    dispatch(getUserInfo())
  }, [])

  const handleChangeMotto = (value) => {
    setInfo(value)
  }

  const handleSubmit = () => {
    const value = { avatar, info, currentUsers }
    dispatch(updateUserInfo(value))
    SwalSubmitSuccess()
    navigate('/home')
  }

  return (
    userInfoData.map((item) => (
      item.name === currentUsers && (
        <div className="card-deck d-block justify-content-center mt-3" key={item.name}>
          <div className="card col-lg-8 col-sm-10 m-auto d-block">
            <div className="card-body post-background-color">
              <div className="d-flex align-items-center text-center m-5">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <h5>目前頭貼</h5>
                  <img
                    src={item.avatar}
                    className="user-info-avatar"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <h5>請上傳新頭貼</h5>

                  <UploadImage
                    file={avatar}
                    setFile={setAvatar}
                    uploadType={uploadType}
                    setUploadType={setUploadType}
                  />

                </div>
              </div>
              <div className="d-flex align-items-center text-center m-5">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <h5>目前座右銘</h5>
                  <p>{item.info}</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <h5>請輸入新座右銘</h5>
                  <input
                    type="text"
                    onChange={(e) => handleChangeMotto(e.target.value)}
                  />
                </div>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-outline-danger m-5"
                  onClick={() => navigate('/home')}
                >
                  返回主畫面
                </button>
                <button
                  className="btn btn-outline-primary m-5"
                  type="button"
                  onClick={handleSubmit}
                >送出
                </button>
              </div>
            </div>
          </div>
        </div>
      )

    ))

  )
}

export default settings
