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
    <section className='main-body-profile'>

      <Card className='main-card-profile'>

        <CardMedia src={user.user_image} className='user-pfp' component="img"/>

        <article className='user-details'>

          <table className='user-details-table'>
            <tr>
              {/* <td> </td> */}
              <th colspan="2" className='user-details-table-fullName'>{user.first_name} {user.last_name}</th>
            </tr>

            <tr>
              <td><FmdGoodOutlinedIcon className='icons-detailedProfile' color="disabled"/></td>
              <td>{user.location}</td>
            </tr>

            <tr>
              <td><PersonPinOutlinedIcon className='icons-detailedProfile' color="disabled"/></td>
              <td>{user.bio}</td>
            </tr>

            <tr>
              <td><EmailOutlinedIcon className='icons-detailedProfile' color="disabled"/></td>
              <td>{user.email}</td>
            </tr>

            <tr>
              <td><PhoneIphoneRoundedIcon className='icons-detailedProfile' color="disabled"/></td>
              <td>{user.phone_number}</td>
            </tr>
          </table>
        
        </article>
        
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