import React, {useState, useEffect} from "react";
// import axios from "axios";

import './App.css';

// import { Button } from './components/Button.jsx';
import { Header } from './components/Header.jsx';
import MatchList from './components/MatchList';
// import BasicProfile from './components/BasicProfile';
import tempUserData from './components/tempUserData';
import {prepareUserData} from './helpers/userHelpers';


function App() {
  const users = prepareUserData(tempUserData);
  // console.log(users[0]); // note: help function not working


  return (
    <div>
      <Header/>
      <MatchList
        key = {users[0]}
        users = {users[0]}
      />
    </div>

  );
}

export default App;
