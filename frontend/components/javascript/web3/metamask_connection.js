// import Web3 from "web3";
import { ethers } from "ethers";
let accounts;
async function connectToMetamask() {
  if (typeof window !== "undefined") {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []); // <- this promps user to connect metamask
        const signer = provider.getSigner();
        accounts = await signer.getAddress();
        // console.log("All accounts aree ");
        // console.log(accounts);
        
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Error :: Metamask is not connected");
    }
  } else {
    console.log("Error :: window error again--------------------- ");
  }
}

const login = () => {
  if (typeof accounts != "undefined" && accounts.length) {
    $("#connectId").html(accounts[0]);
  }
};

async function getAccounts() {
  // accounts = await ethereum.request({ method: "eth_requestAccounts" });

  await connectToMetamask();
  return accounts;
}

export { accounts, getAccounts };
