import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Link , Route, Routes, useNavigate} from 'react-router-dom';
import axios from 'axios'
import { Button } from './Button';
import './header.css';

//import Button from '@mui/material/Button';
//variant="contained"
const onLogout = () => {
  //window.location.href = "/logout"
}

const onLogin = () => {
  //window.location.href = "/login"
}
const onCreateAccount = () => {
  //window.location.href = "/register"
}

export const Header = ({user, onLogout}) => (
  <header>
    <div className="wrapper">
      <div>
        <Link to="/"><img width="42" height="42" src="https://i.imgur.com/sJvhHf0.png"></img></Link>
        {/* <img width="42" height="42" src="https://i.imgur.com/sJvhHf0.png"></img> */}
        <Link to="/"><h1>Roomies</h1></Link>
        {/* <h1>Roomies</h1> */}
      </div>
      <div>
        {user ? (
          <>
            <Link to="/"><button onClick={onLogout}>Log Out</button></Link>
            {/* <Link to="/"><button>Home</button></Link> */}
            </>
        ) : (
          <>
            {/* <Button size="small"  label="Log in" /> */}
            <Link to="/login"><button className='loginButton'>Log In</button></Link>
            <Link to="/register"><button className='signUpButton'>Sign up</button></Link>
            {/* <Button primary size="small" onClick={onCreateAccount} label="Sign up" /> */}
          </>
        )}
      </div>
    </div>
  </header>
);
//<Link to="/login">Log In</Link>
Header.propTypes = {
  user: PropTypes.shape({}),
  //onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  //onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
