import React, { useState, useEffect, useMemo } from 'react';
import axios from "axios";
import {BrowserRouter as Router, Link , Route, Routes} from 'react-router-dom';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';


import SimpleProfile from './SimpleProfile';


import TinderCard from 'react-tinder-card'
// https://github.com/3DJakob/react-native-tinder-card-demo/blob/master/src/examples/Simple.js

import './likes.css';



export default function Likes() {
  const alreadyRemoved = [];
  
  const [lastDirection, setLastDirection] = useState();

  const [likes, setLikes] = useState([])

  useEffect(() => {
    axios.get("/api/roomies", {
    })
    .then(response => {
      const allProfiles = response.data
      setLikes(allProfiles)
    })
  }, [])


  const swiped = (direction, user_id, user) => {

    setLastDirection(direction);

    if (direction === 'right') {
      axios.post("/api/roomies", {
        user_id
      })
    }
  } 
  const outOfFrame = (user_id) => {
    console.log(`🧯 ${user_id} left the screen!`);
  }


  const childRefs = useMemo(() => Array(likes.length).fill(0).map(i => React.createRef()), [likes]);

  const swipe = (dir, user_id) => {

    const cardsLeft = likes.filter(singleLikee => !alreadyRemoved.includes(singleLikee.user_id))

    if (cardsLeft.length) { // if there are users present ...

      const toBeRemoved = cardsLeft[cardsLeft.length - 1].user_id // Find the card object to be removed

      const index = likes.map(singleLikee => singleLikee.user_id).indexOf(toBeRemoved) // Find the index of which to make the reference to

      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen

      childRefs[index].current.swipe(dir) // Swipe the card! 
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
            }
          }}
          preventSwipe={['up', 'down']}
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



  return (

    <section className='likes-list'>

      {/* <p>List of likes</p> */}

      <article className='likes-items' >
        {parsedLikeesItem}
      </article>

      <div className='command-center'>
        <div className='command-swipe'>
          <Fab size="medium" color="primary" aria-label="add"
            onClick={() => swipe('left')}
            title='Swipe left!' 
            className='button-swipe-left'
          > 
            <FavoriteIcon/>
            {/* Left  */}
          </Fab>

          <Fab size="medium" color="primary" aria-label="add" 
            onClick={() => swipe('right')}
            title='Swipe right!'
          > 
            <CloseIcon/>
            {/* Right  */}
          </Fab>
        </div>

        <div className='command-extras'>
          <p>You swiped right!</p>

          <Button variant="outlined">
            <Link to="/matchList" className='go-to-matches'>Go to Matches</Link>
          </Button>

        </div>


        {/* {lastDirection ? <p className='last-swiped'>You swiped {lastDirection}</p> : <p className='last-swiped' />} */}
      </div>


    </section>


  );
}