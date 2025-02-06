# NFT app

* frontend - deployed to https://hhl-nft-app.netlify.app/ , also deployed frontend as docker container to AWS Fargate



### what does it do?
* The app allows an NFT to be displayed in a web browser
* when loaded in a broswer, the front end will send a request though Metamask to the NFT smart contract on Ethereum to get the url of the metadata by calling the tokenURI function and passing tokenId
* with the url, the front end sends a GET request to the backend via axios, the backend responds with metadata of token (json document) for the tokenId requested 
* then frontend will parse and format metadata to display 


 ## deploying to local blockchain

 `npx hardhat run scripts/deploy.js`



 ## deploying to testnet

 https://www.infura.io/

 sepolia testnet

 https://www.alchemy.com/faucets/ethereum-sepolia

 https://sepolia.etherscan.io/tx/0xce541a811f7307d5a2e5259f85a3daab2ba3c984d55524a33ccce027768b59c3


Your .env should look like this:

Shell
```
API_URL = "https://eth-sepolia.g.alchemy.com/v2/your-api-key" //or infura
PRIVATE_KEY = "your-metamask-private-key"
```

`npx hardhat run scripts/deploy.js --network sepolia`

deployed to 

https://sepolia.etherscan.io/address/0x97848BfB241EBd360e3B21dA36eFB7B366017c3E


### local development

- clone repo
- cd frontend
- npm install
- npm start

### netlify
- compile frontend with `npm run build`