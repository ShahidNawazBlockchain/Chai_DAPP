import { useState,useEffect } from 'react'
import {ethers} from "ethers"

import './App.css'

function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  })
  const [account , setAccount]=useState("Not connected")
useEffect(()=>{
  const template=async()=>{
  const contractAddress="";
  const contractABI="";
  try {
    const {ethereum} =window;
  const account=await ethereum.request({
    method:"eth_requestAccounts"
  })
  setAccount(account);
  const provider= await ethers.providers.Web3Provider(ethereum);
  const signer=provider.getSigner();
  const contract=new ethers.Contract(contractAddress,contractABI,signer)
  setState(signer,provider,contract);
  } catch (error) {
    alert(error)
  }
 
}
template()
},[])
  return (
    <>
     <h>kjhsj</h>
    </>
  )
}

export default App
