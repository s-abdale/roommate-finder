import React from 'react';
// import PropTypes from 'prop-types';
import MatchItem from './MatchItem';
import tempUserData from './tempUserData';
import './matchList.css';
import { prepareUserData, getBasicInfo } from '../helpers/userHelpers';

/* 
  props
  match list needs to know: 
    an array of user data from http://localhost:3001/api/users
  should:
    list all matched users
      > create a function here that filters matches?
*/

export default function MatchList(props) {
  const userDataArray = prepareUserData(tempUserData);
  const basicInfo = getBasicInfo(userDataArray);
  const testUser = basicInfo[0];


  return (
    <section className='match-list'>
      <h1>List of matches</h1>
      <article className='match-items'>
        <MatchItem {...testUser}/>
        {/* delete the following after testing */}
        <MatchItem {...testUser}/>
        <MatchItem {...testUser}/>
        <MatchItem {...testUser}/>
        <MatchItem {...testUser}/>
        <MatchItem {...testUser}/>
        <MatchItem {...testUser}/>
        <MatchItem {...testUser}/>
        <MatchItem {...testUser}/>
        <MatchItem {...testUser}/>
        <MatchItem {...testUser}/>
        {/* <MatchItem {...testUser}/> */}
        {/* note: if list is odd, last item is centered. try grid instead of justify-content */}
      </article>
    </section>
  );
};