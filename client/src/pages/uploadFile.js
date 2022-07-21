import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

import {
  userInfo,
  currentUser,
} from '../redux/selectors'

import {
  postUploadFile,
} from '../redux/actions'
import UploadImage from '../components/uploadImage'

function UploadFile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [file, setFile] = useState({})
  // const [event, setEvent] = useState({})
  const [uploadType, setUploadType] = useState('')
  const user = useSelector(userInfo)
  const currentUsers = useSelector(currentUser)

  // 切換上傳方式，把 File 清空
  useEffect(() => {
    setFile({})
  }, [uploadType])

  // 新增貼文
  const handleSubmit = (values) => {
    const currentUserInfo = user.find((item) => item.name === currentUsers)

    dispatch(postUploadFile({
      ...values,
      file,
      name: currentUsers,
      avatar: currentUserInfo.avatar,
    }))
    navigate('/home')
  }

  const formik = useFormik({
    initialValues: {
      content: '',
    },
    validationSchema: Yup.object({
      content: Yup.string(),
    }),
    onSubmit: handleSubmit,
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="card-deck d-block justify-content-center mt-3">
        <div className="card col-lg-8 col-sm-10 m-auto">
          <div className="card-body post-background-color">

            {/* 圖片選取 */}
            <UploadImage
              file={file}
              setFile={setFile}
              uploadType={uploadType}
              setUploadType={setUploadType}
            />
            <div>
              {
                Object.keys(file).length === 0 && (
                  <div className="text-center text-success">
                    檔案資料為必填欄位
                  </div>
                )
              }

              {/* {
                Object.keys(event).length !== 0 && (
                  Math.sqrt(
                    event?.currenttraget?.files[0],
                  ) % 1 !== 0
                    && <div className="text-center text-danger">請選擇寬度跟高度相同之照片</div>
                )
              } */}
            </div>

            {/* 圖片說明 */}
            <div>
              <label htmlFor="content">
                新增圖片說明
                <input
                  type="content"
                  id="content"
                  name="content"
                  className="input-text"
                  placeholder="加上解說..."
                  onChange={formik.handleChange}
                  value={formik.values.content}
                />
              </label>
            </div>

            {/* 送出按鈕 */}
            {
              (Object.keys(file).length !== 0 && file !== '') && (
                <div className="d-flex justify-content-center mt-3">
                  <button type="submit" className="btn btn-primary" disabled={!file}>
                    送出
                  </button>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </form>

  )
}

export default UploadFile

// 講FIle傳到後端
// 限制寬高
// formik無效
