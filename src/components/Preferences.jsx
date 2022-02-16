import React, {useState, useEffect} from "react";
import axios from "axios";

import './preferences.css';

export default function Preferences() {

  const [male, setMale] = useState('t');
  const [female, setFemale] = useState('t');
  const [other, setOther] = useState('t');
  const [petFriendly, setPetFriendly] = useState('f');

  const savePref = () => {
    console.log("male:", male)
    console.log("female: ", female)
    console.log("other: ", other)
    console.log("pet: ", petFriendly)
    // let isMale = null
    // if (genderReg === "Female") {
    //   isMale = false
    // } else if (genderReg === "Male") {
    //   isMale = true
    // }

    //console.log("isMale: ", isMale )

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

  return (

      <form onSubmit={event => event.preventDefault()} autoComplete="off" className='preferences'>
        <h1>Preferences</h1>
        <label>Male:
         <input type="text"  placeholder="Male: true" list="browsePref" name="Pref" onChange={(e) => {setMale(e.target.value)}}/>    
        </label>
        <datalist id="browsePref">
            <option value="t"/> 
            <option value="f"/> 
        </datalist>

        <label>Female:
         <input type="text"  placeholder="female: true" list="browsePref" name="Pref" onChange={(e) => {setFemale(e.target.value)}}/>    
        </label>
        <datalist id="browsePref">
            <option value="t"/> 
            <option value="f"/> 
        </datalist>

        <label>Other:
         <input type="text"  placeholder="other: false" list="browsePref" name="Pref" onChange={(e) => {setOther(e.target.value)}}/>    
        </label>
        <datalist id="browsePref">
            <option value="t"/> 
            <option value="f"/> 
        </datalist>

        <label>Pet Friendly:
         <input type="text"  placeholder="Pet friendly: false" list="browsePref" name="Pref" onChange={(e) => {setPetFriendly(e.target.value)}}/>    
        </label>
        <datalist id="browsePref">
            <option value="t"/> 
            <option value="f"/> 
        </datalist>
        <button type='submit' onClick={savePref}> Save Preferences </button>
      </form>
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