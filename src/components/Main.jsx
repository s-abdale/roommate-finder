import React, { useState } from 'react';
import {BrowserRouter as Router, Link , Route, Routes} from 'react-router-dom';
import './main.css';

//https://wallpaperaccess.com/full/833312.png
//style={{ backgroundImage: `url("https://wallpaperaccess.com/full/1098481.jpg")`}}

export default function Main(props) {

  return (

    <section className='main-body' style={{ backgroundImage: `url("https://wallpaperaccess.com/full/1098481.jpg")`}}>

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