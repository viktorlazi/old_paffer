import React,{useState, useEffect} from 'react'
import Identicon from 'react-identicons'
import '../styles/navbar.css'
import {Link} from 'react-router-dom'

function Navbar({methods, account}) {
  const [input, setInput]=useState('')
  /*
  BLOCK EXPLORER
  const getResults = async () =>{
    console.log(input)
    const paffCount = await methods.paffCount().call()
    let paffs = []
    for(let i = 1; i<=paffCount; i++){
      paffs.push(await methods.paffs(i).call())
    }
    console.log(paffs.filter((e)=>{
      return e.author.includes(input) 
      || e.content.includes(input)
    }))
  }
  useEffect(()=>{
    getResults()
  },[input])
  */
  return (
    <nav>
      <div className="profile-icon">
      <Identicon string={account} />
        <Link to={`./profile/${account}`}><h3>{account.substring(0, 12)}</h3></Link>
      </div>
      <div className="search-bar">
        <input value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" placeholder="search people..." />
      </div>
    </nav>
  )
}

export default Navbar
