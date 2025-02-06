import React, { useState } from 'react';
import getBlockchain from './ethereum.js';
import axios from 'axios';

function App() {
  const [tokenMetadata, setTokenMetadata] = useState(undefined);
  const [nftAddress, setNftAddress] = useState(undefined);


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
    console.log("nft", nft.address);
    const tokenId = 0;
    const tokenURI = await nft.tokenURI(tokenId); //"https://gateway.pinata.cloud/ipfs/bafkreid43ipihuvs4a2gu46ekp4cqjlq3wee52vfp5sj2jbxqgcoj2tfem/"
    console.log(tokenURI);
    const { data } = await axios.get(tokenURI);
    const metaData = data;
    console.log(metaData[tokenId]);
    setTokenMetadata(metaData[tokenId]);
    console.log(tokenMetadata);
    setNftAddress(nft.address);
  };



  if (typeof tokenMetadata === 'undefined') {
    return (
      <div style={{  textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
        <h3>Getting token info...</h3>
        <p>install MetaMask <a href="https://metamask.io/"> https://metamask.io/</a></p>
        <button onClick={handleClick}>Connect MetaMask to the dapp</button>
        <p>Connect Metamask to the testnet to display the NFT</p>
        <p>Get test eth sepolia <a href="https://www.alchemy.com/faucets/ethereum-sepolia">faucet</a></p>
      </div>
    );
  }

  return (
    <div style={{  textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>

      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <h1 className='text-center'>{tokenMetadata.name}</h1>
            <div className="jumbotron">
              <p className="lead text-center">{tokenMetadata.description} </p>
              <p>(verify contract on etherscan) <a href={`https://sepolia.etherscan.io/address/${nftAddress}`}>https://sepolia.etherscan.io/address/{nftAddress}</a></p>
              <img src={tokenMetadata.image} className="img-fluid" width="50%" alt=""/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
