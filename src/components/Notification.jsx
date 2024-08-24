// // import React, { useState, useEffect } from 'react';
// // import { FaEdit, FaTrash, FaCopy } from 'react-icons/fa';

// // const MessageTable = () => {
// //   // State management
// //   const [messages, setMessages] = useState([]);
// //   const [filteredMessages, setFilteredMessages] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [statusFilter, setStatusFilter] = useState('');
// //   const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });
// //   const [recipientFilter, setRecipientFilter] = useState('');
// //   const [approverFilter, setApproverFilter] = useState('');

// //   useEffect(() => {
// //     // Fetch data from an API or use static data
// //     fetchMessages();
// //   }, []);

// //   const fetchMessages = async () => {
// //     // Placeholder for fetching data
// //     const fetchedMessages = [
// //       // Mock data
// //     ];
// //     setMessages(fetchedMessages);
// //     setFilteredMessages(fetchedMessages);
// //   };

// //   const handleSearch = (e) => {
// //     setSearchQuery(e.target.value);
// //     filterMessages();
// //   };

// //   const handleFilterChange = (filterType, value) => {
// //     if (filterType === 'status') setStatusFilter(value);
// //     if (filterType === 'recipient') setRecipientFilter(value);
// //     if (filterType === 'approver') setApproverFilter(value);
// //     filterMessages();
// //   };

// //   const filterMessages = () => {
// //     let filtered = messages.filter((message) => {
// //       const matchesSearch = message.title.toLowerCase().includes(searchQuery.toLowerCase());
// //       const matchesStatus = statusFilter ? message.status === statusFilter : true;
// //       const matchesRecipient = recipientFilter ? message.recipient === recipientFilter : true;
// //       const matchesApprover = approverFilter ? message.approvedBy === approverFilter : true;
// //       const matchesDateRange = dateRange.startDate && dateRange.endDate
// //         ? new Date(message.createDate) >= new Date(dateRange.startDate) &&
// //           new Date(message.createDate) <= new Date(dateRange.endDate)
// //         : true;

// //       return matchesSearch && matchesStatus && matchesRecipient && matchesApprover && matchesDateRange;
// //     });

// //     setFilteredMessages(filtered);
// //   };

// //   const handleDelete = (id) => {
// //     // Logic for deleting a message
// //   };

// //   const handleCopy = (message) => {
// //     // Logic for copying and creating a new message
// //   };

// //   const handleCreateNewMessage = () => {
// //     // Logic for opening a form to create a new message
// //   };

