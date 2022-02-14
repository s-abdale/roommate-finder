import React, {useState, useEffect} from "react";
// import axios from "axios";

import './App.css';

// import { Button } from './components/Button.jsx';
import { Header } from './components/Header.jsx';
import MatchList from './components/MatchList';
import DetailedProfile from './components/DetailedProfile';
import Likes from './components/Likes';
import tempUserData from './components/tempUserData';
import {prepareUserData} from './helpers/userHelpers';


function App() {
  const users = prepareUserData(tempUserData);


  return (
    <div>
      <Header/>
      {/* <MatchList
        key = {users[0]}
        users = {users[0]}
      /> */}
      {/* <DetailedProfile
        // hardcoded for testing

        key = {users[0][0]}

        // method 1:
        first_name = {users[0][0].first_name}
        last_name = {users[0][0].last_name}
        location = {users[0][0].location}
        bio = {users[0][0].bio}
        email = {users[0][0].email}
        phone_number = {users[0][0].phone_number}

        // method 2:
        // users = {users[0][0]}
      /> */}
      <Likes
        key = {users[0]}
        users = {users[0]}
      />
    </div>

  );
}

export default App;
