import React, {useState, useEffect} from "react";
import axios from "axios";
import MatchItem from './MatchItem';
import './matchList.css';
import { prepareUserData, getBasicInfo } from '../helpers/userHelpers';



export default function MatchList(props) {
  //const {users} = props;
  //console.log(props);

  const [matches, setMatches] = useState([])
  
  useEffect(() => {
    axios.get("/api/matches", {
    })
    .then(response => {
      const allProfiles = response.data.profile
      // console.log(profileData)
      console.log("inside: ", allProfiles)
      setMatches(allProfiles)
    })
  }, [])
  //console.log("outside: ", allProfiles)


  const parsedMatchListItem = matches.map((singleMatch) => {
    return (
      <MatchItem
        id = {singleMatch.id}
        first_name = {singleMatch.first_name}
        last_name = {singleMatch.last_name}
        user_image = {singleMatch.user_image}
      />
    );
  })


  return (
    <section className='match-list'>
      <h1>List of matches</h1>
      <article className='match-items'>
        {parsedMatchListItem}
      </article>
    </section>
  );
};