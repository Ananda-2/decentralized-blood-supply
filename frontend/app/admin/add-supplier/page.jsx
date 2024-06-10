// 'use client' ;

// import React from "react";
// import Admin__Navbar from "@/components/Admin Navbar/page";

// const page = () => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add your form submission logic here
//     console.log(event) ;
//   };


//   return (
//     <div>
//       <Admin__Navbar />

//       <div className="d-flex justify-content-center">
//         <div
//           className="card card bg shadow-lg p-4 mb-3"
//           style={{ width: "50%" }}
//         >
//           <div className="card-body">
//             <div className="col-md-5 offset-md-3 mt-5">
//               <form id="hospitalFormId" onSubmit={handleSubmit}>
//                 <div>
//                   <label htmlFor="hospital_address">Hospital Address</label>
//                   <input
//                     type="string"
//                     id="hospital_address"
//                     name="hospital_address"
//                   />
//                 </div>
//                 <br />
//                 <div>
//                   <label htmlFor="hospital_name">Hospital Name</label>
//                   <input
//                     type="string"
//                     id="hospital_name"
//                     name="hospital_name"
//                   />
//                 </div>
//                 <br />
//                 <div>
//                   <label htmlFor="phone_number">Phone Number</label>
//                   <input type="integer" id="phone_number" name="phone_number" />
//                 </div>
//                 <br />
//                 <div className="d-grid">
//                   <button
//                     type="submit"
//                     className="btn btn-primary"
//                     id="addHospitalBtn"
//                   >
//                     Add
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;




'use client'

import { useState } from 'react';
import Admin__Navbar from '@/components/Admin Navbar/page';
import { addSupplierFunc } from '@/components/javascript/web3/add_supplier';

export default function Form() {
  const [formData, setFormData] = useState({
    address: '',
    name: '',
    number: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Add your form submission logic here
    await addSupplierFunc(formData.address , formData.name , formData.number) ;
    Form.reset() ;
  };

  return (
    <div>
        <Admin__Navbar/>
    
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Add Supplier</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700">Supplier Address :</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Supplier Name :</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        
        <div className="mb-4">
          <label htmlFor="number" className="block text-gray-700">Number:</label>
          <input type="tel" id="number" name="number" value={formData.number} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        
        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Add</button>
      </form>
    </div>
    </div>
  );
}
