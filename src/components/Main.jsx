import React, { useState } from 'react';
import {BrowserRouter as Router, Link , Route, Routes} from 'react-router-dom';
import './main.css';

//https://wallpaperaccess.com/full/833312.png
//style={{ backgroundImage: `url("https://wallpaperaccess.com/full/1098481.jpg")`}}

//cool gif
//https://pa1.narvii.com/7240/aa470217e4c701ea103b594ed940547a4fc6f85cr1-452-640_hq.gif

export default function Main(props) {

  return (

    <section className='main-body' style={{ backgroundImage: `url("https://pa1.narvii.com/7240/aa470217e4c701ea103b594ed940547a4fc6f85cr1-452-640_hq.gif")`}}>

    <Link to="/profile">
      <button className='big-buttons'>Profile</button>
    </Link>

    <Link to="/likes">
      <button className='big-buttons'> Find Roomies </button>
    </Link>

    <Link to="/matchList">
      <button className='big-buttons'> Matches </button>
    </Link>

    </section>
  );
};