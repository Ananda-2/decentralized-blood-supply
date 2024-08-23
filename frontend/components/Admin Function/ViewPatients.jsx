import React from 'react'
import { getDataOfPatientsFunc } from "@/components/javascript/gettermethods_web3/get_patientsdata"; // patient details function

const ViewPatients = async () => {
    let patients__details = await getDataOfPatientsFunc() ; // all donor details -- donors array
    console.log(patients__details);
  return (
    <div>ViewPatients</div>
  )
}

export default ViewPatients