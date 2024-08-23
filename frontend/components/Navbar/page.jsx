import Link from "next/link";
import { getAccounts } from "../javascript/web3/metamask_connection";

export default async function Navbar() {
  // const account = await getAccounts() ;
  return (
    <div>
      <div className="flex flex-row justify-between px-10 py-5 bg-black text-white ">
        <Link href="/">
          <h1>BloodBank Data</h1>
        </Link>

        <div className="flex justify-around items-center h-full">
          <ul className="hidden md:flex gap-x-6 ">
            <li>
              <Link href="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <p>Blood Units</p>
              </Link>
            </li>
            <li>
              <Link href="/Suppliers">
                <p>Suppliers</p>
              </Link>
            </li>
            <li>
              <Link href="/Hospitals">
                <p>Hospitals</p>
              </Link>
            </li>
            <li>
              <Link href="/Track_Blood">
                <p>Track Blood</p>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                {/* <p>{account}</p> */}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Login Part */}
    </div>
  );
}
