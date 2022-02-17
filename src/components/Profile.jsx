import React, { useEffect, useState } from 'react';
import './profile.css';
import axios from 'axios';
import {BrowserRouter as Router, Link , Route, Routes, useNavigate} from 'react-router-dom';

// compare to detailed profile props
/* include:
  image -stretch
  name
  gender
  location -stretch
  bio
  phone
  contact
  preferences -stretch
*/

export default function Profile(props) {
  //const { first_name, last_name, gender, location, bio, email, phone_number, contact_info} = props;
  //const name = `${first_name} ${last_name}`;
  //console.log(`gender is: ${gender}`);

  //Forms - react npm 

  // NOTE: ADJUST THIS FORMULA FOR OTHER GENDER IDENTITY OR PASS IT IN FROM APP.JS - SEE SARANYA
  //const genderIs = gender ? 'male' : 'female';

  const [user, setUser] = useState({})


  // const [firstnameReg, setFirstnameReg] = useState('');
  // const [lastnameReg, setLastnameReg] = useState('');
  // const [usernameReg, setUsernameReg] = useState('');
  // const [emailReg, setEmailReg] = useState('');
  // const [passwordReg, setPasswordReg] = useState('');
  // const [phonenumberReg, setPhonenumberReg] = useState('');
  // const [genderReg, setGenderReg] = useState(null);
  // const [contactinfoReg, setContactinfoReg] = useState('');
  // const [userimageReg, setUserimageReg] = useState('');
  // const [bioReg, setBioReg] = useState('');
  // const [locationReg, setLocationReg] = useState('');

  // figure out how to pass user id

  // `/api/user/profile/${user.id}`
  useEffect(() => {
    axios.get(`/api/user/profile/`, {
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

//upload images to imgur and use url as source (copy image address to use for seed) 
  return (
    <section className='main-body'>
      <h3 className='page-header'>PROFILE INFORMATION</h3>


      {/* <div className='profile-image'>
        <img src="https://www.pikpng.com/pngl/m/80-805068_my-profile-icon-blank-profile-picture-circle-clipart.png" alt="blue and white clipart profile picture" className='user-pfp'/>
      </div> */}

      <div> <img src={user.user_image} className='user_image'></img></div>

      <div className='profile-text'>
        <div>Name: {user.first_name}, {user.last_name}</div>
        <div>Email: {user.email}</div>
        <div>Phone Number: {user.phone_number}</div>
        {/* <div>{genderReg}</div> */}
        <div>Contact Info: {user.contact_info}</div>
        {/* <div>img: {userimageReg}</div> */}
        <div>Bio: {user.bio}</div>
        <div>Location: {user.location}</div>

        {/* <div>{genderIs}</div> */}
        {/* <div>Preferences</div> */}      
      </div>

      <button
        className='big-buttons'
      >
        <Link to="/editProfile">Edit Profile</Link>
      </button>

    </section>
  );
};