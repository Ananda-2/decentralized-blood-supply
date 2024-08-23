// import Admin__Navbar from "@/components/Admin Navbar/page";
import { addHospitalFunc } from "@/components/javascript/web3/add_hospital";
import {useState} from 'react'


export default function AddHoapital() {
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
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form data:', formData);
      addHospitalFunc(formData.address , formData.name , formData.number) ;
      Form.reset() ;
    };
  
    return (
      <div>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Add Hospital</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700">Hospital Address :</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Hospital Name :</label>
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