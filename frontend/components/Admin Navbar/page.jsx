import Navbar from "@/components/Navbar/page";
import Link from "next/link";
import React from "react";

const Admin__Navbar = () => {
  return (
    <div>
      <Navbar />
      <div className="border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex -mb-px">
            <NavItem href="/admin/" text="Add Hospitals" />
            <NavItem href="/admin/add-supplier" text="Add Suppliers" />
            <NavItem href="/admin/view-donors" text="View Donors" />
          </ul>
        </nav>
      </div>
    </div>
  );
};

const NavItem = ({ href, text }) => (
  <li className="mr-1">
    <Link
      href={href}
      className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-700 hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-600"
    >
      {text}
    </Link>
  </li>
);

export default Admin__Navbar;