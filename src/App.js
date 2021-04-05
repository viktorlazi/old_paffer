import './App.css';
import Home from './Pages/Home/Home'
import Header from './Components/Header'
import Paffer from './abis/Paffer.json'
import {useEffect} from 'react'
import Web3 from 'web3'

function App() {  
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
    
    const networkId = await web3.eth.net.getId()
    const networkData = Paffer.networks[networkId]
    if(networkData){
      const paffer = web3.eth.Contract(Paffer.abi, networkData.address)
      console.log(paffer)
      
    }else{
      window.alert('paffer not deployed to network')
    }
  }

  useEffect( async () => {
    await loadWeb3()
    await loadBlockchainData()
  }, [])
  
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
