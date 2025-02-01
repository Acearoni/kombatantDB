import React, { useState } from 'react';
import axios from 'axios';
import DisplayAll from '../components/DisplayAll';
import KombatForm from '../components/KombatForm';

const ComponentName = (props) => {
  const [kombatants, setKombatants] = useState([]);
  return (
    <div>
        <KombatForm kombatants={kombatants} setKombatants={setKombatants }/>
        <DisplayAll kombatants={kombatants} setKombatants={setKombatants }/>
    </div>
  );
}

export default ComponentName;