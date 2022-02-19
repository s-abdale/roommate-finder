import React, { useState } from 'react';
import {BrowserRouter as Router, Link , Route, Routes} from 'react-router-dom';
import './main.css';



export default function Main(props) {

  return (

    <section className='main-body'>

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