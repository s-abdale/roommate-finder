import React, {useState, useEffect} from "react";

import './register.css';

export default function Resgister({
  setFirstnameReg,  
  setLastnameReg,
  setUsernameReg,
  setEmailReg,
  setPasswordReg,
  setPhonenumberReg,
  setGenderReg,
  setContactinfoReg,
  setUserimageReg,
  setBioReg,
  setLocationReg,
  register}) {
  
  console.log("setfirstname  ....", setFirstnameReg)
  return (
    <form onSubmit={event => event.preventDefault()} autoComplete="off" className='register'>
      <h1>Registration</h1>
      <label>First Name</label>
      <input type='text' placeholder='First Name' name="firstnameReg" onChange={(e) => {setFirstnameReg(e.target.value)}}></input>
      <label>Last Name</label>
      <input type='text' placeholder='Last Name' name="lastnameReg"onChange={(e) => {setLastnameReg(e.target.value)}} ></input>
      <label>User Name</label>
      <input type='text' placeholder='Username' name="usernameReg" onChange={(e) => {setUsernameReg(e.target.value)}} ></input>
      <label>Email</label>
      <input type='email' placeholder='Email' name="emailReg" onChange={(e) => {setEmailReg(e.target.value)}}></input>
      <label>Password</label>
      <input type='password' placeholder='Password...' name="passwordReg" onChange={(e) => {setPasswordReg(e.target.value)}} ></input>
      <label>Phone Number</label>
      <input type='text' placeholder='Phone Number' name="phonenumberReg" onChange={(e) => {setPhonenumberReg(e.target.value)}} ></input>
      <label>Gender:
        <input type="text"  placeholder="Gender" list="browsers" name="genderReg" onChange={(e) => {setGenderReg(e.target.value)}}/>    
      </label>
        <datalist id="browsers">
            <option value="Male"/> 
            <option value="Female"/> 
            <option value="They/Them"/> 
            {/* <option value="Prefer not to say"/> */}
        </datalist>
      {/* <label>Gender</label>
      <input type='text' placeholder='Select Gender' onChange={(e) => {setGenderReg(e.target.value)}} ></input> */}
      <label>Contact Info</label>
      <input type='text' placeholder='Contact Info' name="contactinfoReg" onChange={(e) => {setContactinfoReg(e.target.value)}}></input>
      <label>Upload image</label>
      <input type='text' placeholder='Upload Image' name="userimageReg" onChange={(e) => {setUserimageReg(e.target.value)}}></input>
      <label>Bio</label>
      <input type='text' placeholder='Bio'  name="bioReg" onChange={(e) => {setBioReg(e.target.value)}}></input>
      <label>Location</label>
      <input type='text' placeholder='Location' name="locationReg" onChange={(e) => {setLocationReg(e.target.value)}}></input>
      <button type='submit' onClick={register}> Register </button>
  </form>
    
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

