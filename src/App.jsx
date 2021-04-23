import './App.css';
import Paffer from './abis/Paffer.json'
import {useEffect, useState} from 'react'
import Web3 from 'web3'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'

function App(){  
  const [contract, setContract] = useState()
  const [account, setAccount] = useState()
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
    setAccount(accounts[0])

    const networkId = await web3.eth.net.getId()
    const networkData = Paffer.networks[networkId]
    if(networkData){
      const paffer = new web3.eth.Contract(Paffer.abi, networkData.address)
      setContract(paffer)
      console.log(paffer.methods)      
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
      {contract && account &&
      <Router>
        <Route exact path="/" >
          <Home contract={contract} account={account} />
        </Route>
        <Route exact path="/profile" >
          <Profile />
        </Route>
      </Router>}
    </div>
  );
}

export default App
