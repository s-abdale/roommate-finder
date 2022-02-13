import React from 'react';

/* 
  props
  basic profile needs to know: 
    > first_name
    > last_name
    user_image ?
    > bio
    preferences
*/

import './basicProfile.css';

export default function basicProfile(props) {
  const { first_name, last_name, bio } = props;

  return (
    <article className='basic-profile'>
      {/* <div className='user-image'>
      </div> */}
        {/* rectangle image*/}
        {/* <img src="https://m.media-amazon.com/images/M/MV5BMTc0NDQzODAwNF5BMl5BanBnXkFtZTYwMzUzNTk3._V1_UY1200_CR112,0,630,1200_AL_.jpg" className='user-pfp'/> */}

        {/* square image*/}
        <img src="https://www.pikpng.com/pngl/m/80-805068_my-profile-icon-blank-profile-picture-circle-clipart.png" alt="blue and white clipart profile picture" className='user-pfp'/>

      <div className='user-details'>
        <p>First name {first_name}</p>
        <p>Last name {last_name}</p>
        <p>Bio ... {bio}</p>
      </div>
    </article>
  );
};