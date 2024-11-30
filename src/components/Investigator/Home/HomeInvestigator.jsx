import { useState, useEffect } from "react";
import MinistryLogos from "../../Common/MinistryLogos";
import SideNavBarInvestigator from "../../Admin/Home/SideNavBarAdmin";
import NavBar from "../../Admin/Home/NavBar";

function Home2() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar open/close state
  const [projects, setProjects] = useState([]); // State to store fetched projects
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch projects from the API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log("Fetching projects...");
        const response = await fetch("http://127.0.0.1:5000/api/project");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Debug: Log the fetched data
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err.message); // Debug: Log errors
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Categorize projects by project_type (S&T and R&D)
  const categorizedProjects = {
    'S&T': projects.filter(project => project.project_type === 'S&T'),
    'R&D': projects.filter(project => project.project_type === 'R&D')
  };

  return (
    <div className="relative min-h-screen flex overflow-hidden">
      {/* Ministry Logos - top section */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <MinistryLogos />
      </div>

      {/* Sidebar - left side */}
      <div
        className={`mt-[100px] transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SideNavBarInvestigator
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      {/* Profile NavBar - top-right corner */}
      <NavBar />

      {/* Main content area */}
      <div
        className={`transition-all duration-300 flex-grow mt-40 p-4 ${
          isSidebarOpen ? "ml-80" : "ml-16"
        } mt-[120px]`}
      >
        <h1 className="text-2xl font-bold">Welcome to Pragati.Track</h1>

        {/* Display API data */}
        {loading ? (
          <p>Loading projects...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">S&T Projects</h2>
            {categorizedProjects['S&T'].length > 0 ? (
              <ul className="space-y-4">
                {categorizedProjects['S&T'].map((project, index) => (
                  <li
                    key={index}
                    className="p-4 bg-gray-100 rounded shadow-md hover:bg-gray-200"
                  >
                    <h2 className="text-lg font-semibold">Project {index + 1}</h2>
                    <div className="mt-2">
                      {Object.entries(project).map(([key, value]) => (
                        <p key={key}>
                          <span className="font-bold capitalize">{key.replaceAll('_', ' ')}:</span>{" "}
                          {typeof value === "string" &&
                          new Date(value).toString() !== "Invalid Date"
                            ? new Date(value).toLocaleDateString()
                            : value?.toString() ?? "N/A"}
                        </p>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No S&T projects available.</p>
            )}

            <h2 className="text-xl font-semibold mt-8">R&D Projects</h2>
            {categorizedProjects['R&D'].length > 0 ? (
              <ul className="space-y-4">
                {categorizedProjects['R&D'].map((project, index) => (
                  <li
                    key={index}
                    className="p-4 bg-gray-100 rounded shadow-md hover:bg-gray-200"
                  >
                    <h2 className="text-lg font-semibold">Project {index + 1}</h2>
                    <div className="mt-2">
                      {Object.entries(project).map(([key, value]) => (
                        <p key={key}>
                          <span className="font-bold capitalize">{key.replaceAll('_', ' ')}:</span>{" "}
                          {typeof value === "string" &&
                          new Date(value).toString() !== "Invalid Date"
                            ? new Date(value).toLocaleDateString()
                            : value?.toString() ?? "N/A"}
                        </p>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No R&D projects available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home2;
