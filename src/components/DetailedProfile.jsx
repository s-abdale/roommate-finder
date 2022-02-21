import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './detailedProfile.css';
import {useParams, useNavigate} from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';



export default function DetailedProfile() {
  const {id} = useParams();

  const [user, setUser] = useState({})

  useEffect(() => {
    axios.get(`/api/user/profile/${id}`, {
    })
    .then(response => {
      const profileData = response.data.profile[0]
      console.log(profileData)
      setUser(profileData)
    })
  }, [])


  return (
    <Card className='detailed-profile'>



      <CardMedia src={user.user_image} className='user-pfp' component="img"/>


      {/* add icons to user details */}

      <article className='user-details'>
        <span>{user.first_name} {user.last_name}</span>

        <p>{user.location}</p>
        <p>{user.bio}</p>

        <br/>
        
        <p>CONTACT INFO:</p>
        <p>{user.email}</p>
        <p>Tel.: {user.phone_number}</p>

      </article>
    </Card>
  );
};