import React from 'react'
import front from './front.jpg'

function SinglePaff({props}) {
  return (
    <div class="feed-post">
      <img src={front}/>
      <div>
        <p class="content">{props.content}</p>
        <div class="post-info">
          <a>{props.owner}</a>
          <a class="paff-amount">{props.tips}</a>
          <label class="date">on {props.date}</label>
        </div>
      </div>
    </div>
  )
}

export default SinglePaff
