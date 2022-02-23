import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Link , Route, Routes, useNavigate} from 'react-router-dom';
import './login.css';
import { FormGroup } from '@mui/material';

export default function Login({login}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='loginDiv' style={{ backgroundImage: `url("https://i.gifer.com/origin/11/112ad705e340107c20d9070f4ab26a03_w200.gif")`}}>
    <form onSubmit={event => event.preventDefault()} autoComplete="off" className='login'>
        {/* <p style="background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/221808/sky.jpg');"></p> */}

        <h2 className="LoginHeading">Login</h2>
        
        <div className="form-group-email">
          {/* <label>Email</label> */}
          <input type='text'  className="form-control" placeholder='Enter email' onChange={(e) => {setEmail(e.target.value)}}></input>
        </div>
        
        <div className="form-group-password">  
          {/* <label>Password</label> */}
          <input type='password'  className="form-control" placeholder='Enter Password' onChange={(e) => {setPassword(e.target.value)}}></input>
        </div>

        
        
         <div className='LoginButtonDiv'>
        <Link to="/">
          <button className="btn btn-dark btn-lg btn-block" onClick={() => login(email, password)}>Log In</button>
        </Link>
         </div>
          {/* <p className="forgot-password text-right">Forgot <a href="#">password?</a></p> */}

      </form>
      </div>
    
  );
};

//  In app.post('/login)
//    const email = req.body.email
//   const password = req.body.password

  //Try sending error message
  // db.query(
  //   "SELECT * FROM users WHERE .....",
  //   [email, password],

  //   (err, result) => {
  //     if (err) {
  //       res.send({err: err})
  //     }
  //     if (result.length > 0) {
  //       res.send(result);
  //     } else {
  //       res.send({message: "Wrong email/password combination!"})
  //     }
  //   }
  // )
  //to make error message show on html
  //const [loginstatus, setLoginstatus] = useState("") in App.js

  // <Login setEmail={setEmail} setPassword={setPassword} login={login}/>