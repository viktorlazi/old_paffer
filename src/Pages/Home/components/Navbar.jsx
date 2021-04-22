import React from 'react'
import front from './front.jpg'
import '../styles/navbar.css'

function Navbar() {
  return (
    <nav>
      <div class="profile-icon">
        <img src={front}/>
        <a href="./profil.html"><h3>viktorlazi</h3></a>
      </div>
      <div class="search-bar">
        <input type="text" placeholder="search people..." />
      </div>
    </nav>
  )
}

export default Navbar
