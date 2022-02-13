import React from 'react';
// import PropTypes from 'prop-types';
/* 
  props
  match item needs to know: 
    first_name * starting with this only
    last_name
    user_image
    bio
*/

import './matchItem.css';

export default function MatchItem(props) {
  const { first_name } = props;

  return (
    <article className='match-item'>
      <div className='image-cropper'>
        {/* rectangle image test */}
        {/* <img src="https://m.media-amazon.com/images/M/MV5BMTc0NDQzODAwNF5BMl5BanBnXkFtZTYwMzUzNTk3._V1_UY1200_CR112,0,630,1200_AL_.jpg" className='small-pfp'/> */}

        {/* square image test */}
        <img src="https://www.pikpng.com/pngl/m/80-805068_my-profile-icon-blank-profile-picture-circle-clipart.png" alt="blue and white clipart profile picture" className='small-pfp'/>
      </div>

      <div className='user-details'>
        <p>User name</p>
        <p>{first_name}</p>
        {/* <p>User bio</p> */}
      </div>
    </article>
  );
};