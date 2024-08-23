// import {
//   contractConnection,
//   bloodSupplyContract,
// } from "../web3/contract_connection";
// import { getAccounts } from "../web3/metamask_connection";

// const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

// document.addEventListener("DOMContentLoaded", async function () {
//   document.getElementById("blood-link").addEventListener("click", (event) => {
//     event.preventDefault();
//     async function getbloodDataFunc() {
//       await contractConnection();
//       const accounts = await getAccounts();
//       const bloodData = await bloodSupplyContract.methods
//         .getDataOfBlood()
//         .call({ from: accounts[0] });

//       try {
//         // Make a POST request to a Rails endpoint
//         const response = await fetch("/datas", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "X-CSRF-Token": csrfToken,
//           },
//           body: JSON.stringify({ bloodData: bloodData }),
//         });
//         // Handle the response from the server
//         if (response.ok) {
//           console.log("bloodData data successfully sent to Rails controller!");
//           window.location.href = "/bloodunits";
//         } else {
//           console.error(
//             "An error occurred while sending bloodData data to Rails controller."
//           );
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     getbloodDataFunc();
//   });
// });


import {
  contractConnection,
  bloodSupplyContract,
} from "../web3/contract_connection";
import { getAccounts } from "../web3/metamask_connection";


async function getDataOfBloodFunc(e) {
  try {
    await contractConnection();
    const accounts = await getAccounts();
    const bloods = await bloodSupplyContract.getDataOfBlood();

    if (bloods.length > 0) {
      // Do something with the suppliers array here
      console.log(bloods);
      return bloods;
    } else {
      console.log("No Bloods found");
      return [];
    }
  } catch (error) {
    console.error("Error fetching bloods:", error);
    return [];
  }
}

export { getDataOfBloodFunc };
