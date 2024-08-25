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
  const [toFilter, setToFilter] = useState('');
  const [approvedByFilter, setApprovedByFilter] = useState('');

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
    <div className="p-6 bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-white p-4 rounded shadow mb-6">
        {/* <h1 className="text-2xl font-semibold mb-4">Notification Management</h1> */}
        <div className="flex flex-col md:flex-row md:items-end md:space-x-4 space-y-4 md:space-y-0">
          {/* Search */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
               Title
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
              <option value=""></option>
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
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
             to
            </label>
            <input
              type="date"
              value={dateFilter}
              onChange={handleDateFilterChange}
              className="block w-full pl-3 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
             Approved By
            </label>
            <select
              value={statusFilter}
              onChange={handleStatusFilterChange}
              className="block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value=""></option>
              <option value="Draft">Draft</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Scheduled">Scheduled</option>
            </select>
          </div>
          {/* Buttons */}
          <div className="flex space-x-2">
           
            <button
              onClick={() => handleOpenModal('create')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#50a49a]"
            >
              {/* <FaPlus className="mr-2" /> */}
              Create New Message
            </button>
          </div>
        </div>
        
        <button
              onClick={handleResetFilters}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-white bg-[#50a49a] mt-2 mr-2"
            >
              Search 
            </button>
              <button
              onClick={handleResetFilters}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-white bg-[#50a49a] mt-2 ml-2"
            >
              Reset
            </button>
      </div>

      {/* Message Table */}
      <div className="bg-white p-4 rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-4 py-3 text-left text-md font-bold text-gray-900  tracking-wider"
              >
                Create Date
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-md font-bold text-gray-900 tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-md font-bold text-gray-900  tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-md font-bold text-gray-900  tracking-wider"
              >
                Push Date
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-md font-bold text-gray-900  tracking-wider"
              >
                Edit By
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-md font-bold text-gray-900  tracking-wider"
              >
                Approved By
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-md font-bold text-gray-900  tracking-wider"
              >
                Last Update/Approve
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-center text-md font-bold text-gray-900  tracking-wider"
              >
                Function(s)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
            {filteredMessages.length > 0 ? (
              filteredMessages.map((msg) => (
                <tr key={msg.id}>
                  <td className="px-4 py-2 whitespace-nowrap text-md text-gray-900">
                    {format(msg.createDate, 'dd/MM/yyyy HH:mm')}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-md text-gray-900">
                    {msg.title}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-md">
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
                  <td className="px-4 py-2 whitespace-nowrap text-md text-gray-900">
                    {format(msg.pushDate, 'dd/MM/yyyy HH:mm')}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-md text-gray-900">
                    {msg.editBy}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-md text-gray-900">
                    {msg.approvedBy}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-md text-gray-900">
                    {format(msg.lastUpdate, 'dd/MM/yyyy HH:mm')}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-md text-gray-900">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() => handleOpenModal('edit', msg)}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#50a49a]"
                      >
                       Copy and create new message
                      </button>
                      <button
                        onClick={() => handleDeleteMessage(msg.id)}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#50a49a]"
                      >
                        Details
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
