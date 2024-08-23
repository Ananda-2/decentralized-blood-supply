"use client";
import React from "react";
import GetBloodDetails from "@/components/NavBar Functions/GetBloodDetails";
import Navbar from "@/components/Navbar/page";

const Page = () => {
  return (
    <>
      <Navbar />
      <GetBloodDetails />
    </>
  );
};

export default Page;
