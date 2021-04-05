import React from 'react'
import CreatePaff from '../../Components/CreatePaff'
import Feed from '../../Components/Feed'
import './styles/home.css'

function Home() {
  return (
    <div className="home">
      <CreatePaff/>
      <Feed/>
    </div>
  )
}

export default Home
