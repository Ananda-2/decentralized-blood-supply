import { contractConnection, bloodSupplyContract } from "./contract_connection";
import { getAccounts } from "./metamask_connection";

async function addHospitalFunc(_address, _name, _phone_number) {
  await contractConnection();
  let accounts = await getAccounts();
  await bloodSupplyContract.addHospital(_address, _name, _phone_number);
  // let event = await bloodSupplyContract.getPastEvents("eventHospitalAdded", {});
  // return event;
}
export { addHospitalFunc };
