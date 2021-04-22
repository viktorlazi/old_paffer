import React, {useState} from 'react'
import '../styles/publishPaff.css'
import BlockchainData from '../../../Stores/BlockchainData'

function PublishPaff() {
  const [content, setContent] = useState()
  const uploadPaff = async () =>{
    if(validateContent(content)){
      BlockchainData.contract.methods
      .uploadPaff('abc', content)
      .send({ from: BlockchainData.account })
      .on('transactionHash', (hash)=>{
        //success
      })  
    }
  }
  const validateContent = (ctnt) =>{
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
