import React from 'react';

import './detailedProfile.css';

export default function DetailedProfile(props) {
  // works - METHOD 1
  // const { first_name, last_name, location, bio, email, phone_number} = props;
  // console.log(props);


  // works - METHOD 2
  const {users} = props;
  // console.log(users.id)

  return (
    <section className='detailed-profile'>

      {/* rectangle image*/}
      {/* <img src="https://m.media-amazon.com/images/M/MV5BMTc0NDQzODAwNF5BMl5BanBnXkFtZTYwMzUzNTk3._V1_UY1200_CR112,0,630,1200_AL_.jpg" className='user-pfp'/> */}

      {/* square image*/}
      <img src="https://www.pikpng.com/pngl/m/80-805068_my-profile-icon-blank-profile-picture-circle-clipart.png" alt="blue and white clipart profile picture" className='user-pfp'/>




      <article className='user-details'>
        {/* works - METHOD 1 */}
        {/* <span>{first_name} {last_name}</span>

        <p>{location}</p>
        <p>{bio}</p>

        <br/>
        
        <p>CONTACT INFO:</p>
        <p>{email}</p>
        <p>Tel.: {phone_number}</p> */}

        {/* works - METHOD 2 */}
        <span>{users.first_name} {users.last_name}</span>

        <p>{users.location}</p>
        <p>{users.bio}</p>

        <br/>
        
        <p>CONTACT INFO:</p>
        <p>{users.email}</p>
        <p>Tel.: {users.phone_number}</p>
      </article>
    </section>
  );
};