import React from 'react'
import front from './front.jpg'

function SinglePaff({props}) {
  return (
    <div className="feed-post">
      <img src={front}/>
      <div>
        <p className="content">{props.content}</p>
        <div className="post-info">
          <a>{props.owner}</a>
          <a className="paff-amount">{props.tipAmount}PAffs</a>
          <label className="date">on {props.date}</label>
        </div>
      </div>
    </div>
  )
}

export default SinglePaff
