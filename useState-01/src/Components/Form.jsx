import React, { useState } from 'react'

const Form = () => {
    const[username, setUserName] = useState("")
    const[password, setPassword] = useState("")
    return (
        <>
        <div>
            <label htmlFor="username">Enter User Name : </label>
            <input onChange={(e) => {
                setUserName(e.target.value)
            }} type="text" id='username' className='' value={username} />
            <br />
            <label htmlFor="password">Enter Password : </label>
            <input onChange={(e) => {
                setPassword(e.target.value)
            }} type="text" id='password' className='password' value={password} />
        </div>
        <div>
            <p>User Name : {username}</p>
            <p>Password : {password}</p>
        </div>
        </>
    )
}

export default Form
