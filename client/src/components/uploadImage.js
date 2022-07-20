import React from 'react'
import PropTypes from 'prop-types'

function UploadImage({
  uploadType,
  setUploadType,
  file,
  setFile,
}) {
  const handleUploadFile = (e) => {
    const uploadFile = e.target.files
    if (uploadFile) {
      const binaryData = []
      binaryData.push(uploadFile[0])
      setFile(URL.createObjectURL(new Blob(binaryData)))
    }
  }

  const handleUploadType = (value) => {
    setUploadType(value)
  }

  const handleUploadArea = () => {
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
          onChange={(e) => setFile(e.target.value)}
        />
      )
    }
    return null
  }

  return (
    <>
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
      {handleUploadArea()}

      <div>
        {
          (Object.keys(file).length !== 0 || file !== '') && (
            <img src={file} alt="" style={{ width: '100%' }} />
          )
        }

      </div>
    </>

  )
}

export default UploadImage

UploadImage.propTypes = {
  uploadType: PropTypes.string.isRequired,
  setUploadType: PropTypes.func.isRequired,
  file: PropTypes.instanceOf(Object).isRequired,
  setFile: PropTypes.func.isRequired,
}

// setFile 透過 props 傳遞
// 加入radio，去選則要用網址，還是本地檔案
