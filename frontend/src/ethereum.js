import { ethers, Contract } from "ethers";
import NFT from './contracts/NFT.json';

/* const getBlockchain = () => new Promise((resolve, reject) => {
        window.addEventListener('load', async () => {
            //check if Metamask installed
            console.log("check if Metamask installed")
            if (window.ethereum) {
                console.log("window.ethereum");
                await window.ethereum.enable(); //opens Metamask popup
                // A Web3Provider wraps a standard Web3 provider, which is
                // what MetaMask injects as window.ethereum into each page
                //https://docs.ethers.org/v5/getting-started/#getting-started--connecting
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();

                const nft = new Contract(
                    NFT.networks[window.ethereum.networkVersion].address,
                    NFT.abi,
                    signer
                );

                resolve({ nft });
            }
            console.log("nft undefined")
            resolve({ nft: undefined });
        });
    }); */

    const getBlockchain = async () => {
       /*  while (document.readyState !== 'complete') {
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
       */
        if (window.ethereum) {
          try {
            await window.ethereum.enable();
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
      console.log("NFT", NFT);
            const nft = new Contract(
              NFT.networks[window.ethereum.networkVersion].address,
              NFT.abi,
              signer
            );
      
            return { nft };
          } catch (error) {
            console.error(error);
            return { nft: undefined };
          }
        }
      
        return { nft: undefined };
      };

export default getBlockchain;