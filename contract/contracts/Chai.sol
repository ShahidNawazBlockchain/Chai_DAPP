// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
contract Chai{
    struct Memo{
        string name;
        string message;
        uint timestamp;
        address from;
    }
    Memo[] memos;
    address payable owner;
    constructor(){
        owner =payable (msg.sender);
    }

    function BuyChai(string calldata name,string calldata message) external payable {
        require(msg.value>0,"please pay more than one ether");
        owner.transfer(msg.value);
        memos.push(Memo(name,message,block.timestamp,msg.sender));
    }
    function getMemos() public view returns (Memo[] memory){
        return  memos;
    } 
}