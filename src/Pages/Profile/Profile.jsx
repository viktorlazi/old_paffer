import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import './styles/home.css'
import {useParams} from 'react-router-dom'

function Profile({contract}) {
  const [paffs, setPaffs]=useState([])
  const params = useParams()
  useEffect(async()=>{
    const paffCount=await contract.methods.paffCount().call()
    setPaffs([])
    for(let i = 1; i <=  paffCount; i++){
      const paff = await contract.methods.paffs(i).call()
      setPaffs(paffs=>[...paffs, paff])
    }
  }, [])
  return (
    <div className="home">
      <Navbar methods={contract.methods} />
      <section>
        <Feed> 
          {paffs.filter(e=>{return e.author===params.address})}
        </Feed>
      </section>
    </div>
  )
}

export default Profile