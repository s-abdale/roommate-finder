import React, { useState } from 'react';

import DetailedProfile from './DetailedProfile';

import TinderCard from 'react-tinder-card'
// https://github.com/3DJakob/react-native-tinder-card-demo/blob/master/src/examples/Simple.js

import './likes.css';



export default function Likes(props) {
  const {users} = props;


  const [lastDirection, setLastDirection] = useState()
  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  } 
  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  } // expand here with api calls





  const parsedLikeesItem = users.map((singleLikee) => {
    return (
      <TinderCard key={singleLikee.name} onSwipe={(dir) => swiped(dir, singleLikee.name)} onCardLeftScreen={() => outOfFrame(singleLikee.name)}>
        <DetailedProfile
          first_name = {singleLikee.first_name}
          last_name = {singleLikee.last_name}
          location = {singleLikee.location}
          bio = {singleLikee.bio}
          email = {singleLikee.email}
          phone_number = {singleLikee.phone_number}
        />
      </TinderCard>
    );
  })


  return (
    <section className='likes-list'>
      <h1>List of likes</h1>
      <article className='likes-items' >
        {parsedLikeesItem}
      </article>
    </section>
  );
}