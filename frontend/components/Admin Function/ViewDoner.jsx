import React, { useState, useEffect } from "react";
import { getDataOfDonorsFunc } from "../javascript/gettermethods_web3/get_donorsdata";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);

const DonorTable = ({ donors }) => (
  <div className="overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-center text-gray-500">
      <thead className="text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Age
          </th>
          <th scope="col" className="px-6 py-3">
            Gender
          </th>
          <th scope="col" className="px-6 py-3">
            Address
          </th>
          <th scope="col" className="px-6 py-3">
            Blood Group
          </th>
          <th scope="col" className="px-6 py-3">
            Blood Id
          </th>
          <th scope="col" className="px-6 py-3">
            Blood Amount (ml)
          </th>
        </tr>
      </thead>
      <tbody>
        {donors.map((item, index) => (
          <tr key={index} className="bg-white border-b hover:bg-gray-50">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {item[0]}
            </td>
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
);

const ViewDoners = () => {
  const [donorDetails, setDonorDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const donors = await getDataOfDonorsFunc();
        setDonorDetails(donors || []);
      } catch (error) {
        console.error("Error fetching donors:", error);
        setError("Failed to fetch donors. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDonors();
  }, []);

  if (loading) return <LoadingSpinner />;

  if (error)
    return <div className="text-center text-red-600 mt-10">{error}</div>;

  return (
    <div className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Donor Details
      </h1>
      {donorDetails.length > 0 ? (
        <DonorTable donors={donorDetails} />
      ) : (
        <div className="text-center text-xl text-gray-600">No donors found</div>
      )}
    </div>
  );
};

export default ViewDoners;
