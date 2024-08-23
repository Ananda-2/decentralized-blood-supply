import React, { useState, useEffect } from "react";
import { getDataOfDonorsFunc } from "../javascript/gettermethods_web3/get_donorsdata";

const ViewDoners = () => {
  const [donerDetails, setdonerDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdoners = async () => {
      try {
        const doners = await getDataOfDonorsFunc();
        setdonerDetails(doners || []);
      } catch (error) {
        console.error("Error fetching doners:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchdoners();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    donerDetails.length > 0 ? (
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Doner Details</h1>
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-center text-gray-500">
            <thead className=" text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Age</th>
                <th scope="col" className="px-6 py-3">Gender</th>
                <th scope="col" className="px-6 py-3">Address</th>
                <th scope="col" className="px-6 py-3">Blood Group</th>
                <th scope="col" className="px-6 py-3">Blood Id</th>
                <th scope="col" className="px-6 py-3">Blood Amount (ml)</th>
              </tr>
            </thead>
            <tbody>
              {donerDetails.map((item, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item[0]}</td>
                  <td className="px-6 py-4">{Number(item[1])}</td>
                  <td className="px-6 py-4">{item[2]}</td>
                  <td className="px-6 py-4">{item[3]}</td>
                  <td className="px-6 py-4">{item[4]}</td>
                  <td className="px-6 py-4">{Number(item[6])}</td>
                  <td className="px-6 py-4">{Number(item[5])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ) : (
      <div className="mt-10 text-center text-xl text-gray-600">No doners</div>
    )
  );
};

export default ViewDoners ;