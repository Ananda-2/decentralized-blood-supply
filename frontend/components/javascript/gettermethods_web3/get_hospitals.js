import {
  contractConnection,
  bloodSupplyContract,
} from "../web3/contract_connection";
import { getAccounts } from "../web3/metamask_connection";


async function getHospitalsFunc(e) {
  try {
    await contractConnection();
    const accounts = await getAccounts();
    const hospitals = await bloodSupplyContract.getDataOfHospitals();

    if (hospitals.length > 0) {
      // Do something with the suppliers array here
      console.log(hospitals);
      return hospitals;
    } else {
      console.log("No suppliers found");
      return [];
    }
  } catch (error) {
    console.error("Error fetching suppliers:", error);
    return [];
  }
}

export { getHospitalsFunc };
