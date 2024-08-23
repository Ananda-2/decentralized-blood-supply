import { contractConnection, bloodSupplyContract } from "./contract_connection";
import { getAccounts } from "./metamask_connection";

async function shipBloodFunc(_bloodId, _hospital_address) {
  await contractConnection();
  let accounts = await getAccounts();
  await bloodSupplyContract.shipBloodToHospital(_bloodId, _hospital_address);
  // let event = await bloodSupplyContract.getPastEvents("eventBloodShipped", {});
  // return event;
}
export { shipBloodFunc };