// //   return (
// //     <div className="p-4">
// //       <header className="mb-4">
// //         <div className="flex flex-wrap items-center justify-between">
// //           <input
// //             type="text"
// //             className="border rounded p-2 w-full sm:w-auto mb-2"
// //             placeholder="Search..."
// //             value={searchQuery}
// //             onChange={handleSearch}
// //           />
// //           <select
// //             className="border rounded p-2 w-full sm:w-auto mb-2"
// //             value={statusFilter}
// //             onChange={(e) => handleFilterChange('status', e.target.value)}
// //           >
// //             <option value="">All Statuses</option>
// //             <option value="Draft">Draft</option>
// //             <option value="Delivered">Delivered</option>
// //             <option value="Canceled">Canceled</option>
// //             <option value="Scheduled">Scheduled</option>
// //           </select>
// //           <input
// //             type="date"
// //             className="border rounded p-2 mb-2"
// //             placeholder="Start Date"
// //             value={dateRange.startDate}
// //             onChange={(e) => setDateRange({ ...dateRange, startDate: e.target.value })}
// //           />
// //           <input
// //             type="date"
// //             className="border rounded p-2 mb-2"
// //             placeholder="End Date"
// //             value={dateRange.endDate}
// //             onChange={(e) => setDateRange({ ...dateRange, endDate: e.target.value })}
// //           />
// //           <select
// //             className="border rounded p-2 w-full sm:w-auto mb-2"
// //             value={recipientFilter}
// //             onChange={(e) => handleFilterChange('recipient', e.target.value)}
// //           >
// //             <option value="">All Recipients</option>
// //             <option value="Recipient 1">Recipient 1</option>
// //             <option value="Recipient 2">Recipient 2</option>
// //           </select>
// //           <select
// //             className="border rounded p-2 w-full sm:w-auto mb-2"
// //             value={approverFilter}
// //             onChange={(e) => handleFilterChange('approver', e.target.value)}
// //           >
// //             <option value="">All Approvers</option>
// //             <option value="Approver 1">Approver 1</option>
// //             <option value="Approver 2">Approver 2</option>
// //           </select>
// //           <button
// //             className="bg-blue-500 text-white rounded p-2"
// //             onClick={handleCreateNewMessage}
// //           >
// //             Create New Message
// //           </button>
// //         </div>
// //       </header>
// //       <table className="w-full border-collapse">
// //         <thead>
// //           <tr className="bg-gray-200">
// //             <th className="border p-2">Create Date</th>
// //             <th className="border p-2">Title</th>
// //             <th className="border p-2">Status</th>
// //             <th className="border p-2">Push Date</th>
// //             <th className="border p-2">Edit By</th>
// //             <th className="border p-2">Approved By</th>
// //             <th className="border p-2">Last Update/Approve</th>
// //             <th className="border p-2">Function(s)</th>
// //             <th className="border p-2">Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {filteredMessages.map((message) => (
// //             <tr key={message.id} className="bg-white">
// //               <td className="border p-2">{message.createDate}</td>
// //               <td className="border p-2">{message.title}</td>
// //               <td className="border p-2">{message.status}</td>
// //               <td className="border p-2">{message.pushDate}</td>
// //               <td className="border p-2">{message.editBy}</td>
// //               <td className="border p-2">{message.approvedBy}</td>
// //               <td className="border p-2">{message.lastUpdateApprove}</td>
// //               <td className="border p-2">{message.functions}</td>
// //               <td className="border p-2 flex space-x-2">
// //                 <button
// //                   className="text-blue-500"
// //                   onClick={() => console.log(`Editing ${message.id}`)}
// //                 >
// //                   <FaEdit />
// //                 </button>
// //                 <button
// //                   className="text-red-500"
// //                   onClick={() => handleDelete(message.id)}
// //                 >
// //                   <FaTrash />
// //                 </button>
// //                 <button
// //                   className="text-green-500"
// //                   onClick={() => handleCopy(message)}
// //                 >
// //                   <FaCopy />
// //                 </button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default MessageTable;



// import React, { useState } from 'react';
// import MessageTable from './MessageTable';
// import NewMessagePopup from './NewMessagePopup';

// const NotificationManagement = () => {
//   const [messages, setMessages] = useState([
//     {
//       createDate: '15/01/2024 11:00',
//       title: "Let's join DIY Bracelet now!",
//       status: 'Draft',
//       pushDate: '15/01/2024 11:00',
//       editBy: 'Amy Lee',
//       approvedBy: 'Ling',
//       lastUpdate: '15/01/2024 11:00',
//     },
//   ]);

//   const [showPopup, setShowPopup] = useState(false);

//   const addNewMessage = (newMessage) => {
//     setMessages([...messages, newMessage]);
//     setShowPopup(false);
//   };

//   return (
//     <div className="container mx-auto mt-4 p-4">
//       <div className="flex space-x-4 items-center mb-4">
//         <input
//           type="text"
//           placeholder="Title"
//           className="border p-2 rounded w-1/4"
//         />
//         <select className="border p-2 rounded w-1/4">
//           <option value="">Status</option>
//           <option value="draft">Draft</option>
//           <option value="delivered">Delivered</option>
//           <option value="cancelled">Cancelled</option>
//           <option value="scheduled">Scheduled</option>
//         </select>
//         <input type="date" className="border p-2 rounded w-1/4" />
//         <button className="bg-green-500 text-white p-2 rounded">Search</button>
//         <button className="bg-gray-500 text-white p-2 rounded">Reset</button>
//         <button
//           onClick={() => setShowPopup(true)}
//           className="bg-blue-500 text-white p-2 rounded"
//         >
//           Create new message
//         </button>
//       </div>

//       {/* Message Table */}
//       <MessageTable messages={messages} />

//       {/* New Message Popup */}
//       {showPopup && <NewMessagePopup addNewMessage={addNewMessage} onClose={() => setShowPopup(false)} />}
//     </div>
//   );
// };

// export default NotificationManagement;
import React, { useState, useEffect } from 'react';
import {
  FaSearch,
  FaPlus,
  FaEdit,
  FaTrash,
  FaCopy,
  FaTimes,
} from 'react-icons/fa';
import { format } from 'date-fns';
import Modal from './Modal'; // We'll create this component next

