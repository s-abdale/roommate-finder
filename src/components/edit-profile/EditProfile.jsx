import React, { useState } from 'react';
import '../profile.css';
import axios from "axios";



export default function editProfile({
  first_name, 
  last_name, 
  gender, 
  location, 
  bio, 
  email, 
  phone_number, 
  contact_info,
  setFirstnameReg,  
  setLastnameReg,
  setUsernameReg,
  setEmailReg,
  setPasswordReg,
  setPhonenumberReg,
  setGenderReg,
  setContactinfoReg,
  setUserimageReg,
  setBioReg,
  setLocationReg}) 
  {
  // const { first_name, last_name, gender, location, bio, email, phone_number, contact_info} = props;
  const name = `${first_name} ${last_name}`;
  // console.log(`gender is: ${gender}`);


  // NOTE: ADJUST THIS FORMULA FOR OTHER GENDER IDENTITY OR PASS IT IN FROM APP.JS - SEE SARANYA
  const genderIs = gender ? 'male' : 'female';
  // console.log(first_name);



  return (
    <section className='main-body'>
      <h3 className='page-header'>EDIT PROFILE</h3>


      {/* <div className='profile-image'>
        <img src="https://www.pikpng.com/pngl/m/80-805068_my-profile-icon-blank-profile-picture-circle-clipart.png" alt="blue and white clipart profile picture" className='user-pfp'/>
      </div> */}


      <div className='profile-text'>
        {/* <div>{name}</div>

        <div>{genderIs}</div>

        <div>{bio}</div>

        <div>{phone_number}</div>

        <div>{contact_info}</div> */}




  <form onSubmit={event => event.preventDefault()} autoComplete="off" className='profile-text'>
    <h1>{first_name}</h1>
    <label>First Name</label>
    <input type='text' value={first_name} name="firstnameReg" onChange={(e) => {setFirstnameReg(e.target.value)}}></input>
    <br></br>

    <label>Last Name</label>
    <input type='text' value={last_name} name="lastnameReg"onChange={(e) => {setLastnameReg(e.target.value)}} ></input>
    <br></br>

    <label>User Name</label>
    {/* <input type='text' placeholder='Username' name="usernameReg" onChange={(e) => {setUsernameReg(e.target.value)}} ></input> */}
    <br></br>

    <label>Email</label>
    <input type='email' value={email} name="emailReg" onChange={(e) => {setEmailReg(e.target.value)}}></input>
    <br></br>

    {/* <label>Password</label> */}
    {/* <input type='password' placeholder='Password...' name="passwordReg" onChange={(e) => {setPasswordReg(e.target.value)}} ></input> */}
    
    <label>Phone Number</label>
    <input type='text' value={phone_number} name="phonenumberReg" onChange={(e) => {setPhonenumberReg(e.target.value)}} ></input>
    <br></br>

    <label>Gender:
      <input type="text"  placeholder="Gender" list="browsers" name="genderReg" onChange={(e) => {setGenderReg(e.target.value)}}/>    
    </label>
      <datalist id="browsers">
        <option value="Male"/> 
        <option value="Female"/> 
        <option value="They/Them"/> 
        {/* <option value="Prefer not to say"/> */}
      </datalist>
      <br></br>

      <label>Gender</label>
      <input type='text' placeholder='Select Gender' onChange={(e) => {setGenderReg(e.target.value)}} ></input>
      <br></br>

      <label>Contact Info</label>
      <input type='text' value={contact_info} name="contactinfoReg" onChange={(e) => {setContactinfoReg(e.target.value)}}></input>
      <br></br>

      <label>Upload image</label>
      <input type='text' placeholder='Upload Image' name="userimageReg" onChange={(e) => {setUserimageReg(e.target.value)}}></input>
      <br></br>

      <label>Bio</label>
      <input type='text' value={bio}  name="bioReg" onChange={(e) => {setBioReg(e.target.value)}}></input>
      <br></br>
      <label>Location</label>
      <input type='text' value={location} name="locationReg" onChange={(e) => {setLocationReg(e.target.value)}}></input>
      <button type='submit' onClick={() => console.log('clicked')}> Update </button>
    </form>


      </div>
    </section>
  );
};


  // db.query(
  //     // "INSERT INTO users (first_name, last_name, user_name, phone_number, email, contact_info, user_image, bio, location, gender) WHERE [current user = user_id] VALUES [props]"

  //     "UPDATE users SET first_name=value, last_name, user_name, phone_number, email, contact_info, user_image, bio, location, gender WHERE user_id = [current user id]"
      
      
  //     ,
  //     (err, result) => {
  //       if (err) {
  //         res.send({err: err})
  //       }
  //       if (result.length > 0) {
  //         res.send(result);
  //       }
  //     }
  //   )