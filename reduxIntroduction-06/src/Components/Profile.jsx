import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateEmail } from '../redux/actions/profileActions'

const Profile = () => {
    const[emailState, setEmailState] = useState("")
    const { email } = useSelector((state) => state.profile)
    const dispatch = useDispatch()
  return (
      <div>
        {/* <input type="text" value={email} onChange={(e) => {
            dispatch(updateEmail(e.target.value))
        }} /> <br /> */}
        
        <input style={{marginTop: '20px', marginRight: '20px'}} type="text" value={emailState} onChange={(e) => {
            setEmailState(e.target.value)
        }} />
        <button onClick={() => {
            dispatch(updateEmail(emailState))
        }}>Update Email</button>
      <h2>Email is : {email}</h2>
    </div>
  )
}

export default Profile
