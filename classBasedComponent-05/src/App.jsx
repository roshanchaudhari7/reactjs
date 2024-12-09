import React from 'react'
// import ClassComponent from './Components/ClassComponent'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ClassComponent from './Components/ClassComponent'
import FunctionalComponent from './Components/FunctionalComponent'
import Home from './Components/Home'
import ErrorComponent from './Components/ErrorComponent'
const App = () => {
  return (
    // <div>
    //   <ClassComponent />
    // </div>

    <BrowserRouter>
      <div style={{margin: "10px", padding: "10px"}}>
        <Link to='/class' style={{textDecoration: "none", color: "blue", fontSize: "18px", padding: "10px", border: "1px solid blue", borderRadius: "5px", margin:"10px"}}>
        Class Based Components
        </Link>
        <Link to='/fun' style={{ textDecoration: "none", color: "blue", fontSize: "18px", padding: "10px", border: "1px solid blue", borderRadius: "5px" }}>
        Functional Components
        </Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/class' element={<ClassComponent/>} />
        <Route path='/fun' element={<FunctionalComponent/>} />
        <Route path='/*' element={<ErrorComponent />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
