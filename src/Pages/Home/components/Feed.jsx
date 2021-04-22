import React from 'react'
import SinglePaff from './SinglePaff'

function Feed(props) {
  return (
    <div className="feed">
      {
        props.children.length ?
        props.children.map((e)=>{
          return <SinglePaff props={e} />
        })
        :
        <h1>no paffs to display</h1>
      }
    </div>
  )
}

export default Feed
