import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import UploadImage from '../components/uploadImage'
import {
  postNewUser,
} from '../redux/actions'

import {
  SwalCreateUser,
} from '../util/swal'

function CreateUser() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  //   const [avatar, setAvatar] = useState({})
  const [info, setInfo] = useState('')
  const [popular, setPopular] = useState(true)
  const [avatar, setAvatar] = useState({})
  const [uploadType, setUploadType] = useState('')

  const handleCreateUser = () => {
    dispatch(postNewUser({
      name, avatar, info, popular,
    }))
    SwalCreateUser(() => navigate('/'))
  }

  return (
    <div className="card-deck mt-5">
      <div className="card col-6 m-auto d-flex">
        <div className="card-body d-block text-center custom-background-color">
          <div className="d-block m-3">
            請輸入使用者名稱
            <div>
              <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>
          </div>

          <div className="d-block m-3">
            請上傳大頭貼
            <div>
              <UploadImage
                file={avatar}
                setFile={setAvatar}
                uploadType={uploadType}
                setUploadType={setUploadType}
              />
            </div>
          </div>

          <div className="d-block m-3">
            請輸入使用者座右銘
            <div>
              <input type="text" onChange={(e) => setInfo(e.target.value)} />
            </div>
          </div>

          <div className="d-block m-3">
            是否為官方帳號
            <div className="d-flex justify-content-center">
              <div>
                <input
                  type="radio"
                  id="yes"
                  name="official-account"
                  value="no"
                  onClick={() => setPopular(true)}
                />
                <label htmlFor="yes">是</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="no"
                  name="official-account"
                  value="no"
                  onClick={() => setPopular(false)}
                />
                <label htmlFor="no">否</label>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-outline-primary m-3"
            onClick={() => handleCreateUser()}
          >
            新增使用者
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateUser

// 名稱 頭貼 座右銘 是否為官方帳號
// 圖片上傳功能 感覺可以做成 共用文件
