import React, {useState, useEffect} from "react";
import axios from "axios";
import MatchItem from './MatchItem';
import './matchList.css';
import { prepareUserData, getBasicInfo } from '../helpers/userHelpers';
import { useNavigate } from "react-router-dom";
// import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';




export default function MatchList() {
  //const {users} = props;
  //console.log(props);

  const [matches, setMatches] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/matches", {
    })
    .then(response => {
      const allProfiles = response.data.profile
      // console.log(profileData)
      // console.log("inside: ", allProfiles)
      setMatches(allProfiles)
    })
  }, [])
  //console.log("outside: ", allProfiles)


  const parsedMatchListItem = matches.map((singleMatch) => {
    // console.log(singleMatch.id);
    return (
      <MatchItem
        key = {`match-item-${singleMatch.id}`}
        id = {singleMatch.id}
        first_name = {singleMatch.first_name}
        last_name = {singleMatch.last_name}
        user_image = {singleMatch.user_image}
        onClick = {() => navigate(`/detailed-profile/${singleMatch.id}`)}
      />
    );
  })


  return (
    <section className='match-list'>
      <h1>List of matches</h1>
      {/* <Button variant="contained">Hello World</Button> */}
      <article className='match-items'>
        {parsedMatchListItem}
      </article>
    </section>
  );
};