# NFT app
*  NodeJS backend deployed to heroku https://hidden-headland-80264.herokuapp.com
* smart contact NFT.sol deployed https://rinkeby.etherscan.io/address/0xB5FE979191DF12cE5B9aF5f1A767880979D947Df , redelpoyed 
0xc0a49C9618024157E7d5074cFa46F5008E2d4B8F
* frontend - deployed to https://hhl-nft-app.netlify.app/ , also deployed frontend as docker container to AWS Fargate

### what does it do?
* The app allows an NFT to be displayed in a web browser
* when loaded in a broswer, the front end will send a request to the smart contract of the NFT to get the url of the metadata
* with the url, the front end sends a request to the backend, backend responds with metadata of token (json document)
* json doc has url of image of NFT
* then frontend will fetch image from server and also display metadata