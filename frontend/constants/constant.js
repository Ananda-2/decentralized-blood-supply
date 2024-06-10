const ContractAddress = "";
const ContractAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "supplierAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bloodId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "hospitalAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shippingTime",
        type: "uint256",
      },
    ],
    name: "EventBloodShipped",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "hospital",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "hospitalName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "phoneNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "addedTime",
        type: "uint256",
      },
    ],
    name: "EventHospitalAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "supplier",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "organizationName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "phoneNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "addedTime",
        type: "uint256",
      },
    ],
    name: "EventSupplierAdded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_donorName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_age",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_gender",
        type: "string",
      },
      {
        internalType: "string",
        name: "_Address",
        type: "string",
      },
      {
        internalType: "string",
        name: "_bloodGroup",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_bloodVolume",
        type: "uint256",
      },
    ],
    name: "addBlood",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_hospitalAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_hospitalName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_phoneNumber",
        type: "uint256",
      },
    ],
    name: "addHospital",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_supplierAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_supplierName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_phoneNumber",
        type: "uint256",
      },
    ],
    name: "addSupplier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getBloodStatus",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDataOfBlood",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "bloodUniqueId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "bloodGroup",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "donatedTime",
            type: "uint256",
          },
          {
            internalType: "enum DataStructure.Status",
            name: "currentStatus",
            type: "uint8",
          },
        ],
        internalType: "struct DataStructure.BloodDetails[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDataOfDonors",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "donorName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "age",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "gender",
            type: "string",
          },
          {
            internalType: "string",
            name: "Address",
            type: "string",
          },
          {
            internalType: "string",
            name: "bloodGroup",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "bloodVolume",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "bloodUniqueId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "donatedTime",
            type: "uint256",
          },
        ],
        internalType: "struct DataStructure.Donor[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDataOfHospitals",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "hospitalAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "hospital_name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "phoneNumber",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "addedTime",
            type: "uint256",
          },
        ],
        internalType: "struct DataStructure.Hospital[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDataOfPatients",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "patientName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "age",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "Address",
            type: "string",
          },
          {
            internalType: "string",
            name: "bloodGroup",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "usedBloodId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "usedTime",
            type: "uint256",
          },
        ],
        internalType: "struct DataStructure.Patient[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDataOfSuppliers",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "supplierAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "organizationName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "phoneNumber",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "addedTime",
            type: "uint256",
          },
        ],
        internalType: "struct DataStructure.Supplier[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_blood_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_patientName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_age",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_address",
        type: "string",
      },
      {
        internalType: "string",
        name: "_bloodGroup",
        type: "string",
      },
    ],
    name: "giveBloodToPatients",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "hospitals",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_blood_id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_hospitalAddress",
        type: "address",
      },
    ],
    name: "shipBloodToHospital",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "suppliers",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
