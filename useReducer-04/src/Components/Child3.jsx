import React, { useContext } from 'react'
import { UserContext } from '../App'

const Child3 = () => {
    // useContext
    const {fname, lname} = useContext(UserContext);
    return (
        <div>
            {
                fname.length ? (
                    <h1>My name is: {fname + " " + lname}</h1>
                ) : ""
            }
        </div>
    )
}

export default Child3