const Notification = () => {
  // Sample data
  const initialMessages = [
    {
      id: 1,
      createDate: new Date(),
      title: "Let's join DIY Bracelet now!",
      status: 'Draft',
      pushDate: new Date(),
      editBy: 'Amy Lee',
      approvedBy: 'Ling',
      lastUpdate: new Date(),
    },
    {
      id: 2,
      createDate: new Date(),
      title: 'New Features Released!',
      status: 'Delivered',
      pushDate: new Date(),
      editBy: 'John Doe',
      approvedBy: 'Mike',
      lastUpdate: new Date(),
    },
    // Add more messages as needed
  ];

  // State Management
  const [messages, setMessages] = useState(initialMessages);
  const [filteredMessages, setFilteredMessages] = useState(initialMessages);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('create'); // 'create' | 'edit' | 'copy'
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Effect to filter messages based on search and filters
  useEffect(() => {
    let filtered = messages;

    if (searchTerm) {
      filtered = filtered.filter((msg) =>
        msg.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter) {
      filtered = filtered.filter((msg) => msg.status === statusFilter);
    }

    if (dateFilter) {
      filtered = filtered.filter(
        (msg) =>
          format(msg.createDate, 'yyyy-MM-dd') ===
          format(new Date(dateFilter), 'yyyy-MM-dd')
      );
    }

    setFilteredMessages(filtered);
  }, [messages, searchTerm, statusFilter, dateFilter]);

  // Handlers
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleDateFilterChange = (e) => {
    setDateFilter(e.target.value);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setStatusFilter('');
    setDateFilter('');
  };

  const handleOpenModal = (mode, message = null) => {
    setModalMode(mode);
    setSelectedMessage(message);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMessage(null);
  };

  const handleAddMessage = (newMessage) => {
    setMessages([
      ...messages,
      { id: messages.length + 1, ...newMessage, createDate: new Date() },
    ]);
    handleCloseModal();
  };

  const handleUpdateMessage = (updatedMessage) => {
    setMessages(
      messages.map((msg) =>
        msg.id === updatedMessage.id ? updatedMessage : msg
      )
    );
    handleCloseModal();
  };

  const handleDeleteMessage = (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      setMessages(messages.filter((msg) => msg.id !== id));
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white p-4 rounded shadow mb-6">
        {/* <h1 className="text-2xl font-semibold mb-4">Notification Management</h1> */}
        <div className="flex flex-col md:flex-row md:items-end md:space-x-4 space-y-4 md:space-y-0">
          {/* Search */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search Title
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search..."
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>
          {/* Status Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              value={statusFilter}
              onChange={handleStatusFilterChange}
              className="block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">All</option>
              <option value="Draft">Draft</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Scheduled">Scheduled</option>
            </select>
          </div>
          {/* Date Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Create Date
            </label>
            <input
              type="date"
              value={dateFilter}
              onChange={handleDateFilterChange}
              className="block w-full pl-3 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Buttons */}
          <div className="flex space-x-2">
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Reset
            </button>
            <button
              onClick={() => handleOpenModal('create')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <FaPlus className="mr-2" />
              Create New Message
            </button>
          </div>
        </div>
      </div>

      {/* Message Table */}
      <div className="bg-white p-4 rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Create Date
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Push Date
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Edit By
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Approved By
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Last Update/Approve
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredMessages.length > 0 ? (
              filteredMessages.map((msg) => (
                <tr key={msg.id}>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                    {format(msg.createDate, 'dd/MM/yyyy HH:mm')}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                    {msg.title}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        msg.status === 'Draft'
                          ? 'bg-yellow-100 text-yellow-800'
                          : msg.status === 'Delivered'
                          ? 'bg-green-100 text-green-800'
                          : msg.status === 'Cancelled'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {msg.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                    {format(msg.pushDate, 'dd/MM/yyyy HH:mm')}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                    {msg.editBy}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                    {msg.approvedBy}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                    {format(msg.lastUpdate, 'dd/MM/yyyy HH:mm')}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() => handleOpenModal('edit', msg)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDeleteMessage(msg.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                      <button
                        onClick={() => handleOpenModal('copy', msg)}
                        className="text-green-500 hover:text-green-700"
                      >
                        <FaCopy />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="px-4 py-2 text-center text-sm text-gray-500"
                >
                  No messages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Create/Edit Message Modal */}
      {isModalOpen && (
        <Modal
          mode={modalMode}
          message={selectedMessage}
          onClose={handleCloseModal}
          onAdd={handleAddMessage}
          onUpdate={handleUpdateMessage}
        />
      )}
    </div>
  );
};

export default Notification;
