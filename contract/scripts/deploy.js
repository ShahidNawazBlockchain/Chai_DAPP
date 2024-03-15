const hre = require("hardhat");
async function main() {

  
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
 const unlockTime = currentTimestampInSeconds + 60;
   const lockedAmount = hre.ethers.utils.parseEther("0.001");




  const Chai = await hre.ethers.deployContract("Chai");
  await Chai.deployed()
  console.log(
    `Chai contract with ${hre.ethers.utils.formatEther(
      lockedAmount
    )} ETH and  timestamp ${unlockTime} is deployed to ${Chai.address}`
  );


  console.log("verification process...")

  await run("verify:verify", {
    address: Chai.address,
    contract: "contracts/Chai.sol:Chai", 
    constructorArguments: [],
});
 
}



main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
