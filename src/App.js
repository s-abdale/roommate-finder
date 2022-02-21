import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Link , Route, Routes, useNavigate} from 'react-router-dom';
import axios from "axios";
import './App.css';

// import { Button } from './components/Button.jsx';
import { Header } from './components/Header.jsx';
import MatchList from './components/MatchList';
import DetailedProfile from './components/DetailedProfile';
import Likes from './components/Likes.jsx';
import Main from './components/Main.jsx';
import Profile from './components/Profile.jsx';
import EditProfile from './components/edit-profile/EditProfile.jsx';
// import tempUserData from './components/tempUserData';
// import {prepareUserData} from './helpers/userHelpers';
import Preferences from "./components/Preferences";
import Login from "./components/Login";
import Register from "./components/Register";
import { dblClick } from "@testing-library/user-event/dist/click";

function App() {
  // const users = prepareUserData(tempUserData);
  
  const [userID, setUserID] = useState(localStorage.getItem("user"))
  const [resUser, setresUser ] = useState(null)

  const login = (email, password) => {
    console.log("email, password", email, password)
     axios.post("/api/login", {
      email: email,
      password: password,
     }).then((response) => {
      localStorage.setItem("user", response.data.id )
      setUserID(response.data.id)
      setresUser(response.data)
    })
  }
  
  console.log(localStorage.getItem("user"))
  console.log(resUser);

  const onLogout = () => {
    axios.post("/api/logout", {
    }).then((response) => {
      console.log(response.data)
      localStorage.clear()
      setUserID(null)
      // localStorage.setItem("user", null )
      setresUser(null)
    })
  }

  //style={{ backgroundImage: `url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/221808/sky.jpg")`}}
  return (
    <div>
      <Router>
        <Header user={userID} onLogout={onLogout}/>
        <Routes>
            <Route path="/login" element={<Login login={login}/>}></Route>
            <Route path="/register" element={<Register setresUser={setresUser} setUserID={setUserID}/>}></Route>
            <Route path="/" element={<Main/>}></Route>

            <Route path="/profile" element={<Profile userID = {userID}/>}></Route>
            <Route path="/preferences" element={<Preferences/>}></Route>
            <Route path="/editProfile" element={<EditProfile userID = {userID}/>}></Route>

            {/* <Route path="/likes" element={<Likes key = {users[0]} users = {users[0]}/>}></Route> */}
            <Route path="/likes" element={<Likes />}></Route>

            {/* <Route path="/matchList" element={<MatchList key = {users[0]} users = {users[0]}/>}></Route> */}
            <Route path="/matchList" element={<MatchList />}></Route>

            <Route path="/detailed-profile/:id" element={<DetailedProfile />}></Route>

        </Routes>
      </Router>

    
      {/* <h1>{loginStatus}</h1> */}
      
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
