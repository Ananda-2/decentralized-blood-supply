'use client'

import { useState } from 'react';
import Supplier__Navbar from "@/components/supplier__Navbar/page";

export default function Form() {
  const [formData, setFormData] = useState({
    blood_id : '',
    hospital_address : ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Add your form submission logic here
  };

  return (
    <div>
        <Supplier__Navbar/>
    
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Ship Blood</h1>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-4">
          <label htmlFor="blood_id" className="block text-gray-700">Blood Id:</label>
          <input type="number" id="blood_id" name="blood_id" value={formData.blood_id} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>

        <div className="mb-4">
          <label htmlFor="hospital_address" className="block text-gray-700">Hospital Address:</label>
          <input type="text" id="hospital_address" name="hospital_address" value={formData.hospital_address} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Ship</button>
      </form>
    </div>
    </div>
  );
}
