import React from 'react'

function Feed({props}) {
  return (
    <div className="feed">
      {
        props.length ?
        props.children
        :
        <h1>no paffs</h1>
      }
    </div>
  )
}

export default Feed
