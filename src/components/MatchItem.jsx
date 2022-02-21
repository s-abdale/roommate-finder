import React, {useState, useEffect} from "react";
import axios from "axios";
import './matchItem.css';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';

export default function MatchItem(props) {
  const {id, first_name, last_name, user_image} = props;

  return (
    <Card 
      className='match-item'
      onClick={props.onClick}
    >

      <CardMedia src={user_image} className='small-pfp' component="img"/>

      <span className="user-name-matchItem">{first_name} {last_name}</span>

    </Card>
  );
};