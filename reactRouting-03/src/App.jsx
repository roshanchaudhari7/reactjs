import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import CompA from './Components/CompA'
import CompB from './Components/CompB'
import CompC from './Components/CompC'
import CompD from './Components/CompD'
import Home from './Components/Home'
import Example from './Components/Example'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div style={{ backgroundColor: '#94fcd9', overflow: 'hidden', padding: '10px 20px' }}>
          <Link to="/compa" style={{ textDecoration: 'none', padding: '8px 16px', fontSize: '18px', float: 'left' }}>
            CompA
          </Link>
          <Link to="/compb" style={{ textDecoration: 'none', padding: '8px 16px', fontSize: '18px', float: 'left' }}>
            CompB
          </Link>
          <Link to="/compc" style={{ textDecoration: 'none', padding: '8px 16px', fontSize: '18px', float: 'left' }}>
            CompC
          </Link>
          <Link to="/compd" style={{ textDecoration: 'none', padding: '8px 16px', fontSize: '18px', float: 'left' }}>
            CompD
          </Link>
          <Link to="/example" style={{ textDecoration: 'none', padding: '8px 16px', fontSize: '18px', float: 'left' }}>
            Example
          </Link>
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/compa' element={<CompA />} />
            <Route path='/compb' element={<CompB />} />
            <Route path='/compc' element={<CompC />} />
            <Route path='/compd' element={<CompD />} />
            <Route path='/example' element={<Example/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
