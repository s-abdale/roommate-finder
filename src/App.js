import React, {useState, useEffect} from "react";
// import axios from "axios";

import './App.css';

// import { Button } from './components/Button.jsx';
import { Header } from './components/Header.jsx';
import MatchList from './components/MatchList';
import DetailedProfile from './components/DetailedProfile';
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
      <DetailedProfile
        key = {users[0][0]}

        // method 1:
        // first_name = {users[0][0].first_name}
        // last_name = {users[0][0].last_name}
        // bio = {users[0][0].bio}

        // method 2:
        users = {users[0][0]}
      />
    </div>

  );
}

export default App;
