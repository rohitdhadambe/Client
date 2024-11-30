

const RDProjects = () => {
  // Sample data for R&D projects
  const rdProjects = [
    {
      id: 1,
      name: 'Innovative Technology Development',
      manager: 'Jane Doe',
      status: 'Ongoing',
      startDate: '2023-01-01',
      endDate: '2024-01-01',
    },
    {
      id: 2,
      name: 'AI Research and Development',
      manager: 'John Smith',
      status: 'Completed',
      startDate: '2022-01-01',
      endDate: '2023-01-01',
    },
    {
      id: 3,
      name: 'Green Energy Solutions',
      manager: 'Emily Johnson',
      status: 'Ongoing',
      startDate: '2023-05-01',
      endDate: '2024-12-01',
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">R&D Projects Overview</h2>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-purple-600 text-white">
            <th className="py-2 px-4">Project Name</th>
            <th className="py-2 px-4">Project Manager</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Start Date</th>
            <th className="py-2 px-4">End Date</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {rdProjects.map(project => (
            <tr key={project.id}>
              <td className="py-2 px-4 border">{project.name}</td>
              <td className="py-2 px-4 border">{project.manager}</td>
              <td className="py-2 px-4 border">{project.status}</td>
              <td className="py-2 px-4 border">{project.startDate}</td>
              <td className="py-2 px-4 border">{project.endDate}</td>
              <td className="py-2 px-4 border">
               <a href="/admin/project/details"> <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">View</button></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RDProjects;
