import React, { useState, useMemo } from 'react';

// import { Button } from 'react-native';


import DetailedProfile from './DetailedProfile';

import TinderCard from 'react-tinder-card'
// https://github.com/3DJakob/react-native-tinder-card-demo/blob/master/src/examples/Simple.js

import './likes.css';


const alreadyRemoved = [];

export default function Likes(props) {
  const {users} = props;


  const [lastDirection, setLastDirection] = useState();


/* -------------------------------------- */
  const swiped = (direction, nameToDelete) => {
    // console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
    console.log(`🔥 moving ${nameToDelete} ${direction}`);
  } 
  const outOfFrame = (name) => {
    console.log(`🧯 ${name} left the screen!`);
  } // expand here with axios calls
/* -------------------------------------- */



  const childRefs = useMemo(() => Array(users.length).fill(0).map(i => React.createRef()), []);

  const swipe = (dir) => {

    const cardsLeft = users.filter(singleLikee => !alreadyRemoved.includes(singleLikee.email))

    
    if (cardsLeft.length) { // if there are users present ...
      // console.log(`before: ${cardsLeft.length}`);

      const toBeRemoved = cardsLeft[cardsLeft.length - 1].email // Find the card object to be removed
      // console.log(`to be removed: ${toBeRemoved}`);

      const index = users.map(singleLikee => singleLikee.email).indexOf(toBeRemoved) // Find the index of which to make the reference to
      // console.log(`index to be removed: ${index}`);

      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card! 🚨🚨🚨 THIS PART IS BROKEN 🚨🚨🚨
      console.log(`after: ${cardsLeft.length}`);
    }
  }



  const parsedLikeesItem = users.map((singleLikee, index) => {

    const name = (`${singleLikee.first_name} ${singleLikee.last_name}`);

//do singleLikee.id 
    return (
      <div className='card-container'>
        <TinderCard 
          key={singleLikee.name} 
          ref={childRefs[index]}
          onSwipe={(dir) => {
            swiped(dir, name); 
          }} 
          
          onCardLeftScreen={() => outOfFrame(name)}
        >


          <div className='card'>
            <DetailedProfile
              first_name = {singleLikee.first_name}
              last_name = {singleLikee.last_name}
              location = {singleLikee.location}
              bio = {singleLikee.bio}
              email = {singleLikee.email}
              phone_number = {singleLikee.phone_number}
            />
          </div>


        </TinderCard>
      </div>
    );
  })


  // note: MUST use callback function if you don't want the onClick to run immediately
  const clickingLeft = () => console.log('clicking left');
  const clickingRight = () => console.log('clicking right');

  return (

    <section className='likes-list'>

      <p>List of likes</p>

      <article className='likes-items' >
        {parsedLikeesItem}
      </article>

      <button 
        onClick={clickingLeft} 
        title='Swipe left!' 
      > 
        Left 
      </button>

      <button 
        // onClick={clickingRight}
        onClick={() => swipe('right')}
        title='Swipe right!'
      > 
        Right 
      </button>

        {/* <button onClick={() => swipe('right')} title='Swipe right!'> Right </button> */}

      {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
    </section>


  );
}
{/* <section> 
  <button onClick={clickingbutton} title='Swipe left!' > Left </button>
  <button title='Swipe right!'> Right </button>
</section> */}