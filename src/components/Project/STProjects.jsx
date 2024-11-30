

const STProjects = () => {
  // Sample data for S&T projects
  const stProjects = [
    {
      id: 1,
      name: 'Renewable Energy Research',
      manager: 'Alice Williams',
      status: 'Completed',
      startDate: '2022-06-01',
      endDate: '2023-06-01',
    },
    {
      id: 2,
      name: 'Advanced Robotics Initiative',
      manager: 'Michael Brown',
      status: 'Ongoing',
      startDate: '2023-01-15',
      endDate: '2024-06-15',
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">S&T Projects Overview</h2>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-green-600 text-white">
            <th className="py-2 px-4">Project Name</th>
            <th className="py-2 px-4">Project Manager</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Start Date</th>
            <th className="py-2 px-4">End Date</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {stProjects.map(project => (
            <tr key={project.id}>
              <td className="py-2 px-4 border">{project.name}</td>
              <td className="py-2 px-4 border">{project.manager}</td>
              <td className="py-2 px-4 border">{project.status}</td>
              <td className="py-2 px-4 border">{project.startDate}</td>
              <td className="py-2 px-4 border">{project.endDate}</td>
              <td className="py-2 px-4 border">
                <a href="/admin/project/details">
                   <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">View</button> 
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default STProjects;
