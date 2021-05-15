import front from './front.jpg';
import '../styles/navbar.css';
import {useState} from 'react';

function Navbar() {
  const [input, setInput]=useState('')
  return (
    <nav>
      <div className="profile-icon">
        <img src={front}/>
        <a href="./profile"><h3>viktorlazi</h3></a>
      </div>
      <div className="search-bar">
        <input value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" placeholder="search people..." />
      </div>
    </nav>
  )
}

export default Navbar
