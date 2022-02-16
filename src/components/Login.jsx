import React, {useState} from 'react';
import axios from 'axios';
import './login.css';

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    console.log("email, password", email, password)
     axios.post("/api/login", {
      email: email,
      password: password,
     }).then((response) => {
        // if (response.data.message) {
        //   setLoginstatus(response.data.message)
        // } else {
        //   setLoginstatus(response.data[0].email)
        // }
       console.log(response.data)
     })
  }

  return (
      <form onSubmit={event => event.preventDefault()} autoComplete="off" className='login'>
        <h1>Login</h1>
        <input type='text' placeholder='Email...' onChange={(e) => {setEmail(e.target.value)}}></input>
        <input type='password' placeholder='Password...' onChange={(e) => {setPassword(e.target.value)}}></input>
        <button onClick={login}> Login </button>
      </form>
    
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