import React,{useState} from 'react'
import Identicon from 'react-identicons'
import '../styles/navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  const [input, setInput]=useState('');
  return (
    <nav>
      <div className="profile-icon">
      <Identicon string={'account'} />
        <Link to={`./profile/${'account'}`}><h3>{'account'.substring(0, 12)}</h3></Link>
      </div>
      <div className="search-bar">
        <input value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" placeholder="search people..." />
      </div>
    </nav>
  )
}

export default Navbar
