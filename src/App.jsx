import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/Movies' element={<Movies />
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App