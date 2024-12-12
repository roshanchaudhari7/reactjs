import React from 'react'
import CompParent from './Components/CompParent'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/counter">Counter</Link>
      </div>
      <div>
        <Routes >
          <Route path='/' element={<CompParent />}/>
          <Route path='/counter' element={<CompParent />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
