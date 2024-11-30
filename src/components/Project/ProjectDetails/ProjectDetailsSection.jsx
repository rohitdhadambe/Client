import { useState } from 'react';

const ProjectDetailsSection = () => {
  const [reports, setReports] = useState([]);

  // Sample data for project details
  const project = {
    name: 'Innovative Technology Development',
    manpower: '15 Researchers, 5 Engineers',
    resources: 'Lab Equipment, Software Tools, Budget: $500,000',
    manager: 'Jane Doe',
    startDate: '2023-01-01',
    endDate: '2024-06-01',
    team: [
      'John Smith - Lead Researcher',
      'Emily Johnson - Software Engineer',
      'Michael Brown - Data Analyst',
      'Jessica Davis - QA Engineer',
      'Chris Wilson - Project Coordinator',
    ],
  };

  // Sample data for milestones
  const milestones = [
    { title: 'Project Kickoff', date: '2023-01-01', description: 'Official start of the project with initial planning and discussions.', status: 'past' },
    { title: 'Initial Research Phase', date: '2023-03-01', description: 'Completion of the initial research phase with findings documented.', status: 'past' },
    { title: 'Prototype Development', date: '2023-06-01', description: 'Development of the prototype based on initial research.', status: 'past' },
    { title: 'Testing Phase', date: '2023-09-01', description: 'Testing the prototype with real users for feedback.', status: 'current' },
    { title: 'Final Development', date: '2024-01-01', description: 'Finalization of the product based on user feedback and testing results.', status: 'future' },
    { title: 'Launch', date: '2024-03-01', description: 'Official launch of the product to the market.', status: 'future' },
    { title: 'Post-Launch Evaluation', date: '2024-06-01', description: 'Evaluation and collection of feedback post-launch.', status: 'future' },
  ];

  const handleUploadReport = () => {
    // Logic for uploading the current report (to be implemented)
    alert('Upload report logic to be implemented');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-8">
      {/* Project Overview Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-4xl font-bold mb-4 text-purple-700">Project Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-700 mb-2"><strong>Project Name:</strong> {project.name}</p>
            <p className="text-gray-700 mb-2"><strong>Manpower:</strong> {project.manpower}</p>
            <p className="text-gray-700 mb-2"><strong>Resources:</strong> {project.resources}</p>
            <p className="text-gray-700 mb-2"><strong>Project Manager:</strong> {project.manager}</p>
            <p className="text-gray-700 mb-2"><strong>Start Date:</strong> {new Date(project.startDate).toLocaleDateString()}</p>
            <p className="text-gray-700 mb-2"><strong>Expected End Date:</strong> {new Date(project.endDate).toLocaleDateString()}</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-purple-700 mb-2">Team Members</h3>
            <ul className="list-disc ml-5">
              {project.team.map((member, index) => (
                <li key={index} className="text-gray-700">{member}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-3xl font-bold mb-6 text-purple-700">Project Timeline</h3>
        <div className="relative">
          <div className="flex flex-col">
            {/* Timeline Items */}
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center mb-8 relative">
                <div className="flex flex-col items-center">
                  <div className={`h-8 w-8 rounded-full border-4 ${milestone.status === 'current' ? 'border-yellow-500 bg-yellow-100' : milestone.status === 'past' ? 'border-purple-600 bg-purple-100' : 'border-gray-300 bg-gray-100'}`}>
                    <div className={`h-4 w-4 rounded-full ${milestone.status === 'current' ? 'bg-yellow-500' : milestone.status === 'past' ? 'bg-purple-600' : 'bg-gray-300'}`}></div>
                  </div>
                  {index < milestones.length - 1 && <div className="h-full w-1 bg-gray-300 absolute top-0 left-3"></div>}
                </div>
                <div className="ml-4">
                  <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h4 className="font-semibold text-lg">{milestone.title}</h4>
                    <p className="text-gray-600 mb-2">{milestone.description}</p>
                    <p className="text-gray-400 italic">{milestone.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upload Report Button */}
        {/* <div className="flex justify-end mt-6">
          <button
            onClick={handleUploadReport}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Upload Current Report
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectDetailsSection;