import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function UploadFile() {
  // const dispatch = useDispatch()
  const [file, setFile] = useState({})
  const [event, setEvent] = useState({})

  const handleSubmit = (values) => {
    console.log({ ...values, file })
    // 把 values 跟 file 一起傳到後端
    // dispatch(postUploadFile({...values, file})
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

  const handleUploadFile = (e) => {
    const uploadFile = e.target.files
    if (uploadFile) {
      const binaryData = []
      binaryData.push(uploadFile[0])
      setFile(URL.createObjectURL(new Blob(binaryData)))
    }
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="card-deck d-block justify-content-center mt-3">
        <div className="card col-6 m-auto">
          <div className="card-body">

            {/* 圖片選取 */}
            <label htmlFor="fileName" className="text-center">
              <input
                type="file"
                onChange={(e) => {
                  handleUploadFile(e)
                  setEvent(e)
                }}
                id="fileName"
                nmae="fileName"
              />
            </label>

            <div style={{ width: 'auto', height: 'auto' }}>
              <img src={file} alt="" style={{ width: '100%' }} />
            </div>
            <div>
              {
                Object.keys(file).length === 0 && (
                  <div className="text-center text-success">
                    檔案資料為必填欄位
                  </div>
                )
              }

              {
                Object.keys(event).length !== 0 && (
                  Math.sqrt(
                    event?.currenttraget?.files[0],
                  ) % 1 !== 0
                    && <div className="text-center text-danger">請選擇寬度跟高度相同之照片</div>
                )
              }
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
            <div className="d-flex justify-content-center mt-3">
              <button type="submit" className="btn btn-primary">
                送出
              </button>
            </div>

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
