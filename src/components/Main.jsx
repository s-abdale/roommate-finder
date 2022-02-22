import React, { useState } from 'react';
import {BrowserRouter as Router, Link , Route, Routes} from 'react-router-dom';
import './main.css';

//https://wallpaperaccess.com/full/833312.png
//style={{ backgroundImage: `url("https://wallpaperaccess.com/full/1098481.jpg")`}}

export default function Main(props) {

  return (

    <section className='main-body' style={{ backgroundImage: `url("https://wallpaperaccess.com/full/1098481.jpg")`}}>

    <Link to="/profile">
      <button className='button-17'>Profile</button>
    </Link>

    <Link to="/likes">
      <button className='button-17'> Find Roomies </button>
    </Link>

    <Link to="/matchList">
      <button className='button-17'> Matches </button>
    </Link>

    </section>
  );
};