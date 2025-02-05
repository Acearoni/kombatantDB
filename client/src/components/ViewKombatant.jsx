import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewKombatant = (props) => {
    const { id } = useParams();

    const [kombatant, setKombatant] = useState({
        name: " ",
        realm: " ",
        numberOfVictims: 0,
        isAlive: false
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/findOneKombatant/${id}`)
            .then((res) => {
                console.log(res);
                setKombatant(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <div>
            <h1>Name: {kombatant.name}</h1>
            <h2>Realm: {kombatant.realm}</h2>
            <h3>Victims: {kombatant.numberOfVictims}</h3>
            {
                kombatant.isAlive ?
                <h3>Still Alive: Yes</h3>:
                <h3>Still Alive: No</h3>
            }
        </div>
    );
}

export default ViewKombatant;