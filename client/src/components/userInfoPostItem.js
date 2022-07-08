import React from 'react'
import PropTypes from 'prop-types'

function UserInfoPostItem({ detailData }) {
  console.log(detailData, 'detailDat')
  return (
    <div className="row">
      <div className="col-lg-6">
        <img className="post-card-style" src={detailData.image} alt="" />
      </div>
      <div className="col-lg-6">
        456
      </div>
    </div>
  )
}

export default UserInfoPostItem

UserInfoPostItem.propTypes = {
  detailData: PropTypes.instanceOf(Object).isRequired,
}
