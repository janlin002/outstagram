import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  getUserInfo,
  updateUserInfo,
} from '../redux/actions'

import {
  userInfo,
} from '../redux/selectors'

import {
  SwalSubmitSuccess,
} from '../util/swal'

const settings = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [uploadType, setUploadType] = useState('')
  const [avatar, setAvatar] = useState({})
  const [info, setInfo] = useState('')
  const userInfoData = useSelector(userInfo)

  useEffect(() => {
    dispatch(getUserInfo())
  }, [])

  const handleUploadFile = (e) => {
    const uploadFile = e.target.files
    if (uploadFile) {
      const binaryData = []
      binaryData.push(uploadFile[0])
      setAvatar(URL.createObjectURL(new Blob(binaryData)))
    }
  }

  const handleUploadUrl = (value) => {
    setAvatar(value)
  }

  const handleUploadType = (value) => {
    setUploadType(value)
  }

  const handleUploadUI = () => {
    if (uploadType === 'use-file') {
      return (
        <input
          type="file"
          onChange={(e) => {
            handleUploadFile(e)
          }}
        />
      )
    } if (uploadType === 'use-url') {
      return (
        <input
          type="text"
          placeholder="請輸入連結..."
          onChange={(e) => handleUploadUrl(e.target.value)}
        />
      )
    }
    return null
  }

  const handleChangeMotto = (value) => {
    setInfo(value)
  }

  const handleSubmit = () => {
    const value = { avatar, info }
    dispatch(updateUserInfo(value))
    SwalSubmitSuccess()
    navigate('/home')
  }

  return (
    userInfoData.map((item) => (
      <div className="card-deck d-block justify-content-center mt-3" key={item.name}>
        <div className="card col-9 m-auto d-block">
          <div className="d-flex align-items-center text-center m-5">
            <div className="col-6">
              <h5>目前頭貼</h5>
              <img
                src={item.avatar}
                className="user-info-avatar"
                alt=""
              />
            </div>
            <div className="col-6">
              <h5>請上傳新頭貼</h5>
              <div>
                <div>
                  <input
                    type="radio"
                    id="use-file"
                    name="drone"
                    value="use-file"
                    onChange={(e) => handleUploadType(e.target.value)}
                  />
                  <label htmlFor="use-file">檔案上傳</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="use-url"
                    name="drone"
                    value="use-url"
                    onChange={(e) => handleUploadType(e.target.value)}
                  />
                  <label htmlFor="use-url">使用連結</label>
                </div>
              </div>
              {handleUploadUI()}
              {
                Object.keys(avatar).length !== 0 && (
                <div>
                  <img
                    src={avatar}
                    className="user-info-avatar"
                    alt=""
                  />
                </div>

                )
              }

            </div>
          </div>
          <div className="d-flex align-items-center text-center m-5">
            <div className="col-6">
              <h5>目前座右銘</h5>
              <p>{item.info}</p>
            </div>
            <div className="col-6">
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
    ))

  )
}

export default settings
