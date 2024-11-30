import { useParams } from 'react-router-dom';
import { useState } from 'react';
import MinistryLogos from '../../../Common/MinistryLogos';
import SideNavBarAdmin from '../../Home/SideNavBarAdmin';
import ProjectDetailsSection from './ProjectDetailsSection'; 
import OrganizationDetailsSection from './OrganizationDetailsSection'; 
import InvestigatorDetailsSection from './InvestigatorDetailsSection'; 
import StatisticsSection from './StatisticsSection'; 
import AuditReportSection from './AuditReportSection'; 

const ProjectDetails = () => {
  const { projectId } = useParams(); // Get the project ID from the URL
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar open/close state
  const [activeTab, setActiveTab] = useState('ProjectDetails'); // Default to Project Details tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Sample project data for demonstration
  const projects = {
    1: {
      name: 'Innovative Technology Development',
      manager: 'Jane Doe',
      description: 'A project focusing on innovative technology solutions.',
      timeline: [
        { title: 'Kickoff', date: '2023-01-01', details: 'Project started.' },
        { title: 'Phase 1', date: '2023-06-01', details: 'First phase completed.' },
      ],
      statistics: {
        budget: '$500,000',
        duration: '18 months',
        teamSize: '15 Researchers, 5 Engineers',
        status: 'Ongoing',
      },
      organization: {
        name: 'XYZ Research Institute',
        established: 'January 15, 2000',
        ceo: 'Dr. John Smith',
        address: '123 Research Lane, Innovation City, IN 456789',
        phone: '+91 12345 67890',
        email: 'info@xyzresearch.org',
      },
      coInvestigators: [
        { name: 'Dr. Alice Cooper', role: 'Co-Investigator' },
        { name: 'Prof. Bob Brown', role: 'Consultant' },
      ],
      auditReports: [
        { title: 'Audit Report Q1', link: '/reports/q1-audit.pdf' },
        { title: 'Audit Report Q2', link: '/reports/q2-audit.pdf' },
      ],
    },
    // Add more projects as needed
  };

  const projectDetails = projects[projectId] || {}; // Fetch project details by ID

  return (
    <div className="flex min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-40">
        <MinistryLogos />
      </div>

      {/* Sidebar - left side */}
      <div className={`mt-[100px] transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <SideNavBarAdmin isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Main content area */}
      <div className={`flex-grow transition-all duration-300 mt-[120px] p-8 bg-gray-100 ${isSidebarOpen ? 'ml-80' : 'ml-16'}`}>
        <h2 className="text-4xl font-bold mb-4">{projectDetails.name}</h2>
        <p><strong></strong> {projectDetails.manager}</p>
        <p>     <p className="text-gray-500">Admin Console</p>{projectDetails.description}</p>

        {/* Tabbed Interface for Project Details, Organization, Investigators, Statistics, Audit Reports */}
        <div className="mt-4 bg-white rounded-lg shadow-lg">
          <ul className="flex text-sm font-medium text-center text-gray-500 border-b border-gray-300">
            <li className="mr-2">
              <button
                onClick={() => handleTabClick('ProjectDetails')}
                className={`inline-block p-4 rounded-t-lg ${activeTab === 'ProjectDetails' ? 'text-purple-600 bg-white border-b-2 border-purple-600' : 'hover:text-gray-600 hover:bg-gray-200'}`}
              >
                Project Details
              </button>
            </li>
            <li className="mr-2">
              <button
                onClick={() => handleTabClick('OrganizationDetails')}
                className={`inline-block p-4 rounded-t-lg ${activeTab === 'OrganizationDetails' ? 'text-purple-600 bg-white border-b-2 border-purple-600' : 'hover:text-gray-600 hover:bg-gray-200'}`}
              >
                Organization Details
              </button>
            </li>
            <li className="mr-2">
              <button
                onClick={() => handleTabClick('InvestigatorDetails')}
                className={`inline-block p-4 rounded-t-lg ${activeTab === 'InvestigatorDetails' ? 'text-purple-600 bg-white border-b-2 border-purple-600' : 'hover:text-gray-600 hover:bg-gray-200'}`}
              >
                Investigator Details
              </button>
            </li>
            <li className="mr-2">
              <button
                onClick={() => handleTabClick('Statistics')}
                className={`inline-block p-4 rounded-t-lg ${activeTab === 'Statistics' ? 'text-purple-600 bg-white border-b-2 border-purple-600' : 'hover:text-gray-600 hover:bg-gray-200'}`}
              >
                Statistics
              </button>
            </li>
            <li className="mr-2">
              <button
                onClick={() => handleTabClick('AuditReport')}
                className={`inline-block p-4 rounded-t-lg ${activeTab === 'AuditReport' ? 'text-purple-600 bg-white border-b-2 border-purple-600' : 'hover:text-gray-600 hover:bg-gray-200'}`}
              >
                Report
              </button>
            </li>
          </ul>

          {/* Render respective sections based on active tab */}
          {activeTab === 'ProjectDetails' && <ProjectDetailsSection projectDetails={projectDetails} />}
          {activeTab === 'OrganizationDetails' && <OrganizationDetailsSection  />}
          {activeTab === 'InvestigatorDetails' && <InvestigatorDetailsSection coInvestigators={projectDetails.coInvestigators} />}
          {activeTab === 'Statistics' && <StatisticsSection 
  statistics={{
    funding: {
      labels: ['Phase 1', 'Phase 2', 'Phase 3','phase 4'],
      data: [500000, 300000, 450000, 700000]
    },
    status: {
      ongoing: 60,
      completed: 30,
      pending: 10
    },
    resources: {
      labels: ['Phase 1', 'Phase 2', 'Phase 3',],
      data: [5, 10, 15]
    }
  }} 
/>
}
          {activeTab === 'AuditReport' && <AuditReportSection projectName={projectDetails.name} />}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
