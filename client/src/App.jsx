import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import add from "../constant/address";
import abi from "../constant/abi";
import Buy from './components/Buy';
import Memos from './components/Memos';
import chai from "./assets/chai.png";
import './App.css';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });

  const [account, setAccount] = useState("Not connected");

  useEffect(() => {
    const template = async () => {
      const contractAddress = add;
      const contractABI = abi;
      try {
        const { ethereum } = window;
        const accounts = await ethereum.request({
          method: "eth_requestAccounts"
        });
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        setAccount(accounts[0]);

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        setState({
          provider: provider,
          signer: signer,
          contract: contract
        });

        console.log(contract);
      } catch (error) {
        alert(error);
      }
    };

    template();
  }, []);

  return (
    <div className="app-container">
      <div className="header">
        <img src={chai} className="logo" alt="Chai Logo" />
        <p className="account-info">
          Connected Account: <span>{account}</span>
        </p>
      </div>
      <div className="content">
        <Buy state={state} />
        <Memos state={state} />
      </div>
    </div>
  );
}

export default App;
