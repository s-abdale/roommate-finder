import React, { useState } from 'react';
import './main.css';



export default function Main(props) {


  return (
    <section className='main-body'>
      <button
        className='big-buttons'
        // insert route to page
      >
        Profile
      </button>

      <button
        className='big-buttons'
        // insert route to page
      >
        Find Roomies
      </button>

      <button
        className='big-buttons'
        // insert route to page
      >
        Matches
      </button>

    </section>
  );
};