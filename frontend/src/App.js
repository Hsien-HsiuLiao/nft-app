import React, { useState, useEffect } from 'react';
import getBlockchain from './ethereum.js';
import axios from 'axios';

function App() {
  const [tokenInfo, setTokenInfo] = useState(undefined);

  /* useEffect( () => {
    const init = async () => {
      const { nft } = await getBlockchain();
      const tokenURI = await nft.tokenURI(0); //tokenId = 0, nft.tokenURI(tokenId)
      const { data } = await axios.get(tokenURI); //https://gateway.pinata.cloud/ipfs/bafkreid43ipihuvs4a2gu46ekp4cqjlq3wee52vfp5sj2jbxqgcoj2tfem/
     // console.log(data.result.image);
      setTokenInfo(data.result);
    };
    init();
  }, []); */

  const handleClick = async () => {
    console.log('Button clicked!');
    const { nft } = await getBlockchain();
    const tokenURI = "https://gateway.pinata.cloud/ipfs/bafkreid43ipihuvs4a2gu46ekp4cqjlq3wee52vfp5sj2jbxqgcoj2tfem/"
    const { data } = await axios.get(tokenURI);
    console.log(data[0]);
    setTokenInfo(data[0]);
    console.log(tokenInfo);
  };

  

  if (typeof tokenInfo === 'undefined') {
    return (
      <div>
        <h3>Getting token info...</h3>
        <p>install MetaMask <a href="https://metamask.io/"> https://metamask.io/</a></p>
        <button onClick={handleClick}>Connect MetaMask</button>
        <p>Connect Metamask to the testnet to display the NFT</p>
        <p>Get test eth sepolia <a href="https://www.alchemy.com/faucets/ethereum-sepolia">faucet</a></p>
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-12'>
          <h1 className='text-center'>{tokenInfo.name}</h1>
          <div className="jumbotron">
            <p className="lead text-center">{tokenInfo.description}</p>
            <img src={tokenInfo.image} className="img-fluid" width="50%" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
