import React, { useEffect, useState } from 'react';
import './profile.css';
import axios from 'axios';
import {BrowserRouter as Router, Link , Route, Routes, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';





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
      console.log(profileData)
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


  return (
    <section className='main-body-Profile'>


      
      {/* <Card className='main-card'>
        <CardMedia src={user.user_image} className='user_image' component="img"/>

        <CardContent>
          <div>Name: {user.first_name}, {user.last_name}</div>
          <div>Email: {user.email}</div>
          <div>Phone Number: {user.phone_number}</div>
          <div>Contact Info: {user.contact_info}</div>
          <div>Bio: {user.bio}</div>
          <div>Location: {user.location}</div>
        </CardContent>

      </Card> */}

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