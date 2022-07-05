import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../assets/css/styles.css'

function PostImage({ imageData }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const len = imageData.length

  if (len === 1) {
    return (
      <img className="card-img-top" src={imageData[0].image} alt="CardImage" />
    )
  }
  return (
    <Slider {...settings}>
      {
        imageData.map((item) => (
          <div>
            <img style={{ width: '100%', height: '100%' }} src={item.image} alt="" />
          </div>
        ))
    }
    </Slider>
  )
}

export default PostImage

PostImage.propTypes = {
  imageData: PropTypes.instanceOf(Object).isRequired,
}
