import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import PublishPaff from './components/PublishPaff'
import './styles/home.css'
import BlockchainData from '../../Stores/BlockchainData'

function Home() {
  const [paffs, setPaffs]=useState([])
  const [paffCount, setPaffCount]=useState()
  const posts = [
    {
      id: 0,
      date: '21.4.2001.',
      content: 'Lorem ipsum dolor amet sit.',
      tips: '30PAffs',
      owner: 'viktorlazi'
    }
  ]
  useEffect(async()=>{
    setPaffCount(await BlockchainData.contract.methods.paffCount().call())
    for(let i = 1; i <=  paffCount; i++){
      const paff = await BlockchainData.contract.methods.paffs(i).call()
      setPaffs([...paffs, paff])
    }
  }, [])
  return (
    <div className="home">
      <Navbar />
      <section>
        <PublishPaff />
        <Feed> 
          {paffs}
        </Feed>
      </section>
    </div>
  )
}

export default Home
