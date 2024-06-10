import Link from "next/link";
import Navbar from "../Navbar/page";
const Supplier__Navbar = () => {
  return (
    <>
      <div className="card text-center">
        <Navbar />
        <div className="mt-10">
          <ul className="flex flex-row justify-around ">
            <li className="nav-item">
              <Link href="/supplier">Add Donor</Link>
            </li>
            <li className="nav-item">
              <Link href="/supplier/ship-blood">Ship Blood</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Supplier__Navbar;
