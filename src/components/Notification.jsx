import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import Modal from "./Modal"; // We'll create this component next
import { FaSearch } from "react-icons/fa";

const Notification = () => {
  // Sample data
  const initialMessages = [
    {
      id: 1,
      createDate: new Date(),
      title: "Let's join DIY Bracelet now!",
      status: "Draft",
      pushDate: new Date(),
      editBy: "Amy Lee",
      approvedBy: "Ling",
      lastUpdate: new Date(),
    },
    {
      id: 2,
      createDate: new Date(),
      title: "New Features Released!",
      status: "Delivered",
      pushDate: new Date(),
      editBy: "John Doe",
      approvedBy: "Mike",
      lastUpdate: new Date(),
    },
    // Add more messages as needed
  ];

  // State Management
  const [messages, setMessages] = useState(initialMessages);
  const [filteredMessages, setFilteredMessages] = useState(initialMessages);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("create"); // 'create' | 'edit' | 'copy'
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
          format(msg.createDate, "yyyy-MM-dd") ===
          format(new Date(dateFilter), "yyyy-MM-dd")
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
    setSearchTerm("");
    setStatusFilter("");
    setDateFilter("");
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
    if (window.confirm("Are you sure you want to delete this message?")) {
      setMessages(messages.filter((msg) => msg.id !== id));
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-4 space-y-4 sm:space-y-0">
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
              To
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
              <option value="Amy Lee">Amy Lee</option>
              <option value="John Doe">John Doe</option>
              <option value="Ling">Ling</option>
              <option value="Mike">Mike</option>
            </select>
          </div>
          {/* Buttons */}
          <div className="flex space-x-2 mt-4 sm:mt-0">
            <button
              onClick={() => handleOpenModal("create")}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#50a49a]"
            >
              Create New Message
            </button>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-white bg-[#50a49a]"
            >
              Search
            </button>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-white bg-[#50a49a]"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Message Table */}
      <div className="bg-white p-4 rounded shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-2 py-3 text-left text-sm font-bold text-gray-900 tracking-wider">
                Create Date
              </th>
              <th className="px-2 py-3 text-left text-sm font-bold text-gray-900 tracking-wider">
                Title
              </th>
              <th className="px-2 py-3 text-left text-sm font-bold text-gray-900 tracking-wider">
                Status
              </th>
              <th className="px-2 py-3 text-left text-sm font-bold text-gray-900 tracking-wider">
                Push Date
              </th>
              <th className="px-2 py-3 text-left text-sm font-bold text-gray-900 tracking-wider">
                Edit By
              </th>
              <th className="px-2 py-3 text-left text-sm font-bold text-gray-900 tracking-wider">
                Approved By
              </th>
              <th className="px-2 py-3 text-left text-sm font-bold text-gray-900 tracking-wider">
                Last Update/Approve
              </th>
              <th className="px-2 py-3 text-left text-sm font-bold text-gray-900 tracking-wider ml-1.5">
                Function(s)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredMessages.map((msg) => (
              <tr key={msg.id}>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {format(new Date(msg.createDate), "yyyy-MM-dd")}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">{msg.title}</td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {msg.status}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {format(new Date(msg.pushDate), "yyyy-MM-dd")}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {msg.editBy}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {msg.approvedBy}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  {format(new Date(msg.lastUpdate), "yyyy-MM-dd")}
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                  <div className="flex items-center ">
                    <button
                      onClick={() => handleOpenModal("edit", msg)}
                      className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded-md text-white bg-[#50a49a] mr-4"
                    >
                      Copy & Create message
                    </button>
                    <button
                      onClick={() => handleDeleteMessage(msg.id)}
                      className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded-md text-white bg-[#50a49a] "
                    >
                      Details
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Creating/Editing Messages */}
      {isModalOpen && (
        <Modal
          mode={modalMode}
          message={selectedMessage}
          onClose={handleCloseModal}
          onSave={
            modalMode === "create" ? handleAddMessage : handleUpdateMessage
          }
        />
      )}
    </div>
  );
};

export default Notification;
