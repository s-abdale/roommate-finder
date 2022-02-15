import React from 'react';

import './preferences.css';

export default function Preferences(props) {

  return ("Work")
};
      // <form onSubmit={event => event.preventDefault()} autoComplete="off" className='preferences'>
      //   <h1>Preferences</h1>
      //   <label>Select:
      //    <input type="text"  placeholder="Gender" list="browsers" name="genderReg" onChange={(e) => {setGenderReg(e.target.value)}}/>    
      //   </label>
      //   <datalist id="browsers">
      //       <option value="Male"/> 
      //       <option value="Female"/> 
      //       <option value="They/Them"/> 
      //       {/* <option value="Prefer not to say"/> */}
      //   </datalist>
      // </form

//Preferences 
//- checkbox/dropdown

//is_Male? store like this in database. 
//choose to remove x
//[x] Male --> T default T
//[x] Female ---> T default T (uncheck becomes false)
//[x] Other ---> T
//[ ] pet_friendly --> default F 