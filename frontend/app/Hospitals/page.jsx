"use client";
import React from "react";
import GetHospitals from "@/components/NavBar Functions/GetHospitals";
import Navbar from "@/components/Navbar/page";

const Page = () => {
  return (
    <>
      <Navbar />
      <GetHospitals />
    </>
  );
};

export default Page;
