import React from 'react'

function PostCardNoData() {
  const noDataPhoto = 'https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=2000'
  return (
    <div className="card-deck d-block justify-content-center mt-3">
      <div className="card col-5 m-auto">
        <div className="card-body text-center">
          <img src={noDataPhoto} alt="no-data" className="noDataPhoto" />
        </div>
      </div>
    </div>
  )
}

export default PostCardNoData
