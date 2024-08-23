"use client"; // important


import React from "react";
import ViewPatients from "@/components/Admin Function/ViewPatients";
import Admin__Navbar from "@/components/Admin Navbar/page";
const Page = async () => {

  return <div>
    <Admin__Navbar/>
    <ViewPatients/>
  </div>;
};

export default Page;
