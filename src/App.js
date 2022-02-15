import React, {useState, useEffect} from "react";
// do npm install axios
// import axios from "axios";

import './App.css';

// import { Button } from './components/Button.jsx';
import { Header } from './components/Header.jsx';
import MatchList from './components/MatchList';
import BasicProfile from './components/BasicProfile';
import tempUserData from './components/tempUserData';
import {prepareUserData} from './helpers/userHelpers';

import Login from "./components/Login";
import Resgister from "./components/Register";
import { dblClick } from "@testing-library/user-event/dist/click";

function App() {
  const users = prepareUserData(tempUserData);
  // console.log(users[0][0]); // note: help function not working

  const [firstnameReg, setFirstnameReg] = useState('');
  const [lastnameReg, setLastnameReg] = useState('');
  const [usernameReg, setUsernameReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [phonenumberReg, setPhonenumberReg] = useState('');
  const [genderReg, setGenderReg] = useState(null);
  const [contactinfoReg, setContactinfoReg] = useState('');
  const [userimageReg, setUserimageReg] = useState('');
  const [bioReg, setBioReg] = useState('');
  const [locationReg, setLocationReg] = useState('');

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const register = () => {
    console.log("sakjhdka", genderReg)
    let isMale = null
    if (genderReg === "Female") {
      isMale = false
    } else if (genderReg === "Male") {
      isMale = true
    }

    console.log("isMale: ", isMale )
    // Axios.post("http://localhost:3001/api/register", {
    //   firstName: firstnameReg,
    //   lastName: lastnameReg,
    //   userName: usernameReg,
    //   email: emailReg,
    //   password: passwordReg,
    //   phoneNumber: phonenumberReg,
    //   gender: isMale,
    //   // gender: genderReg,
    //   contactInfo: contactinfoReg,
    //   userImage: userimageReg,
    //   bio: bioReg,
    //   location: locationReg
    // }).then((response) => {
    //   console.log(response)
    // })
  }

  const login = () => {
    console.log("email, password", email, password)
    //  Axios.post("http://localhost:3001/api/login", {
    //   email: email,
    //   password: password,
    //  }).then((response) => {
        // if (response.data.message) {
        //   setLoginstatus(response.data.message)
        // } else {
        //   setLoginstatus(response.data[0].email)
        // }
    //    console.log(response.data)
    //  })
  }

  return (
    <div>
      <Header/>
      <Login setEmail={setEmail} setPassword={setPassword} login={login}/>
      <Resgister 
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
        register={register} 
      />

      {/* <h1>{loginStatus}</h1> */}
      {/* <MatchList
        key = {users[0]}
        users = {users[0]}
      /> */}
      {/* <BasicProfile
        key = {users[0][0]}
        users = {users[0][0]}
      /> */}
    </div>

  );
}

export default App;
