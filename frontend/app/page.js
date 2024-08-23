"use client";
import Navbar from "@/components/Navbar/page";
import Link from "next/link";
import {
  bloodSupplyContract,
  contractConnection,
} from "@/components/javascript/web3/contract_connection";
import { getAccounts } from "@/components/javascript/web3/metamask_connection";

// Admin Login function  
import { account , isOwner } from "./Login/Admin_Login";
async function Handle__Admin__Login(event) {
  event.preventDefault();

  console.log(bloodSupplyContract);
  if (account === isOwner) {
    window.location.href = "/admin";
  } else {
    alert("You are not the owner");
  }
}

async function Handle__Supplier__Login(e) {
  e.preventDefault();
  await contractConnection();
  let flag = 0;
  let account = await getAccounts();
  const allSuppliers = await bloodSupplyContract.getDataOfSuppliers();
  allSuppliers.forEach((supplier) => {
    console.log(supplier);
    console.log(supplier[0]);
    console.log(account);
    if (supplier[0] === account) {
      window.location.href = "/supplier";
      flag = 1;
    }
  });

  if (flag === 0) alert("you are not a supplier");
  console.log(allSuppliers);
}


async function Handle__Hospital__Login(e) {
  e.preventDefault();
  await contractConnection();
  let flag = 0;
  let account = await getAccounts();
  const allSuppliers = await bloodSupplyContract.getDataOfHospitals();
  allSuppliers.forEach((supplier) => {
    console.log(supplier);
    console.log(account);
    if (supplier[0] === account) {
      window.location.href = "/hospital";
      flag = 1;
    }
  });

  if (flag === 0) alert("you are not a hospital");
  console.log(allSuppliers);
}



export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-row ">
        <ul className=" flex flex-row justify-around gap-x-20 mt-10 mx-auto ">
          <li className="items-center justify-center">
            <h1>Admin</h1>
            <Link href="/admin">
              <button
                className="bg-slate-600 rounded-md px-5 py-2 text-white "
                onClick={Handle__Admin__Login}
              >
                Login
              </button>
            </Link>
          </li>
          <li>
            <h1>Supplier</h1>
            <Link href="/supplier">
              <button
                className="bg-slate-600 rounded-md px-5 py-2 text-white "
                onClick={Handle__Supplier__Login}
              >
                Login
              </button>
            </Link>
          </li>
          <li>
            <h1>Hospital</h1>
            <Link href="/hospital">
              <button
                className="bg-slate-600 rounded-md px-5 py-2 text-white "
                onClick={Handle__Hospital__Login}
              >
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
