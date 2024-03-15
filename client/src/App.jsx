import { useState,useEffect } from 'react'
import {ethers} from "ethers"
import add from "../constant/address";
import abi from "../constant/abi"
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
  const contractAddress=add;
  const contractABI=abi;
  try {
    const {ethereum} =window;
  const account=await ethereum.request({
    method:"eth_requestAccounts"
  })
  setAccount(account);
  const provider= new ethers.providers.Web3Provider(ethereum);
  const signer=provider.getSigner();
  const contract=new ethers.Contract(contractAddress,contractABI,signer)
  setState(signer,provider,contract);
  console.log(contract)
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
