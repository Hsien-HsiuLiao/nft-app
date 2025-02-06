const fs = require('fs');

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with the account: ${deployer.address}`);
  
  const balance = await deployer.getBalance();
  console.log(`Account balance: ${balance.toString()}`);

  // Grab the contract factory 
  const NFT = await ethers.getContractFactory('NFT');
  // Start deployment, returning a promise that resolves to a contract object
  const contract = await NFT.deploy();
  console.log(`NFT address: ${contract.address}`);

  await contract.deployed();

 /*  
 truffle 2_deploy_contracts.js
 module.exports = async function (deployer, _network, accounts) {
    await deployer.deploy(NFT);
    const nft = await NFT.deployed();
    await nft.mint(accounts[0]);
  }; */
  await contract.mint(deployer.address);

  const data = {
    address: contract.address,
    abi: JSON.parse(contract.interface.format('json'))
  };
  fs.writeFileSync('frontend/src/contracts/NFT.json', JSON.stringify(data)); 
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });