"use client";
import Navbar from "@/components/Navbar/page";
import Link from "next/link";
import {
  bloodSupplyContract,
  contractConnection,
} from "@/components/javascript/web3/contract_connection";
import { getAccounts } from "@/components/javascript/web3/metamask_connection";

// Admin Login function

async function Handle__Admin__Login(event) {
  event.preventDefault();
  await contractConnection();
  const account = await getAccounts();
  const isOwner = await bloodSupplyContract.owner();

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

      <div className="container mx-auto px-4 py-20 ">
        <ul className="flex flex-wrap justify-center gap-8 md:gap-16">
          <li className="flex flex-col items-center bg-blue-50 rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
            <img
              className="w-48 h-48 object-cover rounded-full mb-4"
              src="https://static.vecteezy.com/system/resources/previews/029/156/453/original/admin-business-icon-businessman-business-people-male-avatar-profile-pictures-man-in-suit-for-your-web-site-design-logo-app-ui-solid-style-illustration-design-on-white-background-eps-10-vector.jpg"
              alt="admin"
            />
            <h1 className="text-xl font-semibold text-gray-800 mb-4">Admin</h1>
            <Link href="/admin">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                onClick={Handle__Admin__Login}
              >
                Login
              </button>
            </Link>
          </li>
          <li className="flex flex-col items-center bg-red-50 rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
            <img
              className="w-48 h-48 object-cover rounded-full mb-4"
              src="https://www.shutterstock.com/image-vector/blood-donation-logo-design-vector-260nw-2233019493.jpg"
              alt="supplier"
            />
            <h1 className="text-xl font-semibold text-gray-800 mb-4">
              Supplier
            </h1>
            <Link href="/supplier">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                onClick={Handle__Supplier__Login}
              >
                Login
              </button>
            </Link>
          </li>
          <li className="flex flex-col items-center bg-green-50 rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
            <img
              className="w-48 h-48 object-cover rounded-full mb-4"
              src="https://t4.ftcdn.net/jpg/08/06/24/89/360_F_806248978_nu3d6xllKaz07WJkRiiVxqvoJTEIGB8W.jpg"
              alt="hospital"
            />
            <h1 className="text-xl font-semibold text-gray-800 mb-4">
              Hospital
            </h1>
            <Link href="/hospital">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
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
