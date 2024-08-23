import Link from "next/link";
import { getAccounts } from "../javascript/web3/metamask_connection";

export default async function Navbar() {
  // const account = await getAccounts();
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="font-bold text-xl hover:text-indigo-400 transition duration-300"
            >
              BloodBank Data
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/services">Blood Units</NavLink>
              <NavLink href="/Suppliers">Suppliers</NavLink>
              <NavLink href="/Hospitals">Hospitals</NavLink>
              <NavLink href="/Track_Blood">Track Blood</NavLink>
              {/* <NavLink href="/contacts">{account}</NavLink> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
    >
      {children}
    </Link>
  );
}
