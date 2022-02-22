import React, { useState, useEffect } from 'react';
import axios from "axios";
import {BrowserRouter as Router, Link , Route, Routes, useNavigate} from 'react-router-dom';
import '../profile.css';
import './editProfile.css'


import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';


// import {useNavigate} from 'react-router-dom';




export default function EditProfile(props){

  // const navigate = useNavigate();
  // console.log(navigate);

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate('/about');
  //     // navigate(-1); // go back
  //   }, 3000);
  // }, [navigate]);


  const [firstnameEdit, setFirstnameEdit] = useState('');
  const [lastnameEdit, setLastnameEdit] = useState('');
  // const [usernameEdit, setUsernameEdit] = useState('');
  const [emailEdit, setEmailEdit] = useState('');
  // const [passwordEdit, setPasswordEdit] = useState('');
  const [phonenumberEdit, setPhonenumberEdit] = useState('');
  const [genderEdit, setGenderEdit] = useState(null);
  const [contactinfoEdit, setContactinfoEdit] = useState('');
  const [userimageEdit, setUserimageEdit] = useState('');
  const [bioEdit, setBioEdit] = useState('');
  const [locationEdit, setLocationEdit] = useState('');


  const edit = () => {
    // process gender
    let isMale = null
    if (genderEdit === false) {
      isMale = false
    } else if (genderEdit === true) {
      isMale = true
    }


    // post new results to db
    axios.post("/api/user/profile", {
      first_name: firstnameEdit,
      last_name: lastnameEdit,
      // userName: usernameEdit,
      email: emailEdit,
      phone_number: phonenumberEdit,
      gender: isMale,
      contact_info: contactinfoEdit,
      bio: bioEdit,
      user_image: userimageEdit,
      location: locationEdit,
    }).then((response) => {
      console.log(response.data)
      //redirect to new page.

      // response.redirect("/profile")
    })
  }

  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`/api/user/profile/${props.userID}`, {
    })
    .then(response => {
      const profileData = response.data.profile[0];
      console.log(profileData);
      setFirstnameEdit(profileData.first_name);
      setLastnameEdit(profileData.last_name);
      setEmailEdit(profileData.email);
      setPhonenumberEdit(profileData.phone_number);
      setGenderEdit(profileData.gender);
      setContactinfoEdit(profileData.contact_info);
      setBioEdit(profileData.bio);

      setUserimageEdit(profileData.user_image);
      setLocationEdit(profileData.location);
    })
  }, [])


  let translatedGenderEdit;
  if (genderEdit == false) {
    translatedGenderEdit = "Female"
  } else if (genderEdit == true) {
    translatedGenderEdit = "Male"
  } else if (translatedGenderEdit == null) {
    translatedGenderEdit = "They/Them"
  }

//gif
//https://pa1.narvii.com/7609/9cc5a08bae8a916f6e5791a1b1fe70cd3c1c5c0er1-288-480_hq.gif

//https://mfiles.alphacoders.com/796/796853.jpg
//https://www.androidauthority.com/wp-content/uploads/2021/10/Google-Pixel-3-Wallpaper-19.jpg
//https://www.fonewalls.com/wp-content/uploads/2020/09/Vector-Train-Wallpaper-058.jpg
//https://d1nxzqpcg2bym0.cloudfront.net/google_play/com.PixelArtCityWallpaper.supapowa/ef67cc1a-29e0-11e8-b73c-2b5845c03c7b/640
//https://wallpapers.com/images/high/pixel-city-in-pink-aesthetic-rh4lxylscgkqas3c.jpg
  return (
    <section className='main-body-EditProfile' style={{ backgroundImage: `url("https://pa1.narvii.com/7609/9cc5a08bae8a916f6e5791a1b1fe70cd3c1c5c0er1-288-480_hq.gif")`}}>

      <form onSubmit={event => event.preventDefault()} autoComplete="off" className='profile-text'>

        <TextField
        className='firstName'
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          margin="normal"
          type='text' value={firstnameEdit}
          name="firstnameEdit"
          onChange={(e) => {setFirstnameEdit(e.target.value)}}
        />
        <br/>

        <TextField
        className='lastName'
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          margin="normal"
          type='text'  
          value={lastnameEdit} 
          name="lastnameEdit"
          onChange={(e) => {setLastnameEdit(e.target.value)}} 
        />
        <br/>


        <TextField
        className='emailEdit'
          id="outlined-basic"
          label="Email"
          variant="outlined"
          margin="normal"
          type='email' 
          value={emailEdit} 
          name="emailEdit" 
          onChange={(e) => {setEmailEdit(e.target.value)}}
        />
        <br/>

        
        <TextField
          className='phoneEdit'
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          margin="normal"
          type='text' 
          value={phonenumberEdit}  
          name="phonenumberEdit" 
          onChange={(e) => {setPhonenumberEdit(e.target.value)}} 
        />
        <br/>


        <FormControl fullWidth>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>

          <RadioGroup
            label="Gender"
            aria-labelledby="demo-radio-buttons-group-label"
            value={translatedGenderEdit}
            name="genderEdit"
            onChange={(e) => {setGenderEdit(e.target.value)}}
          >
            <FormControlLabel value={"Male"} control={<Radio />} label="Male"/>
            <FormControlLabel value={"Female"} control={<Radio />} label="Female"/>
            <FormControlLabel value={"They/Them"} control={<Radio />} label="They/Them"/>
          </RadioGroup>
        </FormControl>


        <TextField
        className='contactEdit'
          id="outlined-basic"
          label="Contact Info"
          variant="outlined"
          margin="normal"
          type='text' 
          value={contactinfoEdit} 
          name="contactinfoEdit" 
          onChange={(e) => {setContactinfoEdit(e.target.value)}}
        />
        <br/>


        <TextField
        className='bioEdit'
          id="outlined-basic"
          label="Bio"
          variant="outlined"
          margin="normal"
          multiline="true"
          type='text' 
          value={bioEdit}  
          name="bioEdit" 
          onChange={(e) => {setBioEdit(e.target.value)}}
        />
        <br/>


        <TextField
        className='locationEdit'
          id="outlined-basic"
          label="Location"
          variant="outlined"
          margin="normal"
          value={locationEdit}  
          name="locationEdit" 
          onChange={(e) => {setLocationEdit(e.target.value)}}
        />
        <br/>


        <TextField
        className='imageEdit'
          id="outlined-basic"
          label="Profile Picture"
          variant="outlined"
          margin="normal"
          value={`${userimageEdit}`}  
          name="userimageEdit" 
          onChange={(e) => {setUserimageEdit(e.target.value)}}
        />
        <br/>


        <Link to="/profile">
          <button type='submit' onClick={edit}> Update </button>
        </Link>

      </form>   
    </section>
  );
};
