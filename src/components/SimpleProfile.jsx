import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './detailedProfile.css';
import './simpleProfile.css';
import {useParams, useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';




export default function SimpleProfile(props) {



  return (
    <div className='card-wrapper-simple-profile'>

      <Card className='simple-profile'>

        <article className='user-details'>

          <p>{props.user_name}</p>
          <p>{props.bio}</p>
          {/* <p>{props.image}</p> */}
          
        </article>
      </Card>
    </div>
  );
};