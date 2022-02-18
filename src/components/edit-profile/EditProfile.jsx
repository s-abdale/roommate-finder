import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../profile.css';
// import {useNavigate} from 'react-router-dom';




export default function EditProfile(props){

  // const navigate = useNavigate();
  // console.log(navigate);

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate('/about');
  //     // navigate(-1); // go back
  //   }, 3000);
  // }, [navigate]);


  const [firstnameEdit, setFirstnameEdit] = useState('');
  const [lastnameEdit, setLastnameEdit] = useState('');
  // const [usernameEdit, setUsernameEdit] = useState('');
  const [emailEdit, setEmailEdit] = useState('');
  // const [passwordEdit, setPasswordEdit] = useState('');
  const [phonenumberEdit, setPhonenumberEdit] = useState('');
  const [genderEdit, setGenderEdit] = useState(null);
  const [contactinfoEdit, setContactinfoEdit] = useState('');
  const [userimageEdit, setUserimageEdit] = useState('');
  const [bioEdit, setBioEdit] = useState('');
  const [locationEdit, setLocationEdit] = useState('');


  const edit = () => {
    // process gender
    let isMale = null
    if (genderEdit === "Female") {
      isMale = false
    } else if (genderEdit === "Male") {
      isMale = true
    }
    // post new results to db
    axios.post("/api/user/profile", {
      first_name: firstnameEdit,
      last_name: lastnameEdit,
      // userName: usernameEdit,
      email: emailEdit,
      phone_number: phonenumberEdit,
      gender: isMale,
      contact_info: contactinfoEdit,
      bio: bioEdit,
      user_image: userimageEdit,
      location: locationEdit,
    }).then((response) => {
      console.log(response.data)
      //redirect to new page.

      // response.redirect("/profile")
    })
  }

  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`/api/user/profile/${props.userID}`, {
    })
    .then(response => {
      const profileData = response.data.profile[0];
      console.log(profileData);
      setFirstnameEdit(profileData.first_name);
      setLastnameEdit(profileData.last_name);
      setEmailEdit(profileData.email);
      setPhonenumberEdit(profileData.phone_number);
      setGenderEdit(profileData.gender);
      setContactinfoEdit(profileData.contact_info);
      setBioEdit(profileData.bio);

      setUserimageEdit(profileData.user_image);
      setLocationEdit(profileData.location);
    })
  }, [])

/*
{"profile":[{"first_name":"Mariah","last_name":"Carey","user_name":"MCarey","phone_number":"1020304050","email":"mcarey@gmail.com","contact_info":"@mariahCarey","user_image":"https://i.imgur.com/eBffHEo.jpeg","bio":"this is a bio","location":"Beverly Hills","gender":false}]}
*/



  return (
    <section className='main-body'>
      <h3 className='page-header'>EDIT PROFILE</h3>

      <form onSubmit={event => event.preventDefault()} autoComplete="off" className='profile-text'>

        <label>First Name</label>
        <input type='text' value={firstnameEdit}name="firstnameEdit" onChange={(e) => {setFirstnameEdit(e.target.value)}}></input>
        <br></br>

        <label>Last Name</label>
        <input type='text'  value={lastnameEdit} name="lastnameEdit"onChange={(e) => {setLastnameEdit(e.target.value)}} ></input>
        <br></br>

        {/* <label>User Name</label>
        <input type='text' placeholder='Username' name="usernameEdit" onChange={(e) => {setUsernameEdit(e.target.value)}} ></input>
        <br></br> */}

        <label>Email</label>
        <input type='email' value={emailEdit} name="emailEdit" onChange={(e) => {setEmailEdit(e.target.value)}}></input>
        <br></br>

        
        <label>Phone Number</label>
        <input type='text' value={phonenumberEdit}  name="phonenumberEdit" onChange={(e) => {setPhonenumberEdit(e.target.value)}} ></input>
        <br></br>


        {/* change to radio? */}
        <label>Gender:
          <input type="text" value={genderEdit}  placeholder="Gender" list="browsers" name="genderEdit" onChange={(e) => {setGenderEdit(e.target.value)}}/>    
        </label>
          <datalist id="browsers">
            <option value="Male"/> 
            <option value="Female"/> 
            <option value="They/Them"/> 
            {/* <option value="Prefer not to say"/> */}
          </datalist>
          <br></br>

          {/* <label>Gender</label>
          <input type='text' placeholder='Select Gender' onChange={(e) => {setGenderEdit(e.target.value)}} ></input>
          <br></br> */}

          <label>Contact Info</label>
          <input type='text' value={contactinfoEdit} name="contactinfoEdit" onChange={(e) => {setContactinfoEdit(e.target.value)}}></input>
          <br></br>


          <label>Bio</label>
          <input type='text' value={bioEdit}  name="bioEdit" onChange={(e) => {setBioEdit(e.target.value)}}></input>
          <br></br>

          /* ---------------------------------------- */

          <label>location</label>
          <input value={locationEdit}  name="locationEdit" onChange={(e) => {setLocationEdit(e.target.value)}}></input>
          <br></br>

          <label>image</label>
          <input value={`${userimageEdit}`}  name="userimageEdit" onChange={(e) => {setUserimageEdit(e.target.value)}}></input>
          <br></br>

          
          <button type='submit' onClick={edit}> Update </button>






        </form>



        
    </section>
  );
};
