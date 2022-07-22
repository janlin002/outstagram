import React from 'react'
import githubQRcode from '../assets/image/githubqrcode.png'

function Footer() {
  return (
    <div
      className="footer-style text-center"
    >
      <div
        className="d-flex justify-content-center align-items-center"
      >
        版權所有、轉載必究

        <img
          className="footer-qrcode"
          src={githubQRcode}
          alt=""
        />
      </div>
    </div>
  )
}

export default Footer
