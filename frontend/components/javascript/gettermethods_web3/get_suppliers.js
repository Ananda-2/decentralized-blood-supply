import {
  contractConnection,
  bloodSupplyContract,
} from "../web3/contract_connection";
import { getAccounts } from "../web3/metamask_connection";


async function getSuppliersFunc(e) {
  try {
    await contractConnection();
    const accounts = await getAccounts();
    const suppliers = await bloodSupplyContract.getDataOfSuppliers();

    if (suppliers.length > 0) {
      // Do something with the suppliers array here
      console.log(suppliers);
      return suppliers;
    } else {
      console.log("No suppliers found");
      return [];
    }
  } catch (error) {
    console.error("Error fetching suppliers:", error);
    return [];
  }
}

export { getSuppliersFunc };
