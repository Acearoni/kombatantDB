import React, { useState } from 'react';
import axios from 'axios';
import DisplayAll from '../components/DisplayAll';
import KombatForm from '../components/KombatForm';

const Homepage = (props) => {
  //setting the props to be [kombatants, setKombatants], props is Blank array of kombatants, and function of setting them.
  const [kombatants, setKombatants] = useState([]);
  return (
    <div>
        {/* sending the props to the children in order to be accessed. */}
        <KombatForm kombatants={kombatants} setKombatants={setKombatants }/>
        <DisplayAll kombatants={kombatants} setKombatants={setKombatants }/>
    </div>
  );
}

export default Homepage;