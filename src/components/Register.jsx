import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Link , Route, Routes, useNavigate} from 'react-router-dom';
import axios from "axios";
import './register.css';


import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

export default function Resgister({setresUser, setUserID}) {

  const navigate = useNavigate()

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
  
    const register = () => {
      console.log("testing: ", genderReg)
      let isMale = null
      if (genderReg === "Female") {
        isMale = false
      } else if (genderReg === "Male") {
        isMale = true
      }
  
      console.log("isMale: ", isMale )
      axios.post("/api/register", {
        firstName: firstnameReg,
        lastName: lastnameReg,
        userName: usernameReg,
        email: emailReg,
        password: passwordReg,
        phoneNumber: phonenumberReg,
        gender: isMale,
        // gender: genderReg,
        contactInfo: contactinfoReg,
        userImage: userimageReg,
        bio: bioReg,
        location: locationReg
      }).then((response) => {
        console.log(response.data)
        localStorage.setItem("user", response.data.id )
        setUserID(response.data.id)
        setresUser(response.data)
        //redirect to new page
        navigate("/")
      })
    }
  //console.log("setfirstname  ....", setFirstnameReg)
  //https://wallpaperaccess.com/full/57168.jpg 
  // https://wallpaperaccess.com/full/833312.png
  //https://i.pinimg.com/originals/74/cd/f8/74cdf85c9f3ee94b77b4da0b81d9f17f.jpg
  //https://wallpaperaccess.com/full/1098481.jpg
  return (
    <div className="registerDiv" style={{ backgroundImage: `url("https://wallpaperaccess.com/full/833312.png")`}} >
      <form onSubmit={event => event.preventDefault()} autoComplete="off" className='register'>
        {/* <h1>Registration</h1> */}

        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          margin="normal"
          type='text'
          name="firstnameReg"
          className='login-text-field'
          onChange={(e) => {setFirstnameReg(e.target.value)}}
        />
        {/* <br/> */}

        {/* <label>First Name</label>
         <input type='text' placeholder='First Name' name="firstnameReg" onChange={(e) => {setFirstnameReg(e.target.value)}}></input> */}

        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          margin="normal"
          type='text'
          name="lastnameReg"
          className='login-text-field'
          onChange={(e) => {setLastnameReg(e.target.value)}}
        />
        {/* <br/> */}

        {/* <label>Last Name</label>
          <input type='text' placeholder='Last Name' name="lastnameReg"onChange={(e) => {setLastnameReg(e.target.value)}} ></input> */}
        
        <TextField
          id="outlined-basic"
          label= "User Name"
          variant="outlined"
          margin="normal"
          type='text'
          name="usernameReg"
          className='login-text-field'
          onChange={(e) => {setUsernameReg(e.target.value)}}
        />
        {/* <br/> */}

        {/* <label>User Name</label>
          <input type='text' placeholder='Username' name="usernameReg" onChange={(e) => {setUsernameReg(e.target.value)}} ></input> */}
        
        <TextField
          id="outlined-basic"
          label= "Email"
          variant="outlined"
          margin="normal"
          type='email'
          name="emailReg"
          className='login-text-field'
          onChange={(e) => {setEmailReg(e.target.value)}}
        />
        {/* <br/> */}
        
        {/* <label>Email</label>
          <input type='email' placeholder='Email' name="emailReg" onChange={(e) => {setEmailReg(e.target.value)}}></input> */}
        
        <TextField
          id="outlined-basic"
          label= "Password"
          variant="outlined"
          margin="normal"
          type='password'
          name="passwordReg"
          className='login-text-field'
          onChange={(e) => {setPasswordReg(e.target.value)}}
        />
        {/* <br/> */}

        {/* <label>Password</label>
         <input type='password' placeholder='Password...' name="passwordReg" onChange={(e) => {setPasswordReg(e.target.value)}} ></input> */}
        
        <TextField
          id="outlined-basic"
          label= "Phone Number"
          variant="outlined"
          margin="normal"
          type='text'
          name="phonenumberReg"
          className='login-text-field'
          onChange={(e) => {setPhonenumberReg(e.target.value)}}
        />
        {/* <br/> */}

        {/* <label>Phone Number</label>
          <input type='text' placeholder='Phone Number' name="phonenumberReg" onChange={(e) => {setPhonenumberReg(e.target.value)}} ></input> */}
        
        {/* <br/> */}
        {/* <label>Gender:</label> */}
          <select  placeholder="Gender" list="browsers" name="genderReg" onChange={(e) => {setGenderReg(e.target.value)}}>
              <option value="Male">Male</option> 
              <option value="Female">Female</option>
              <option value="They/Them">They/Them</option>
          </select>  

        {/* <label>Gender</label>
        <input type='text' placeholder='Select Gender' onChange={(e) => {setGenderReg(e.target.value)}} ></input> */}

        <TextField
          id="outlined-basic"
          label= "Contact Info"
          variant="outlined"
          margin="normal"
          type='text'
          name="contactinfoReg"
          className='login-text-field'
          onChange={(e) => {setContactinfoReg(e.target.value)}}
        />
        {/* <br/> */}

        {/* <label>Contact Info</label>
         <input type='text' placeholder='Contact Info' name="contactinfoReg" onChange={(e) => {setContactinfoReg(e.target.value)}}></input> */}

         <TextField
          id="outlined-basic"
          label= "Upload image"
          variant="outlined"
          margin="normal"
          type='text'
          name="userimageReg"
          className='login-text-field'
          onChange={(e) => {setUserimageReg(e.target.value)}}
        />
        {/* <br/> */}

        {/* <label>Upload image</label>
          <input type='text' placeholder='Upload Image' name="userimageReg" onChange={(e) => {setUserimageReg(e.target.value)}}></input> */}
        
        <TextField
          id="outlined-basic"
          label= "Bio"
          variant="outlined"
          margin="normal"
          type='text'
          name="bioReg"
          className='login-text-field'
          onChange={(e) => {setBioReg(e.target.value)}}
        />
        {/* <br/> */}

        {/* <label>Bio</label>
          <input type='text' placeholder='Bio'  name="bioReg" onChange={(e) => {setBioReg(e.target.value)}}></input> */}

          <TextField
          id="outlined-basic"
          label= "Location"
          variant="outlined"
          margin="normal"
          type='text'
          name="locationReg"
          className='login-text-field'
          onChange={(e) => {setLocationReg(e.target.value)}}
        />
        {/* <br/> */}
        
        {/* <label>Location</label>
          <input type='text' placeholder='Location' name="locationReg" onChange={(e) => {setLocationReg(e.target.value)}}></input> */}
        <br/>
        <button className="register-page-submit-button" type='submit' onClick={register}> Register
          {/* <Link to="/">Register</Link> */}
        </button>
        <br/>
    </form>
  </div>
    
  );
};

