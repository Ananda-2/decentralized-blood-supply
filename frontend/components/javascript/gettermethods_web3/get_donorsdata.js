import {
  contractConnection,
  bloodSupplyContract,
} from "../web3/contract_connection";
import { getAccounts } from "../web3/metamask_connection";

async function getDataOfDonorsFunc() {
  try {
    await contractConnection();
    let accounts = await getAccounts();
    let donors = await bloodSupplyContract.getDataOfDonors();
    console.log(donors)
    console.log(bloodSupplyContract)
    return donors ;
  } catch (error) {
    console.error(error);
  }
}

export {getDataOfDonorsFunc} ;
