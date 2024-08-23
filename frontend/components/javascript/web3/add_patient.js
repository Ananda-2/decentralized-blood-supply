import { contractConnection, bloodSupplyContract } from "./contract_connection";
import { getAccounts } from "./metamask_connection";

async function addPatientFunc(
  _bloodId,
  _patient_name,
  _age,
  _address,
  _blood_group,
  _donated_time
) {
  await contractConnection();
  let accounts = await getAccounts();
  await bloodSupplyContract.giveBloodToPatients(
    _bloodId,
    _patient_name,
    _age,
    _address,
    _blood_group,
  );
}
export { addPatientFunc };
