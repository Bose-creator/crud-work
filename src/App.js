import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Top from './fontone/Top'
import Middle from './fontone/Middle'
import Down from './fontone/Down'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Top/>}/>
        <Route path='/down' element = {<Down/>}/>
        <Route path='/middle' element = {<Middle/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
