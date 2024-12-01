import { useState, useEffect } from 'react';
import MinistryLogos from '../../Common/MinistryLogos';
import SideNavBarAdmin from '../../Admin/Home/SideNavBarAdmin'; // Sidebar component
import ProfilePng from '../../../assets/Profile.png';

const ConnectWithAdmins = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedAdmin, setSelectedAdmin] = useState(null); // Selected admin to chat with
  const [message, setMessage] = useState(''); // Message input from investigator
  const [tag, setTag] = useState(''); // Tag input for messages
  const [chatLogs, setChatLogs] = useState([]); // Chat logs with each admin
  const [admins, setAdmins] = useState([]); // List of admins
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch admins from the API
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/api/admin`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // Log the API response

        setAdmins(data); // Set the fetched admins
      } catch (err) {
        console.error('Error fetching admins:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdmins();
  }, []);

  // Select admin to chat
  const handleSelectAdmin = (admin) => {
    setSelectedAdmin(admin); // Set selected admin for the chat
  };

  // Handle message input
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Handle tag input
  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  // Handle sending a message with tags
  const handleSendMessage = () => {
    if (message.trim() && selectedAdmin) {
      const newMessage = {
        adminId: selectedAdmin.admin_id,
        sender: 'Investigator',
        content: message,
        tags: tag.trim() ? [tag] : [] // Add tag if available
      };
      setChatLogs([...chatLogs, newMessage]);
      setMessage(''); // Clear the input
      setTag(''); // Clear the tag input
    }
  };

  // Render different tags with color coding
  const getTagColor = (type) => {
    switch (type) {
      case 'Meeting':
        return 'bg-blue-500 text-white';
      case 'Delay':
        return 'bg-red-500 text-white';
      case 'Resources':
        return 'bg-green-500 text-white';
      case 'Funding':
        return 'bg-yellow-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex">
      {/* Ministry Logos */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <MinistryLogos />
      </div>

      {/* Sidebar */}
      <div className={`fixed top-[100px] left-0 mt-[100px] transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <SideNavBarAdmin isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Main Chat Area */}
      <div className={`transition-all duration-300 ml-${isSidebarOpen ? '80' : '20'} mt-[120px] p-8 flex-grow flex`}>
        {/* Admin List */}
        <div className="w-1/4 h-full bg-white rounded-lg shadow-lg p-4 overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">Admins</h2>
          {loading ? (
            <p>Loading admins...</p>
          ) : error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : (
            <div className="flex flex-col space-y-2">
              {admins.length === 0 ? (
                <p>No admins found.</p>
              ) : (
                admins.map((admin) => (
                  <button
                    key={admin.admin_id} // Using admin_id as the key
                    onClick={() => handleSelectAdmin(admin)} // Set selected admin
                    className={`flex items-center py-2 px-4 rounded-md text-white transition duration-300 ease-in-out ${selectedAdmin?.admin_id === admin.admin_id ? 'bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'}`}
                  >
                    <img src={ProfilePng} alt={admin.username} className="rounded-full size-6 mr-2" />
                    {admin.username} {/* Displaying the admin_name field */}
                  </button>
                ))
              )}
            </div>
          )}
        </div>

        {/* Chat Section */}
        <div className="flex-grow ml-4 bg-white rounded-lg shadow-lg p-8">
          {selectedAdmin ? (
            <>
              <h2 className="text-3xl font-bold mb-4">Chat with {selectedAdmin.username}</h2>

              {/* Past Messages */}
              <div className="h-[525px] overflow-y-auto mb-4 flex flex-col space-y-4">
                {chatLogs
                  .filter((log) => log.adminId === selectedAdmin.admin_id)
                  .map((log, index) => (
                    <div key={index} className={`flex ${log.sender === 'Investigator' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`rounded-lg p-3 ${log.sender === 'Investigator' ? 'bg-purple-200' : 'bg-gray-200'} max-w-xs`}>
                        <p className="font-semibold">{log.sender}</p>
                        <p>{log.content}</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {log.tags.map((tag, idx) => (
                            <span key={idx} className={`${getTagColor(tag)} px-2 py-1 rounded-full`}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                ))}
              </div>

              {/* Message Input and Tag Selector */}
              <div className="flex space-x-4 mb-4">
                <input
                  type="text"
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Type your message..."
                  className="flex-grow p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                
                <select
                  value={tag}
                  onChange={handleTagChange}
                  className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  <option value="">Select Tag</option>
                  <option value="Meeting">Meeting</option>
                  <option value="Delay">Delay</option>
                  <option value="Resources">Resources</option>
                  <option value="Funding">Funding</option>
                  <option value="General">General</option>
                </select>

                <button
                  onClick={handleSendMessage}
                  className="bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition duration-200"
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <h2 className="text-2xl text-center text-gray-600">Select an admin to start chatting</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConnectWithAdmins;
