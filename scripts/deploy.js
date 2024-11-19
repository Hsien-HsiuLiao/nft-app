const fs = require('fs');

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with the account: ${deployer.address}`);
  
  const balance = await deployer.getBalance();
  console.log(`Account balance: ${balance.toString()}`);

  //change contract name to NFT
  const NFT = await ethers.getContractFactory('NFT');
  const nft = await NFT.deploy();
  console.log(`NFT address: ${nft.address}`);

  const data = {
    address: nft.address,
    abi: JSON.parse(nft.interface.format('json'))
  };
  fs.writeFileSync('frontend/src/NFT.json', JSON.stringify(data)); 
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });