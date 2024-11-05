import React from 'react'
import Example from './Components/Example'
import Buttons from './Components/Buttons'

const App = () => {
  return (
    <>
      <h1>Components</h1>
      <Example/>
      <Buttons/>
    </>

    // <div>
    //   <Example/>
    //   {Example()}
    // </div>
  )
}

export default App
