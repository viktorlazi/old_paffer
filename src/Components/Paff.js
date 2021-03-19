import React from 'react'
import './styles/paff.css'

function Paff() {
  return (
    <li className="paff__post">
      <p className="paff__post__content">Paff content... lorem ipsum dolores ...</p>
      <div>
        <a className="paff__post__author">Author</a>
        <small className="paff__post__tip__amount">22PAFF</small>
        <button className="paff__post__tip__button">tip post</button>
      </div>
    </li>
  )
}

export default Paff
