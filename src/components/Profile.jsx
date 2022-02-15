import React, { useState } from 'react';
import './profile.css';

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
  const { first_name, last_name, gender, location, bio, email, phone_number, contact_info} = props;
  const name = `${first_name} ${last_name}`;
  console.log(`gender is: ${gender}`);

  // NOTE: ADJUST THIS FORMULA FOR OTHER GENDER IDENTITY OR PASS IT IN FROM APP.JS - SEE SARANYA
  const genderIs = gender ? 'male' : 'female';


  return (
    <section className='main-body'>
      <h3 className='page-header'>PROFILE INFORMATION</h3>


      <div className='profile-image'>
        <img src="https://www.pikpng.com/pngl/m/80-805068_my-profile-icon-blank-profile-picture-circle-clipart.png" alt="blue and white clipart profile picture" className='user-pfp'/>
      </div>


      <div className='profile-text'>
        <div>{name}</div>

        <div>{genderIs}</div>

        {/* <div>{location}</div> */}

        <div>{bio}</div>

        <div>{phone_number}</div>

        <div>{contact_info}</div>

        {/* <div>Preferences</div> */}      
      </div>
    </section>
  );
};