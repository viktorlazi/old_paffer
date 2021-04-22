import { makeAutoObservable } from "mobx"

class BlockchainData{
  contract
  account
  constructor(){
    makeAutoObservable(this)
  }
  setContract(x){
    this.contract = x
  }
  setAccount(x){
    this.account = x
  }
}
const blockchainData = new BlockchainData()
export default blockchainData