// const [firstnameReg, setFirstnameReg] = useState('');
//   const [lastnameReg, setLastnameReg] = useState('');
//   const [usernameReg, setUsernameReg] = useState('');
//   const [emailReg, setEmailReg] = useState('');
//   const [passwordReg, setPasswordReg] = useState('');
//   const [phonenumberReg, setPhonenumberReg] = useState('');
//   const [genderReg, setGenderReg] = useState('');
//   const [contactinfoReg, setContactinfoReg] = useState('');
//   const [userimageReg, setUserimageReg] = useState('');
//   const [bioReg, setBioReg] = useState('');
//   const [locationReg, setLocationReg] = useState('');

// onChange={(e) => {setFirstnameReg(e.target.value)}}

// const [userReg, setUserReg] = useState({
//   firstnameReg: '',
//   lastnameReg: '',
//   usernameReg: '',
//   emailReg: '',
//   passwordReg: '',
//   phonenumberReg: '',
//   genderReg: '',
//   contactinfoReg: '',
//   userimageReg: '',
//   bioReg: '',
//   locationReg: ''
// })

// setting state for all inputs at the same time through a loop. 
  // const [test, setTest ] = useState("");
  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   const formElements = Array.from(e.currentTarget.elements)
  //   //console.log("form elements: ", formElements)
    
  //   const formData = {}
  //   formElements.forEach(element => {
  //     //console.log(element.value)
  //     //console.log(element.name)

  //     setUserReg((prev) => ({...prev, [element.name] : element.value }))
  //     formData[element.name] = element.value
  //   });
  //   console.log("test", userReg)
  //   setUserReg(formData)
  //   //console.log(formData)
  // }

  //In backend inside app.post('/register) before db query add this
  // const firstName = req.body.firstname
  // const lastName = req.body.lastname
  // const email = req.body.email
  // const password = req.body.password
  //firstName, lastName, userName, phoneNumber, email, password, contactInfo, userImage, bio, location, gender} = req.body;

  // Also in backend npm install cors
  // const cors = require("cors");
  // app.use(cors())


  // setFirstnameReg={setFirstnameReg} 
  //       setLastnameReg={setLastnameReg}
  //       setUsernameReg={setUsernameReg}
  //       setEmailReg={setEmailReg}
  //       setPasswordReg={setPasswordReg}
  //       setPhonenumberReg={setPhonenumberReg}
  //       setGenderReg={setGenderReg}
  //       setContactinfoReg={setContactinfoReg}
  //       setUserimageReg={setUserimageReg}
  //       setBioReg={setBioReg}
  //       setLocationReg={setLocationReg}