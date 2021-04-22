import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import PublishPaff from './components/PublishPaff'
import './styles/home.css'

function Home({contract, account}) {
  const [paffs, setPaffs]=useState([])
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
      <Navbar />
      <section>
        <PublishPaff methods={contract.methods} account={account} />
        <Feed> 
          {paffs}
        </Feed>
      </section>
    </div>
  )
}

export default Home
