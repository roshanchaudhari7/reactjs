import React, { createContext, useState } from 'react'
import Child1 from './Components/Child1'
// import Counter from './Components/Counter'

// createContext()
export const UserContext = createContext();
const App = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname]= useState("")
  return (
    // <div>
    //   <Counter />
    // </div>

    <>
      <UserContext.Provider value={{fname, lname}}>

        <label htmlFor="fname">Enter first name : </label>
        <input type="text" id='fname' onChange={(e) => {
          setFname(e.target.value)
        }} value={fname} />
        <br /> <br />
        <label htmlFor="lname">Enter last name : </label>
        <input type="text" id='lname' onChange={(e) => {
          setLname(e.target.value)
        }} value={lname} />
        <Child1 />

      </UserContext.Provider>
    </>
  )
}

export default App
