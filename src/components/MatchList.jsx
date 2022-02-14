import React from 'react';
import MatchItem from './MatchItem';
import './matchList.css';
import { prepareUserData, getBasicInfo } from '../helpers/userHelpers';



export default function MatchList(props) {
  const {users} = props;
  console.log(props);

  const parsedMatchListItem = users.map((singleMatch) => {
    return (
      <MatchItem
        id = {singleMatch.id}
        first_name = {singleMatch.first_name}
        last_name = {singleMatch.last_name}
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