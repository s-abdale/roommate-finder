import React, { useState } from 'react';
import {BrowserRouter as Router, Link , Route, Routes} from 'react-router-dom';
import './main.css';

//https://wallpaperaccess.com/full/833312.png
//style={{ backgroundImage: `url("https://wallpaperaccess.com/full/1098481.jpg")`}}

export default function Main(props) {

  return (

    <section className='main-body' style={{ backgroundImage: `url("https://i.gifer.com/origin/11/112ad705e340107c20d9070f4ab26a03_w200.gif")`}}>

    <div className='main-page-buttons-container'>
      <Link to="/profile">
        <button className='main-page-big-buttons'>Profile</button>
      </Link>

      <Link to="/likes">
        <button className='main-page-big-buttons'> Find Roomies </button>
      </Link>

      <Link to="/matchList">
        <button className='main-page-big-buttons'> Matches </button>
      </Link>
    </div>

    </section>
  );
};