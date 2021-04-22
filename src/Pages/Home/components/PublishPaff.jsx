import React, {useState} from 'react'
import '../styles/publishPaff.css'

function PublishPaff({methods, account}) {
  const [content, setContent] = useState()
  const uploadPaff = async () =>{
    if(validateContent(content)){
      methods
      .uploadPaff('asdsadasd', content, '20.4.2021.')
      .send({ from: account })
      .on('transactionHash', (hash)=>{
        //success
      })  
    }
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
      <input defaultValue='' onChange={(e)=>{setContent(e.target.value)}} type="text" placeholder="Create a Paff"/>
      <button onClick={uploadPaff}>publish</button>
    </div>
  )
}

export default PublishPaff
