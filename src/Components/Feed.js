import React from 'react'
import Paff from './Paff'
import SortBy from './SortBy'
import './styles/feed.css'

function Feed() {
  return (
    <ul className="feed">
      <SortBy />
      <Paff />
      <Paff />
      <Paff />
    </ul>
  )
}

export default Feed
