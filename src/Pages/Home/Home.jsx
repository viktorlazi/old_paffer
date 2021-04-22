import React from 'react'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import './styles/home.css'

function Home() {
  const posts = [
    {
      id: 0,
      date: '21.4.2001.',
      content: 'Lorem ipsum dolor amet sit.',
      tips: '30PAffs',
      owner: 'viktorlazi'
    }
  ]
  return (
    <div className="home">
      <Navbar />
      <section>
        <Feed> 
          {posts}
        </Feed>
      </section>
    </div>
  )
}

export default Home
