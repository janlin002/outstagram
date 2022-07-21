import React from 'react'
// import Skeleton from 'react-loading-skeleton'
import {
  ThreeDots,
} from 'react-loading-icons'

import 'react-loading-skeleton/dist/skeleton.css'

function LoadingPage() {
  return (
    <div>
      <div className="card-deck d-block justify-content-center mt-3">
        <div className="card col-lg-8 col-sm-12 m-auto">
          <div className="card-body">
            {/* <div className="d-flex mb-3">
              <Skeleton height={40} width={50} />
              <div className="d-flex justify-content-center" style={{ marginLeft: '10px' }}>
                <Skeleton height={40} width={490} />
              </div>
            </div>
            <Skeleton height={300} width={550} />
            <div>
              <h5>
                <Skeleton height={40} width={550} />
              </h5>
            </div> */}
            <div className="text-center">
              <ThreeDots fill="#91b3f9" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage
