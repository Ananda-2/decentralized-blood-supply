"use client";

import { useState } from "react";
import { getBloodStatusFunc } from "../javascript/web3/check_status";

export default function TrackBlood() {
  const [formData, setFormData] = useState({
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    getBloodStatusFunc(formData.number);

    setFormData({
        number :""
    })
    
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-10 text-center ">Track Blood Id</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="number" className="block text-gray-700">
              Number:
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Check Status
          </button>
        </form>
      </div>
    </div>
  );
}
