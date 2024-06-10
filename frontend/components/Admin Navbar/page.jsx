import Navbar from "@/components/Navbar/page";
import Link from "next/link";
import React from "react";

const Admin__Navbar = () => {

  return (
    <>
      <div className="card text-center">
        <Navbar />
        <div className="mt-10">
          <ul className="flex flex-row justify-around ">
            <li className="nav-item">
              <Link href="/admin/">Add Hospitals</Link>
            </li>
            <li className="nav-item">
              <Link href="/admin/add-supplier">Add Suppliers </Link>
            </li>
            <li className="nav-item">
              <Link href="/admin/view-donors">View Donors</Link>
            </li>
            <li className="nav-item">
              <Link href="/admin/view-patients">View Patients</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Admin__Navbar;
