import { useState } from 'react';

const OrganizationDetailsSection = () => {
  // Hardcoded organization details
  const organization = {
    name: 'XYZ Research Institute',
    established: 'January 15, 2000',
    ceo: 'Dr. John Smith',
    address: '123 Research Lane, Innovation City, IN 456789',
    phone: '+91 12345 67890',
    email: 'info@xyzresearch.org',
    personnel: [
      { name: 'Dr. John Smith', position: 'CEO', status: 'Active' },
      { name: 'Ms. Emily Johnson', position: 'Lead Researcher', status: 'Active' },
      { name: 'Mr. Michael Brown', position: 'Project Manager', status: 'Active' },
      { name: 'Ms. Jessica Davis', position: 'Data Analyst', status: 'Inactive' },
      { name: 'Mr. Chris Wilson', position: 'QA Engineer', status: 'Active' },
    ],
    projects: [
      { title: 'Innovative Technology Development', status: 'Ongoing' },
      { title: 'Smart City Solutions', status: 'Completed' },
      { title: 'Sustainable Energy Research', status: 'Ongoing' },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <h3 className="text-2xl font-bold mb-4">Organization Details</h3>
      <p><strong>Name:</strong> {organization.name}</p>
      <p><strong>Established:</strong> {organization.established}</p>
      <p><strong>CEO:</strong> {organization.ceo}</p>
      <p><strong>Address:</strong> {organization.address}</p>
      <p><strong>Phone:</strong> {organization.phone}</p>
      <p><strong>Email:</strong> <a href={`mailto:${organization.email}`} className="text-purple-600">{organization.email}</a></p>

      {/* Personnel Section */}
      <div className="mt-6">
        <h4 className="text-xl font-semibold mb-2">Current Personnel</h4>
        <ul className="list-disc ml-5">
          {organization.personnel.map((person, index) => (
            <li key={index} className={`flex justify-between mb-1 ${person.status === 'Active' ? 'text-gray-800' : 'text-gray-400'}`}>
              <span>{person.name} - {person.position}</span>
              <span className={`font-semibold ${person.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>{person.status}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Projects Section */}
      <div className="mt-6">
        <h4 className="text-xl font-semibold mb-2">Projects</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {organization.projects.map((project, index) => (
            <div key={index} className="bg-purple-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h5 className="font-semibold">{project.title}</h5>
              <p className={`text-gray-600`}>Status: <span className={`font-semibold ${project.status === 'Ongoing' ? 'text-yellow-500' : 'text-gray-600'}`}>{project.status}</span></p>
            </div>
          ))}
        </div>
      </div>

      {/* Update Page Button */}
      <div className="flex justify-end mt-6">
        {/* <button
          onClick={() => alert('Update organization details logic to be implemented')}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Update Organization Details
        </button> */}
      </div>
    </div>
  );
};

export default OrganizationDetailsSection;
