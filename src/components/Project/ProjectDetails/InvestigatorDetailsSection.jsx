import { useState } from 'react';
import ProfilePng from '../../../../assets/Profile.png';

const InvestigatorDetailsSection = () => {
  // State to handle investigator information
  const [investigator, setInvestigator] = useState({
    image: 'https://via.placeholder.com/150',
    name: 'Rushikesh Wayal',
    email: 'rushikesh.wayal@example.com',
    phone: '+123456789',
    accountNumber: '1234567890123456',
    designation: 'Senior Investigator',
    position: 'Lead Investigator',
    experience: '5 Years',
    dateOfBirth: '2004-01-15',
    address: '1234 Main Street, Anytown, Country',
    startDate: '2017-05-10',
    ministry: 'Florid Pvt.Lmt',
  });

  // State for managing investigators
  const [investigators, setInvestigators] = useState([
    { id: 1, name: 'Dr. John Doe', designation: 'Lead Investigator' },
    { id: 2, name: 'Dr. Jane Smith', designation: 'Co-Investigator' },
    { id: 3, name: 'Prof. Emily White', designation: 'Research Assistant' },
  ]);

  const [newInvestigator, setNewInvestigator] = useState({
    name: '',
    designation: ''
  });

  // Handle input changes for adding a new investigator
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInvestigator({ ...newInvestigator, [name]: value });
  };

  // Handle adding a new investigator
  const handleAddInvestigator = () => {
    if (newInvestigator.name && newInvestigator.designation) {
      setInvestigators([
        ...investigators,
        { id: investigators.length + 1, ...newInvestigator }
      ]);
      setNewInvestigator({ name: '', designation: '' });
    }
  };

  // Handle deleting an investigator
  const handleDeleteInvestigator = (id) => {
    setInvestigators(investigators.filter((investigator) => investigator.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 relative p-8">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center justify-center space-x-6 mb-8">
          <img
            src={ProfilePng}
            alt="Investigator"
            className="w-32 h-32 rounded-full border-4 border-purple-700 shadow-lg"
          />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-purple-700">{investigator.name}</h1>
            <h2 className="text-xl text-gray-600">{investigator.designation}</h2>
          </div>
        </div>

        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
          {/* Personal Information */}
          <h3 className="text-3xl font-bold mb-4 text-purple-700">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-700 font-semibold">Email</p>
              <p className="text-gray-900">{investigator.email}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Phone</p>
              <p className="text-gray-900">{investigator.phone}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Date of Birth</p>
              <p className="text-gray-900">{new Date(investigator.dateOfBirth).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Address</p>
              <p className="text-gray-900">{investigator.address}</p>
            </div>
          </div>

          {/* Professional Information */}
          <h3 className="text-3xl font-bold mb-4 text-purple-700">Professional Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-gray-700 font-semibold">Designation</p>
              <p className="text-gray-900">{investigator.designation}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Position</p>
              <p className="text-gray-900">{investigator.position}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Experience</p>
              <p className="text-gray-900">{investigator.experience}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Start Date</p>
              <p className="text-gray-900">{new Date(investigator.startDate).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Organization</p>
              <p className="text-gray-900">{investigator.ministry}</p>
            </div>
          </div>

          {/* Additional Information */}
          <h3 className="text-3xl font-bold mb-4 text-purple-700">Additional Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700 font-semibold">Account Number</p>
              <p className="text-gray-900">{investigator.accountNumber}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Identification</p>
              <p className="text-gray-900">ID12345ABC</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Security Clearance</p>
              <p className="text-gray-900">Level 4</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Branch</p>
              <p className="text-gray-900">Main Branch</p>
            </div>
          </div>
        </div>
      </div>

      {/* Investigator Management Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h3 className="text-3xl font-bold mb-6 text-purple-700">Add New Investigator</h3>
        <div className="flex flex-col space-y-4 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Investigator Name"
            value={newInvestigator.name}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="designation"
            placeholder="Designation"
            value={newInvestigator.designation}
            onChange={handleInputChange}
            className="p-3 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleAddInvestigator}
            className="bg-purple-700 text-white py-3 px-6 rounded-md hover:bg-purple-800 transition-all duration-200"
          >
            Add Investigator
          </button>
        </div>

        {/* Investigator List */}
        <h3 className="text-3xl font-bold mb-6 text-purple-700">Current Investigators</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-100 border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Designation</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {investigators.map((investigator) => (
                <tr key={investigator.id} className="text-center">
                  <td className="py-2 px-4 border-b">{investigator.id}</td>
                  <td className="py-2 px-4 border-b">{investigator.name}</td>
                  <td className="py-2 px-4 border-b">{investigator.designation}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-green-500 mx-3 text-white py-1 px-3 rounded-md hover:bg-green-600 transition-all duration-200">Edit</button>
                    <button
                      onClick={() => handleDeleteInvestigator(investigator.id)}
                      className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition-all duration-200"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvestigatorDetailsSection;
