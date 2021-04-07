import React from 'react'
import './styles/header.css'
import Identicon from 'identicon.js';

function Header({account}) {
  return (
    <header>
      <div className="logo">
        <h1>Paffer</h1>
      </div>
      <div className="userSearch">
        <input type="text" placeholder="search people"/>
      </div>
      <div className="profileData">
        <img
          width='30'
          height='30'
          src={`data:image/png;base64,${new Identicon(account).toString()}`}
        />
        
        <small style={{fontSize:'10px'}}>{account}</small>
      </div>
    </header>
  )
}

export default Header
