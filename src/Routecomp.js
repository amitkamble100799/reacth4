import React from 'react'
import Home from './Home'
import Contact from './Contact'
import Student from './Student'
import {Route,Routes} from 'react-router-dom'
import './App.css'
function Routecomp() {
  return (
    
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Student' element={<Student/>}/>
    <Route path='/Contact' element={<Contact/>}/>
   </Routes>

  )
}

export default Routecomp
