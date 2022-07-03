import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiMessageRounded } from 'react-icons/bi';

import '../assets/css/postCard.scss';

function PostCard() {
  const photo = 'https://cc-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fi.cheers.com.tw%2Farticle%2F201910%2Farticle-5dad1db0ac7bc.jpg/?w=561&h=376&fit=fill';
  return (
    <div className="post-card-style">
      <div className="card-deck d-block justify-content-center mt-3">
        <div className="card col-5 m-auto">
          <div className="card-body">
            <div className="d-flex mb-3">
              <img className="card-img-top card-image" src={photo} alt="CardImage" />
              <div className="d-flex justify-content-center" style={{ marginLeft: '10px' }}>
                <div className="d-flex justify-content-center card-name">J4NBOYOP</div>
              </div>
            </div>
            <img className="card-img-top" src={photo} alt="CardImage" />
            <div className="d-flex">
              <div role="button" className="card-icon">
                <AiOutlineHeart size={30} />
              </div>
              <div role="button" className="card-icon">
                <BiMessageRounded size={30} />
              </div>
            </div>
            <div>
              <h5>100 個讚</h5>
            </div>

            <p className="card-text">
              <div>
                <b>
                  J4NBOYOP
                </b>
              </div>
              This is a wider card with supporting text below as a natural lead-in to
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
