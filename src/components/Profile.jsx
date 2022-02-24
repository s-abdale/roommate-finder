import React, { useEffect, useState } from 'react';
import './profile.css';
// import './detailedProfile.css';


import axios from 'axios';
import {BrowserRouter as Router, Link , Route, Routes, useNavigate} from 'react-router-dom';

import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// icons
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default function Profile(props) {
  
  const [user, setUser] = useState({})


  useEffect(() => {
    axios.get(`/api/user/profile/${props.userID}`, {
      // first_name: firstnameReg,
      // last_name: lastnameReg,
      // email: emailReg,
      // password: passwordReg,
      // phone_number: phonenumberReg,
      // // gender: genderReg,
      // contact_info: contactinfoReg,
      // user_image: userimageReg,
      // bio: bioReg,
      // location: locationReg,
      // gender: genderReg
    })
    .then(response => {
      //Name, gender, password, should not be updated? 
      const profileData = response.data.profile[0]
      // console.log(profileData)
      setUser(profileData)
      // setFirstnameReg(profileData.first_name)
      // setLastnameReg(profileData.last_name)
      // // setUsernameReg(profileData.username) not in backend. 
      // setEmailReg(profileData.email)
      // setPasswordReg(profileData.password)
      // setPhonenumberReg(profileData.phone_number)
      // setContactinfoReg(profileData.contact_info)
      // // setGenderReg(profileData.gender)
      // setUserimageReg(profileData.user_image)
      // setBioReg(profileData.bio)
      // setLocationReg(profileData.location)
    })
  }, [])

  function formatPhoneNumber(phoneNumberString) {
    // console.log(phoneNumberString);
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    // console.log(cleaned);
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    // console.log(match);
    if (match) {
      return '(' + match[1] + ')-' + match[2] + '-' + match[3]
    }
    return null
  }

  
  // get first emoji (housing tag) from bio
  function formatBioGetEmoji(bioString) {    
    if (bioString !== undefined) {
      const regex = /^(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
      // console.log(bioString);
      const found = bioString.match(regex);
      // console.log(found[0]);
      return found[0]
    } else {
      console.log(`couldn't find an emoji :(`)
    }
  }
  const firstEmoji = formatBioGetEmoji(user.bio);
  
  // get bio minus emoji (tag)
  function formatBioGetBio(bioString) {
    if (bioString !== undefined) {
      const regex = /^(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
      const remaining = bioString.replace(regex, '');
      // console.log(remaining);
      return remaining
    } else {
      console.log(`couldn't find a string :(`)
    }
  }
  const restOfBio = formatBioGetBio(user.bio);





  return (
    <section className='main-body-profile'>

      <Card className='main-card-profile'>

        <CardMedia src={user.user_image} className='user-pfp' component="img"/>

        <table className='user-details'>
          <tr>
            <th colspan="2" className='user-details-name'>{user.first_name} {user.last_name}</th>
          </tr>

          <tr>
            <td><FmdGoodOutlinedIcon className='icons-detailedProfile' color="disabled"/></td>
            <td>{user.location}</td>
          </tr>

          <tr>
            <td><HomeOutlinedIcon className='icons-detailedProfile' color="disabled" /></td>
            <td>{firstEmoji}</td>
          </tr>

          <tr>
            <td><PersonPinOutlinedIcon className='icons-detailedProfile' color="disabled"/></td>
            <td>{restOfBio}</td>
          </tr>

          <tr>
            <td><EmailOutlinedIcon className='icons-detailedProfile' color="disabled"/></td>
            <td className='user-details-email'>{user.email}</td>
          </tr>

          <tr>
            <td><PhoneIphoneRoundedIcon className='icons-detailedProfile' color="disabled"/></td>
            <td>{formatPhoneNumber(user.phone_number)}</td>
          </tr>
        </table>
        {/* <article className='user-details'>

        
        </article> */}
        
      </Card>
    
      <div className='profile-page-button-container'>

        <Link to="/editProfile">
          <button className='profile-page-buttons'>
            Edit Profile
          </button>
        </Link>

        <Link to="/preferences">
          <button className='profile-page-buttons'> 
            Edit Preferences
          </button>
        </Link>

      </div>

    </section>
  );
};