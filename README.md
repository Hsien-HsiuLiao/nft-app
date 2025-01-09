# NFT app
*  NodeJS backend deployed to heroku https://hidden-headland-80264.herokuapp.com

https://www.coindesk.com/tech/2022/10/04/etherscan-set-to-deprecate-ethereums-ropsten-and-rinkeby-testnets/

* smart contact NFT.sol deployed https://rinkeby.etherscan.io/address/0xB5FE979191DF12cE5B9aF5f1A767880979D947Df , redelpoyed 
0xc0a49C9618024157E7d5074cFa46F5008E2d4B8F



* frontend - deployed to https://hhl-nft-app.netlify.app/ , also deployed frontend as docker container to AWS Fargate

### what does it do?
* The app allows an NFT to be displayed in a web browser
* when loaded in a broswer, the front end will send a request to the smart contract of the NFT to get the url of the metadata
* with the url, the front end sends a request to the backend, backend responds with metadata of token (json document)
* json doc has url of image of NFT
* then frontend will fetch image from server and also display metadata

## convert to hardhat
`npm install -D hardhat`

`npx hardhat` - choose empty

DEPRECATION WARNING

 Initializing a project with npx hardhat is deprecated and will be removed in the future.
 Please use npx hardhat init instead.

 `npm install -D @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai`


 ## deploying to local blockchain
 `mkdir scripts`

 `touch scripts/deploy.js`

 `npx hardhat run scripts/deploy.js`

 The library @openzeppelin/contracts, imported from contracts/NFT.sol, is not installed. Try installing it using npm

 https://www.npmjs.com/package/@openzeppelin/contracts

 `npm install @openzeppelin/contracts`



 ## deploying to testnet

 https://www.infura.io/

 sepolia testnet

 https://docs.metamask.io/developer-tools/faucet/

To prevent bots and abuse, this faucet requires a minimum Ethereum mainnet balance of 0.001 ETH on the wallet address being used.
 https://www.alchemy.com/faucets/ethereum-sepolia

 https://sepolia.etherscan.io/tx/0xce541a811f7307d5a2e5259f85a3daab2ba3c984d55524a33ccce027768b59c3



