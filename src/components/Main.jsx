import React, { useState } from 'react';
import {BrowserRouter as Router, Link , Route, Routes} from 'react-router-dom';
import './main.css';



export default function Main(props) {

  // const onProfile = () => {
  //   window.location.href = "/profile"
  // }

  // const onfindRoomies = () => {
  //   window.location.href = "/roomies"
  // }

  // const onMatchList = () => {
  //   window.location.href = "/matchList"
  // }

  return (


    <section className='main-body'>


   {/* <Link to="/profile"><button>Profile</button></Link> */}

      <button
        className='big-buttons'
        // insert route to page
        //onClick={onProfile}
        >
        <Link to="/profile">Profile</Link>
      </button>

      <button
        className='big-buttons'
        // insert route to page
        // onClick={onfindRoomies}
      >
        <Link to="/roomies">Find Roomies</Link>
      </button>

      <button
        className='big-buttons'
        // insert route to page
        // onClick={onMatchList}
      >
        <Link to="/matchList">Matches</Link>
      </button>

    </section>
  );
};