import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import Counter from './Components/Counter'
import Profile from './Components/Profile'
import Data from './Components/Data'

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#94fcd9', overflow: 'hidden', padding: '10px 20px' }}>
        <Link to="/counter" style={{ backgroundColor: 'orange', textDecoration: 'none', padding: '8px 16px', fontSize: '18px', float: 'left' }}>
          Counter
        </Link>
        <Link to="/profile" style={{ backgroundColor: 'orange', textDecoration: 'none', padding: '8px 16px', fontSize: '18px', float: 'left', marginLeft: '10px'}}>
          Profile
        </Link>
        <Link to="/data" style={{ backgroundColor: 'orange', textDecoration: 'none', padding: '8px 16px', fontSize: '18px', float: 'left', marginLeft: '10px'}}>
          Data
        </Link>
      </div>
      <div>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/data' element={<Data />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
