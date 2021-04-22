import { makeAutoObservable } from "mobx"

class BlockchainData{
  contract
  constructor(){
    makeAutoObservable(this)
  }
  setContract(x){
    this.contract = x
  }
}
const blockchainData = new BlockchainData()
export default blockchainData