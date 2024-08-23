import React, { useState, useEffect } from "react";
import { getHospitalsFunc } from "../javascript/gettermethods_web3/get_hospitals";

const GetHospitals = () => {
  const [hospitalDetails, sethospitalDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchhospitals = async () => {
      try {
        const hospitals = await getHospitalsFunc();
        sethospitalDetails(hospitals || []);
      } catch (error) {
        console.error("Error fetching hospitals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchhospitals();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    hospitalDetails.length > 0 ? (
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Hospitals Details</h1>
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className=" text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 pl-32 py-3">Metamask Address</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Number</th>
              </tr>
            </thead>
            <tbody>
              {hospitalDetails.map((item, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item[0]}</td>
                  <td className="px-6 py-4">{item[1]}</td>
                  <td className="px-6 py-4">{Number(item[2])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ) : (
      <div className="mt-10 text-center text-xl text-gray-600">No hospitals</div>
    )
  );
};

export default GetHospitals ;