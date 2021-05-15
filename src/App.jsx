import './App.css';
import Paffer from './abis/Paffer.json'
import {useEffect, useState} from 'react'
import Web3 from 'web3'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'

function App(){    
  return (
    <div className="App">
      <Router>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/profile/:address" >
          <Profile />
        </Route>
      </Router>
    </div>
  );
}

export default App
