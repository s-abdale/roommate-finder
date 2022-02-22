import React, {useState, useEffect} from "react";
import axios from "axios";
import {BrowserRouter as Router, Link , Route, Routes, useNavigate} from 'react-router-dom';
import './preferences.css';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';



export default function Preferences() {

  const [male, setMale] = useState('');
  const [female, setFemale] = useState('');
  const [other, setOther] = useState('');
  const [petFriendly, setPetFriendly] = useState('');

  useEffect(() => {
    axios.get(`/api/user/preferences`, {
    })
    .then(response => {
      const preferencesData = response.data.preferences[0];
      console.log(preferencesData);
      setMale(preferencesData.male)
      setFemale(preferencesData.female)
      setOther(preferencesData.other)
      setPetFriendly(preferencesData.pet_friendly)
    })
  }, [])

  console.log("set male:", setMale)
  console.log("set female: ", setFemale)
  console.log("set other: ", setOther)
  console.log("set pet: ", setPetFriendly)

  const savePref = () => {
    console.log("male:", male)
    console.log("female: ", female)
    console.log("other: ", other)
    console.log("pet: ", petFriendly)

    axios.post("/api/user/preferences", {
      male: male,
      female: female,
      other: other,
      pet_friendly: petFriendly
      //gender: isMale,
    }).then((response) => {
      console.log(response.data)
      //redirect to new page.
    })
  }
  //style={{ backgroundImage: `url("https://64.media.tumblr.com/b94abb1a1268936be44dab027a3e9db6/tumblr_oer793zz1Z1ufvrkqo1_540.gifv")`}}
//<h1 className="prefHeading">Select preferences</h1
  return (

    <div className="preferencesDiv" >
    <form onSubmit={event => event.preventDefault()} autoComplete="off" className='preferences'>
      {/* <h1>Preferences</h1> */}

      <FormControl 
        component="fieldset" 
        variant="standard"
      >
        <FormLabel component="legend">Select preferences</FormLabel>

        <FormGroup>
          
          <FormControlLabel
            className="maleCheckbox"
            control={
              <Checkbox 
                checked={male} 
                onChange={(e) => {setMale(e.target.checked)}}
                name="Male" 
              />
            }
            label="Male"
          />

          <FormControlLabel
            className="femaleCheckbox"
            control={
              <Checkbox 
                checked={female} 
                onChange={(e) => {setFemale(e.target.checked)}}
                name="Female" 
              />
            }
            label="Female"
          />

          <FormControlLabel
            className="otherCheckbox"
            control={
              <Checkbox 
                checked={other} 
                onChange={(e) => {setOther(e.target.checked)}}
                name="They/Them" 
              />
            }
            label="They/Them"
          />

          <FormControlLabel
            className="petCheckbox"
            control={
              <Checkbox 
                // checked={petFriendly} 
                onChange={(e) => {setPetFriendly(e.target.checked)}}
                // onChange={(e) => {console.log(e.target.checked)}}
                name="PetFriendly" 
              />
            }
            label="Pet friendly"
          />
        </FormGroup>
      </FormControl>
      
      <br/>
      <br/>

      {/* <label>Male:
        <input type="text"  value={male} list="browseMale"  name="Pref" onChange={(e) => {setMale(e.target.value)}}/>    
      </label>
      <datalist id="browseMale">
          <option value="true"/> 
          <option value="false"/> 
      </datalist>

      <label>Female:
        <input type="text"  value={female} list="browseFemale" name="Pref" onChange={(e) => {setFemale(e.target.value)}}/>    
      </label>
      <datalist id="browseFemale">
          <option value="true"/> 
          <option value="false"/> 
      </datalist>

      <label>Other:
        <input type="text" value={other}  list="browseOther" name="Pref" onChange={(e) => {setOther(e.target.value)}}/>    
      </label>
      <datalist id="browseOther">
          <option value="true"/> 
          <option value="false"/> 
      </datalist>

      <label>Pet Friendly:
        <input type="text" value={petFriendly} list="browsePet" name="Pref" onChange={(e) => {setPetFriendly(e.target.value)}}/>    
      </label>
      <datalist id="browsePet">
          <option value="true"/> 
          <option value="false"/> 
      </datalist> */}
      <Link to="/profile">
        <button type='submit' onClick={savePref}> Save Preferences </button>
      </Link>
      
    </form>
    </div>
  )
};

//Preferences 
//- checkbox/dropdown
//

//Select - DROP DOWN argument for default in component libraries - chakra.ui antdesign
//is_Male? store like this in database. 
//choose to remove x
//[] Male --> T default T
//[] Female ---> T default T (uncheck becomes false)
//[] Other ---> T
//[] pet_friendly --> default F 