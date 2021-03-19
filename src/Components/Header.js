import React from 'react'
import './styles/header.css'

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>Paffer</h1>
      </div>
      <div className="userSearch">
        <input type="text" placeholder="search people"/>
      </div>
      <div className="profileData">
        <img src="" alt="profile image" />
        <p>Profile name</p>
      </div>
    </header>
  )
}

export default Header
