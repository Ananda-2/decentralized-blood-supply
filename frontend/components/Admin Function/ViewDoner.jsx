import React from 'react'
import { getDataOfDonorsFunc } from "@/components/javascript/gettermethods_web3/get_donorsdata"; // doner details function


const ViewDonerFunction = async () => {
    let donor__details = await getDataOfDonorsFunc(); // all donor details -- donors array
    console.log(donor__details)
  return (
    <div>viewDoner</div>
  )
}

export default ViewDonerFunction