import React,{useState, useEffect} from 'react'
import front from './front.jpg'
import '../styles/navbar.css'

function Navbar({methods}) {
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
        <img src={front}/>
        <a href="./profil.html"><h3>viktorlazi</h3></a>
      </div>
      <div className="search-bar">
        <input value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" placeholder="search people..." />
      </div>
    </nav>
  )
}

export default Navbar
