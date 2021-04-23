import React from 'react'
import Identicon from 'react-identicons'

function SinglePaff({props}) {  
  const getDateString = (timestamp) =>{
    const date = new Date(timestamp*1000)
    const day = date.getDate()
    const month = date.getMonth()+1
    const year = date.getFullYear()
    const fullDate = day+'.'+month+'.'+year+'.'
    return fullDate
  }
  return (
    <div className="feed-post">
      <Identicon string={props.author} />
      <div>
        <p className="content">{props.content}</p>
        <div className="post-info">
          <a>{props.author}</a>
          <a className="paff-amount">{props.tipAmount}PAffs</a>
          <label className="date">on {getDateString(props.date)}</label>
        </div>
      </div>
    </div>
  )
}

export default SinglePaff
