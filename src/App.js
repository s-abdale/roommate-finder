import React, {useState, useEffect} from "react";
// do npm install axios
// import axios from "axios";

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

import Login from "./components/Login";
import Resgister from "./components/Register";
import { dblClick } from "@testing-library/user-event/dist/click";

function App() {
  const users = prepareUserData(tempUserData);

  /* from register */

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const register = () => {
  //   console.log("sakjhdka", genderReg)
  //   let isMale = null
  //   if (genderReg === "Female") {
  //     isMale = false
  //   } else if (genderReg === "Male") {
  //     isMale = true
  //   }
  // };
  /* from register */

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

      <EditProfile 
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



      />


    </div>

  );
}

export default App;
