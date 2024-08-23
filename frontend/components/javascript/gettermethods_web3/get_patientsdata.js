import {
  contractConnection,
  bloodSupplyContract,
} from "../web3/contract_connection";
import { getAccounts } from "../web3/metamask_connection";

async function getDataOfPatientsFunc() {
  try {
    await contractConnection();
    const accounts = await getAccounts();
    let patients = await bloodSupplyContract.getDataOfPatients();

    console.log(patients);
    if(patients.length > 0) return patients ;
    else return [] ;
    
  } catch (error) {
    console.error(error);
  }
}

export { getDataOfPatientsFunc };
