import React, {useState} from 'react'
import '../styles/publishPaff.css'

function PublishPaff({methods, account}) {
  const [content, setContent] = useState()
  const uploadPaff = async () =>{
    if(validateContent(content)){
      methods
      .uploadPaff('asdsadasd', content)
      .send({ from: account })
      .on('transactionHash', (hash)=>{
        console.log(hash)
      })  
    }
    setContent('')
  }
  const validateContent = (ctnt) =>{
    if(!ctnt){
      return false
    }
    if(ctnt.length>150 || ctnt.length <1){
      return false
    }
    return true
  }
  return (
    <div className="publish-post">
      <input value={content} onChange={(e)=>{setContent(e.target.value)}} type="text" placeholder="Create a Paff"/>
      <button onClick={uploadPaff}>publish</button>
    </div>
  )
}

export default PublishPaff
