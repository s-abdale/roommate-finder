import React from 'react';
// import MatchList from './MatchList';
import './matchItem.css';

export default function MatchItem(props) {
  const {id, first_name, last_name} = props;
  // console.log(props);

  return (
    <article className='match-item'>
      <div className='image-cropper'>
        {/* rectangle image test */}
        {/* <img src="https://m.media-amazon.com/images/M/MV5BMTc0NDQzODAwNF5BMl5BanBnXkFtZTYwMzUzNTk3._V1_UY1200_CR112,0,630,1200_AL_.jpg" className='small-pfp'/> */}

        {/* square image test */}
        <img src="https://www.pikpng.com/pngl/m/80-805068_my-profile-icon-blank-profile-picture-circle-clipart.png" alt="blue and white clipart profile picture" className='small-pfp'/>
      </div>

      <div className='user-details'>
        <i>{first_name}</i>
        <i>{last_name}</i>

      </div>
    </article>
  );
};