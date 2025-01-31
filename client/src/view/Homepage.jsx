import React, { useState } from 'react';
import axios from 'axios';
import DisplayAll from '../components/DisplayAll';
import KombatForm from '../components/KombatForm';

const ComponentName = (props) => {
  return (
    <div>
        <KombatForm/>
        <DisplayAll/>
    </div>
  );
}

export default ComponentName;