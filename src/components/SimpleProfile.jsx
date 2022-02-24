import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './detailedProfile.css';
import './simpleProfile.css';
import {useParams, useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';




export default function SimpleProfile(props) {

  function formatBioGetEmoji(bioString) {    
    if (bioString !== undefined) {
      const regex = /^(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
      const found = bioString.match(regex);
      // console.log(found[0]);
      return found[0]
    } else {
      console.log(`couldn't find an emoji :(`)
    }
  }
  const firstEmoji = formatBioGetEmoji(props.bio);
  
  function formatBioGetBio(bioString) {
    if (bioString !== undefined) {
      const regex = /^(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
      const remaining = bioString.replace(regex, '');
      return remaining
    } else {
      console.log(`couldn't find a string :(`)
    }
  }
  const restOfBio = formatBioGetBio(props.bio);



  return (
    <div className='card-wrapper-simple-profile'>

      <Card className='simple-profile'>

        <article className='user-details'>

          <p>{props.user_name}</p>
          <p>{firstEmoji}</p>
          <p>{restOfBio}</p>
          {/* <p>{props.image}</p> */}
          
        </article>
      </Card>
    </div>
  );
};