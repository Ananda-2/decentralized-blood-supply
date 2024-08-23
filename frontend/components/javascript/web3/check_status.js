import { contractConnection, bloodSupplyContract } from "./contract_connection";

async function getBloodStatusFunc(_bloodId) {
  await contractConnection();
  let status = await bloodSupplyContract.getBloodStatus(_bloodId);
  alert(status);
}
export { getBloodStatusFunc };
