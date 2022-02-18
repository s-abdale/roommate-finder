import React, {useState, useEffect} from "react";
import axios from "axios";
import './matchItem.css';

export default function MatchItem(props) {
  const {id, first_name, last_name, user_image} = props;

  return (
    <article 
      className='match-item'
      onClick={props.onClick}
    >
      <div className='image-cropper'>
        {/* rectangle image test */}
        {/* <img src="https://m.media-amazon.com/images/M/MV5BMTc0NDQzODAwNF5BMl5BanBnXkFtZTYwMzUzNTk3._V1_UY1200_CR112,0,630,1200_AL_.jpg" className='small-pfp'/> */}

        {/* square image test */}
        <img src={user_image} className='small-pfp'/>
      </div>

      {/* <div> <img src={user_image} ></img></div> */}

      <div className='user-details'>
        <i>{first_name}</i>
        <i>{last_name}</i>

      </div>
    </article>
  );
};