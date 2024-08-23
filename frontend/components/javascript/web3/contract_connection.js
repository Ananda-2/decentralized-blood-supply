import ABI from "../abi/blood_supply.json" assert { type: "json" };
import { ethers } from "ethers";
// import Web3 from "web3";

let bloodSupplyContract;
async function contractConnection() {
  if (typeof window !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    bloodSupplyContract = new ethers.Contract(
      "0xb872fa15507E58A181A34BB431256CcBC565a68F",
      ABI,
      signer
    );
  }else{
    console.log("first")
  }

}
export { contractConnection, bloodSupplyContract };
