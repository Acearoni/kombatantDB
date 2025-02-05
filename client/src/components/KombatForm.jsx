import React, { useState } from 'react';
import axios from 'axios';

const KombatForm = ({kombatants, setKombatants}) => {
    //props is destructured to prevent having to use props.something repeatedly
    //creating a single instance of a kombatant and setting it's default state.
    const [kombatant, setKombatant] = useState({
        name: " ",
        realm: " ",
        numberOfVictims: 0,
        isAlive: false
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        if (e.target.type === 'checkbox') {
            //setKombatant to everything within kombatant, change isAlive to checked
            setKombatant({ ...kombatant, isAlive: e.target.checked })
        }
        else {
            //set to everything within kombatant, the name="name" matches the name, which then matches within the schema
            setKombatant({ ...kombatant, [e.target.name]: e.target.value })
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        //using the backend createKombatant api call, the data we are sending "kombatant"
        axios.post('http://localhost:8000/api/createKombatant', kombatant)
            //res(response) which is the http, then it setsKombatants
            .then((res) => {
                console.log(res)
                setKombatants([...kombatants, res.data])
                setKombatant({
                    name: " ",
                    realm: " ",
                    numberOfVictims: 0,
                    isAlive: false
                })
            })
            .catch((err) => {
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div>
            <h1>Add A Kombatant</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={kombatant.name} onChange={changeHandler} />
                    {
                        errors.name ?
                        <p>{errors.name.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Realm:</label>
                    <input type="text" name="realm" value={kombatant.realm} onChange={changeHandler} />
                    {
                        errors.realm ?
                        <p>{errors.realm.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Number Of Victims:</label>
                    <input type="number" name="numberOfVictims" value={kombatant.numberOfVictims} onChange={changeHandler} />
                    {
                        errors.numberOfVictims ?
                        <p>{errors.numberOfVictims.message}</p>:
                        null
                    }
                </div>
                <div>
                    <label>Is Kombatant Still Alive?</label>
                    <input type="checkbox" name='isAlive' checked={kombatant.isAlive} onChange={changeHandler} />
                    {
                        errors.isAlive ?
                        <p>{errors.isAlive.message}</p>:
                        null
                    }
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default KombatForm;