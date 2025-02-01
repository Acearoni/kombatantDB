import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayAll = ({kombatants, setKombatants}) => {

  useEffect(() => {
    axios.get('http://localhost:8000/api/allKombatants')
      .then((res) => {
        console.log(res);
        setKombatants(res.data)
      })
      .catch((err) =>{
        console.log(err)
      })
  }, [])

  return (
    <div>
      <h3>All Kombatants</h3>
    </div>
  );
}

export default DisplayAll;