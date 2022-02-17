import React, { useState, useEffect, useMemo } from 'react';
import axios from "axios";
import {BrowserRouter as Router, Link , Route, Routes} from 'react-router-dom';


// import { Button } from 'react-native';


// import DetailedProfile from './DetailedProfile';
import SimpleProfile from './SimpleProfile';


import TinderCard from 'react-tinder-card'
// https://github.com/3DJakob/react-native-tinder-card-demo/blob/master/src/examples/Simple.js

import './likes.css';


const alreadyRemoved = [];





export default function Likes() {
  // const {users} = props;


  const [lastDirection, setLastDirection] = useState();

  // axios
  const [likes, setLikes] = useState([])

  useEffect(() => {
    axios.get("/api/roomies", {
    })
    .then(response => {
      const allProfiles = response.data
      // console.log(profileData)
      // console.log("inside: ", allProfiles)
      setLikes(allProfiles)
    })
  }, [])


/* -------------------------------------- */
  const swiped = (direction, user_id, user) => {
    // console.log('removing: ' + id);
    console.log(user_id);
    setLastDirection(direction);
    console.log(`🔥 moving ${user_id} ${direction}`);
    if (direction === 'right') {
      axios.post("/api/roomies", {
        user_id
        
      })
    }
  } 
  const outOfFrame = (user_id) => {
    console.log(`🧯 ${user_id} left the screen!`);
  }
/* -------------------------------------- */



  const childRefs = useMemo(() => Array(likes.length).fill(0).map(i => React.createRef()), [likes]);
  // console.log(likes.length)
  // console.log({childRefs});
  const swipe = (dir) => {

    const cardsLeft = likes.filter(singleLikee => !alreadyRemoved.includes(singleLikee.user_id))
    // console.log({likes});
    // console.log({alreadyRemoved});

    
    if (cardsLeft.length) { // if there are users present ...
      // console.log(`before: ${cardsLeft.length}`);

      const toBeRemoved = cardsLeft[cardsLeft.length - 1].user_id // Find the card object to be removed
      // console.log(`to be removed: ${toBeRemoved}`);

      const index = likes.map(singleLikee => singleLikee.user_id).indexOf(toBeRemoved) // Find the index of which to make the reference to
      // console.log(`index to be removed: ${index}`);

      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen

      childRefs[index].current.swipe(dir) // Swipe the card! 
      // console.log(`after: ${cardsLeft.length}`);
    }
  }



  const parsedLikeesItem = likes.map((singleLikee, index) => {


    return (
      <div className='card-container'>
        <TinderCard 
          key={singleLikee.user_name} 
          ref={childRefs[index]}
          onSwipe={(dir) => {
            if ((dir === 'left') || (dir === 'right')) {
              swiped(dir, singleLikee.user_id, singleLikee);
              // it's noticing the right user ... 
              
            }
          }}
          preventSwipe={['up', 'down']}
          // onCardLeftScreen={() => outOfFrame(name)}
        >
          <div className='card'>
            <SimpleProfile
              
              bio = {singleLikee.bio}
              user_name = {singleLikee.user_name}
            />

          </div>
        </TinderCard>
      </div>
    );
  })


  // note: MUST use callback function if you don't want the onClick to run immediately
  // const clickingLeft = () => console.log('clicking left');
  // const clickingRight = () => console.log('clicking right');

  return (

    <section className='likes-list'>

      <p>List of likes</p>

      <article className='likes-items' >
        {parsedLikeesItem}
      </article>

      <button 
        // onClick={clickingLeft} 
        onClick={() => swipe('left')}
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

      <button className='go-to-matches'>
        <Link to="/matchList">CLICK TO SEE YOUR MATCHES</Link>
      </button>

    </section>


  );
}
{/* <section> 
  <button onClick={clickingbutton} title='Swipe left!' > Left </button>
  <button title='Swipe right!'> Right </button>
</section> */}