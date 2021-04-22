import './App.css';
import Paffer from './abis/Paffer.json'
import {useEffect, useState} from 'react'
import Web3 from 'web3'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import BlockchainData from './Stores/BlockchainData'
import {observer} from 'mobx-react'

function App(){  
  const [paffer, setPaffer] = useState(null)

  const loadWeb3 = async () =>{
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    }else{
      window.alert('non-ethereum browser detected. Condider trying MetaMask.')
    }
  }
  const loadBlockchainData = async () =>{
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    //setAccount(accounts[0])

    const networkId = await web3.eth.net.getId()
    const networkData = Paffer.networks[networkId]
    if(networkData){
      const paffer = new web3.eth.Contract(Paffer.abi, networkData.address)
      BlockchainData.contract = paffer
      console.log(await paffer.methods.paffCount().call())
      
      paffer.methods
      .uploadPaff('abc', 'aloo')
      .send({ from: '0xf57466889b1551215a08D72E85876b9BB27354ED' })
      .on('transactionHash', (hash)=>{

      })   
      //uploadPaff(string memory _paffHash, string memory _content)
      console.log(await paffer.methods.paffCount().call())
    }else{
      window.alert('paffer not deployed to network')
    }
  }  
  const load = async () =>{
    await loadWeb3()
    await loadBlockchainData()
  }
  useEffect(() => {
    load()
  }, [])
  
  return (
    <div className="App">
    {BlockchainData.contract !== undefined ? 
    <p>loading</p> :
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
    </Router>}
    </div>
  );
}

export default observer(App)
