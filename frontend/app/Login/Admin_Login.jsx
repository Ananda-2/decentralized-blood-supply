import React from "react";
import {
  bloodSupplyContract,
  contractConnection,
} from "@/components/javascript/web3/contract_connection";
import { getAccounts } from "@/components/javascript/web3/metamask_connection";
import { handleClientScriptLoad } from "next/script";
let account , isOwner , allSuppliers , allHospitals ;

async function Handle__Admin__Login(event) {
  await contractConnection();
    account = await getAccounts();
    isOwner = await bloodSupplyContract.owner();
    allSuppliers = await bloodSupplyContract.getDataOfSuppliers();
    allHospitals = await bloodSupplyContract.getDataOfHospitals();

    if(allSuppliers){
        console.log(allSuppliers)
    }
}

export {account , isOwner , allSuppliers ,allHospitals } ;