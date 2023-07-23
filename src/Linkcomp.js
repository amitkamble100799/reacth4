import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
function Linkcomp() {
  return (
  <div className='lnk'>
  <Link className='l' to='/'>Home</Link>
  
  <Link className='l'  to='/Student'>Student</Link>

  <Link className='l'  to='/Contact'>Contact Us</Link>
  </div>
  )
}

export default Linkcomp