import React, {useState, useEffect} from "react";
import axios from "axios";

import './preferences.css';

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