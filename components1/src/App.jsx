import React from 'react'
import Example, {FirstExample, SecondExample, ThiredExample} from './Components/Example'
import Buttons from './Components/Buttons'
import Sum from './Components/Sum'
const App = () => {
  return (
    <>
      <h1>Components</h1>
      <Example name={"Roshan"} age={22} city={"Dhule"}/>
      <Example name={"Mohit"} age={23} city={"Dhule"} />
      <Example name={"Kunal"} age={22} city={"Dhule"} />
      <FirstExample />
      <SecondExample />
      {ThiredExample()}
      <Buttons text={"Increment"} color={"red"}/>
      <Buttons text={"Decrement"} color={"yellow"}/>
      <Buttons text={"Reset"} color={"green"}/>
      <Sum num1={23} num2={27}/>
    </>

    // <div>
    //   <Example/>
    //   {Example()}
    // </div>
  )
}

export default App


