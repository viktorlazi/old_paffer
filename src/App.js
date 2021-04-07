import './App.css';
import Home from './Pages/Home/Home'
import Header from './Components/Header'
import Paffer from './abis/Paffer.json'
import {useEffect, useState} from 'react'
import Web3 from 'web3'

function App() {  
  const [paffer, setPaffer] = useState(null)
  const [loading, setLoading]= useState(true)
  const [account, setAccount]= useState()

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
      setPaffer(paffer)
      setLoading(false)
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
  }, [account])
  
  return (
    loading ? 
    <p>please run ganache</p> :
    <div className="App">
      <Header account={account} />
      <Home />
    </div>
  );
}

export default App;
