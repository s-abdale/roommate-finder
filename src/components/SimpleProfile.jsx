import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './detailedProfile.css';
import {useParams, useNavigate} from 'react-router-dom';



export default function SimpleProfile(props) {



  return (
    <section className='detailed-profile'>



      {/* square image*/}




      <article className='user-details'>
        {/* works - METHOD 1 */}

        <p>{props.user_name}</p>
        <p>{props.bio}</p>

        <br/>
        


        {/* works - METHOD 2 */}
        {/* <span>{users.first_name} {users.last_name}</span>

        <p>{users.location}</p>
        <p>{users.bio}</p>

        <br/>
        
        <p>CONTACT INFO:</p>
        <p>{users.email}</p>
        <p>Tel.: {users.phone_number}</p> */}
      </article>
    </section>
  );
};