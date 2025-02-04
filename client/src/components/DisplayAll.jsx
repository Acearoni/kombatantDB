import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const DisplayAll = ({ kombatants, setKombatants }) => {

  useEffect(() => {
    axios.get('http://localhost:8000/api/allKombatants')
      .then((res) => {
        console.log(res);
        setKombatants(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className='mt-5'>
      <h3>ALL KOMBATANTS</h3>
      <div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Name:</th>
              <th>Realm:</th>
              <th>Victims:</th>
              <th>Alive?</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              kombatants.map((kombatant) => (
                <tr key={kombatant._id}>
                  <td>{kombatant.name}</td>
                  <td>Realm: {kombatant.realm}</td>
                  <td>Number Of Victims: {kombatant.numberOfVictims}</td>
                  <td>Alive Status: {kombatant.isAlive ? "Yes" : "No"}</td>
                  <td>
                    <div className="d-flex justify-content-around">
                      <button className='btn btn-danger mr-1'>Delete</button>
                      <Link to={`/editKombatant/${kombatant._id}`}className='btn btn-primary mr-1'>Edit</Link>
                      <Link className='btn btn-secondary'>View</Link>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DisplayAll;