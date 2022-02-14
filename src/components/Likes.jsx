import React, { useState } from 'react';

import DetailedProfile from './DetailedProfile';

import TinderCard from 'react-tinder-card'

import './likes.css';




export default function Likes(props) {
  const {users} = props;

  const parsedLikeesItem = users.map((singleLikee) => {
    return (
      <DetailedProfile
        first_name = {singleLikee.first_name}
        last_name = {singleLikee.last_name}
        location = {singleLikee.location}
        bio = {singleLikee.bio}
        email = {singleLikee.email}
        phone_number = {singleLikee.phone_number}
      />
    );
  })

  return (
    <section className='likes-list'>
      <h1>List of likes</h1>
      <article className='likes-items'>
        {parsedLikeesItem}
      </article>
    </section>
  );


}