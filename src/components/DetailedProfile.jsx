import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './detailedProfile.css';
import {useParams} from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import {BrowserRouter as Router, Link , Route, Routes, useNavigate} from 'react-router-dom';

// icons
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';


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

  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return '(' + match[1] + ')-' + match[2] + '-' + match[3]
    }
    return null
  }

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
  const firstEmoji = formatBioGetEmoji(user.bio);
  
  function formatBioGetBio(bioString) {
    if (bioString !== undefined) {
      const regex = /^(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
      const remaining = bioString.replace(regex, '');
      return remaining
    } else {
      console.log(`couldn't find a string :(`)
    }
  }
  const restOfBio = formatBioGetBio(user.bio);

  return (
    <div className='detailed-profile-page'>

      <Card className='detailed-profile'>



        <CardMedia src={user.user_image} className='user-pfp' component="img"/>


        {/* add icons to user details */}

        <article className='user-details'>
          {/* <p>{user.first_name} {user.last_name}</p>

          <p><FmdGoodOutlinedIcon/> {user.location}</p>
          <p><PersonPinOutlinedIcon/> {user.bio}</p>

          <br/>
          
          <p><EmailOutlinedIcon/> {user.email}</p>
          <p><PhoneIphoneRoundedIcon/> {user.phone_number}</p> */}


          <table className='user-details-table'>
            <tr>
              <th colspan="2" className='user-details-table-fullName'>{user.first_name} {user.last_name}</th>
            </tr>

            <tr>
              <td><FmdGoodOutlinedIcon className='icons-detailedProfile' color="disabled"/></td>
              <td>{user.location}</td>
            </tr>

            <tr>
              <td><HomeOutlinedIcon className='icons-detailedProfile' color="disabled"/></td>
              <td>{firstEmoji}</td>
            </tr>

            <tr>
              <td><PersonPinOutlinedIcon className='icons-detailedProfile' color="disabled"/></td>
              <td>{restOfBio}</td>
            </tr>

            <tr>
              <td><EmailOutlinedIcon className='icons-detailedProfile' color="disabled"/></td>
              <td>{user.email}</td>
            </tr>

            <tr>
              <td><PhoneIphoneRoundedIcon className='icons-detailedProfile' color="disabled"/></td>
              <td>{formatPhoneNumber(user.phone_number)}</td>
            </tr>
          </table>
        </article>
      </Card>
          
      <Link to="/matchList">
        <button className='BackToMatchList'> Matches </button>
      </Link>

    </div>
  );
};