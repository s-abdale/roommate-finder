import React, {useState, useEffect} from "react";
// npm i react-router-dom
import {BrowserRouter as Router, Link , Route, Routes} from 'react-router-dom';

import './App.css';

// import { Button } from './components/Button.jsx';
import { Header } from './components/Header.jsx';
import MatchList from './components/MatchList';
import DetailedProfile from './components/DetailedProfile';
import Likes from './components/Likes.jsx';
import Main from './components/Main.jsx';
import Profile from './components/Profile.jsx';
import EditProfile from './components/edit-profile/EditProfile.jsx';
import tempUserData from './components/tempUserData';
import {prepareUserData} from './helpers/userHelpers';
import Preferences from "./components/Preferences";
import Login from "./components/Login";
import Register from "./components/Register";
import { dblClick } from "@testing-library/user-event/dist/click";

const someName = "something"
function App() {
  const users = prepareUserData(tempUserData);

  return (
    <div>
      <Header/>
      <Router>
        <Routes>

            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/" element={<Main/>}></Route>

            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/preferences" element={<Preferences/>}></Route>
            <Route path="/editProfile" element={<EditProfile/>}></Route>

            <Route path="/likes" element={<Likes key = {users[0]} users = {users[0]}/>}></Route>

            <Route path="/matchList" element={<MatchList key = {users[0]} users = {users[0]}/>}></Route>
        </Routes>
      </Router>

      {/* <Preferences/> */}
      {/* <Login /> */}
      {/* <Resgister /> */}
      {/* <h1>{loginStatus}</h1> */}
      {/* <Profile  /> */}
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

      {/* <Likes
        key = {users[0]}
        users = {users[0]}
      /> */}

      {/* <Main/> */}

      {/* <Profile 
        // using method 1 from detailed profile
      {/* <BasicProfile
        key = {users[0][0]}

        // method 1:
        first_name = {users[0][0].first_name}
        last_name = {users[0][0].last_name}
        gender = {users[0][0].gender}
        location = {users[0][0].location}
        bio = {users[0][0].bio}
        email = {users[0][0].email}
        contact_info = {users[0][0].contact_info}
        phone_number = {users[0][0].phone_number}
      /> */}

      {/* <EditProfile 
        // REGULAR PROPS. using method 1 from detailed profile
        key = {users[0][0]}
        first_name = {users[0][0].first_name}
        last_name = {users[0][0].last_name}
        gender = {users[0][0].gender}
        location = {users[0][0].location}
        bio = {users[0][0].bio}
        email = {users[0][0].email}
        contact_info = {users[0][0].contact_info}
        phone_number = {users[0][0].phone_number}


        // FORM STATES
        setFirstnameReg={setFirstnameReg} 
        setLastnameReg={setLastnameReg}
        setUsernameReg={setUsernameReg}
        setEmailReg={setEmailReg}
        setPasswordReg={setPasswordReg}
        setPhonenumberReg={setPhonenumberReg}
        setGenderReg={setGenderReg}
        setContactinfoReg={setContactinfoReg}
        setUserimageReg={setUserimageReg}
        setBioReg={setBioReg}
        setLocationReg={setLocationReg}
      /> */}


    </div>

  );
}

export default App;
